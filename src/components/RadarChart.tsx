"use client";

import React, { useState } from 'react';
import { Player } from './mockData';

interface PerformanceRadarChartProps {
  players: Player[];
}

export default function PerformanceRadarChart({ players }: PerformanceRadarChartProps) {
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0]?.id || 1);
  
  const selectedPlayer = players.find(player => player.id === selectedPlayerId) || players[0];
  
  // Define the stats we want to display on the radar chart
  const statCategories = [
    { key: 'ppg', label: 'Points', maxValue: 30, showPercent: false },
    { key: 'rpg', label: 'Rebounds', maxValue: 15, showPercent: false },
    { key: 'apg', label: 'Assists', maxValue: 10, showPercent: false },
    { key: 'fgp', label: 'FG%', maxValue: 100, showPercent: true },
    { key: 'mpg', label: 'Minutes', maxValue: 40, showPercent: false },
    { key: 'tpp', label: '3P%', maxValue: 100, showPercent: true }
  ];
  
  // Calculate angle for each axis
  const angleStep = (Math.PI * 2) / statCategories.length;
  
  // Calculate coordinates for each stat point and axis endpoint
  const calculatePoint = (value: number, maxValue: number, index: number) => {
    const percentage = value / maxValue;
    const radius = percentage * 100; // 100 is the max radius
    const angle = index * angleStep - Math.PI / 2; // Start from top (subtract PI/2)
    return {
      x: 150 + radius * Math.cos(angle),
      y: 150 + radius * Math.sin(angle)
    };
  };
  
  // Generate axis lines
  const axisLines = statCategories.map((category, index) => {
    const { x, y } = calculatePoint(category.maxValue, category.maxValue, index);
    return <line key={`axis-${index}`} x1="150" y1="150" x2={x} y2={y} stroke="#CBD5E0" strokeWidth="1" />;
  });
  
  // Generate polygon for player stats
  const playerPoints = statCategories.map((category, index) => {
    const stat = selectedPlayer.stats[category.key as keyof Player['stats']];
    const { x, y } = calculatePoint(stat, category.maxValue, index);
    return `${x},${y}`;
  });
  
  // Generate circles for stat labels
  const statLabels = statCategories.map((category, index) => {
    const { x, y } = calculatePoint(category.maxValue * 1.1, category.maxValue, index);
    return (
      <text 
        key={`label-${index}`} 
        x={x} 
        y={y} 
        fontSize="12" 
        fill="#4A5568" 
        textAnchor="middle" 
        dominantBaseline="middle"
      >
        {category.label}
      </text>
    );
  });
  
  // Generate circles for stat points
  const statPoints = statCategories.map((category, index) => {
    const stat = selectedPlayer.stats[category.key as keyof Player['stats']];
    const { x, y } = calculatePoint(stat, category.maxValue, index);
    return (
      <circle 
        key={`point-${index}`} 
        cx={x} 
        cy={y} 
        r="4" 
        fill="#38B2AC" 
        stroke="white" 
        strokeWidth="2" 
      />
    );
  });
  
  // Generate concentric circles for scale
  const concentricCircles = [20, 40, 60, 80, 100].map((radius, index) => (
    <circle 
      key={`circle-${index}`} 
      cx="150" 
      cy="150" 
      r={radius} 
      fill="none" 
      stroke="#E2E8F0" 
      strokeWidth="1" 
      strokeDasharray={index === 0 ? "none" : "2 2"} 
    />
  ));
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Performance Radar Chart</h2>
      <p className="text-sm text-gray-500 mb-4">Select a player to view their performance across all stat categories</p>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <label htmlFor="player-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Player:
          </label>
          <select
            id="player-select"
            value={selectedPlayerId}
            onChange={(e) => setSelectedPlayerId(Number(e.target.value))}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 text-gray-800"
          >
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name} ({player.position})
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-center">
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* Background circles for scale */}
            {concentricCircles}
            
            {/* Axis lines */}
            {axisLines}
            
            {/* Stat polygon */}
            <polygon 
              points={playerPoints.join(' ')} 
              fill="rgba(56, 178, 172, 0.2)" 
              stroke="#38B2AC" 
              strokeWidth="2" 
            />
            
            {/* Stat points */}
            {statPoints}
            
            {/* Stat labels */}
            {statLabels}
          </svg>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium text-center text-gray-800">
            {selectedPlayer.name}'s Performance Profile
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {statCategories.map((category) => {
              const stat = selectedPlayer.stats[category.key as keyof Player['stats']];
              return (
                <div key={category.key} className="text-center p-2 bg-gray-50 rounded">
                  <div className="text-sm font-medium text-gray-500">{category.label}</div>
                  <div className="text-lg font-bold text-teal-600">
                    {category.showPercent ? `${stat.toFixed(1)}%` : stat.toFixed(1)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}