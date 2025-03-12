"use client";

import React, { useState } from 'react';
import { Player } from './mockData';

interface PointsDistributionChartProps {
  players: Player[];
}

export default function PointsDistributionChart({ players }: PointsDistributionChartProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Sort players by points per game in descending order
  const sortedPlayers = [...players]
    .sort((a, b) => b.stats.ppg - a.stats.ppg);
  
  // Calculate how many players to show in collapsed state (approximately 1/3)
  const collapsedCount = Math.ceil(sortedPlayers.length / 3);
  const displayedPlayers = isExpanded ? sortedPlayers : sortedPlayers.slice(0, collapsedCount);

  // Find the max PPG to determine the full scale (for width calculations)
  const maxPpg = Math.max(...sortedPlayers.map(player => player.stats.ppg));
  // Round up to nearest 5 for a cleaner scale
  const scaleCeiling = Math.ceil(maxPpg / 5) * 5;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Points Distribution</h2>
      <p className="text-sm text-gray-500 mb-2">Points per game for all players</p>
      
      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <div className="min-w-max">
          {displayedPlayers.map((player) => (
            <div key={player.id} className="mb-3">
              <div className="flex items-center">
                <div className="w-32 md:w-40 truncate pr-2 font-medium text-gray-800">{player.name}</div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {/* PPG Value */}
                    <div className="w-16 text-sm text-right pr-2 text-gray-600">{player.stats.ppg.toFixed(1)}</div>
                    {/* PPG Bar */}
                    <div className="flex-1 bg-gray-200 rounded-full h-6">
                      <div 
                        className="bg-teal-500 h-6 rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${(player.stats.ppg / scaleCeiling) * 100}%` }}
                      >
                        {player.stats.ppg > 10 && (
                          <span className="text-xs text-white font-medium">
                            {player.stats.ppg.toFixed(1)} PPG
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* PPG Scale */}
        <div className="mt-4 pl-48 md:pl-56 pr-2">
          <div className="relative h-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const value = Math.round((i * scaleCeiling) / 5);
              const position = `${(i * 20)}%`;
              return (
                <div key={i} className="absolute top-0" style={{ left: position }}>
                  <div className="h-3 w-1 bg-gray-400"></div>
                  <div className="text-xs text-gray-500 mt-1">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <button 
            onClick={toggleExpand}
            className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show All Players'}
          </button>
        </div>
      </div>
    </div>
  );
}