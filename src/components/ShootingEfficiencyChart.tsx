"use client";

import React, { useState } from 'react';
import { Player } from './mockData';

interface ShootingEfficiencyChartProps {
  players: Player[];
}

export default function ShootingEfficiencyChart({ players }: ShootingEfficiencyChartProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Sort players by field goal percentage in descending order
  const sortedPlayers = [...players]
    .filter(player => player.stats.fgp > 0) // Only include players with FG%
    .sort((a, b) => b.stats.fgp - a.stats.fgp);
  
  // Calculate how many players to show in collapsed state (approximately 1/4)
  const collapsedCount = Math.ceil(sortedPlayers.length / 4);
  const displayedPlayers = isExpanded ? sortedPlayers : sortedPlayers.slice(0, collapsedCount);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Shooting Efficiency</h2>
      <p className="text-sm text-gray-500 mb-2">Comparing Field Goal % and 3-Point % for each player</p>
      
      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <div className="min-w-max">
          {displayedPlayers.map((player) => (
            <div key={player.id} className="mb-4">
              <div className="flex items-center mb-1">
                <div className="w-32 md:w-40 truncate pr-2 font-medium text-gray-800">{player.name}</div>
                <div className="flex-1">
                  <div className="flex items-center">
                    {/* FG% Bar */}
                    <div className="w-20 md:w-24 text-sm text-right pr-2 text-gray-600">FG: {player.stats.fgp.toFixed(1)}%</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div 
                        className="bg-teal-500 h-5 rounded-full" 
                        style={{ width: `${player.stats.fgp}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* 3P% Bar */}
                  <div className="flex items-center mt-1">
                    <div className="w-20 md:w-24 text-sm text-right pr-2 text-gray-600">3P: {player.stats.tpp.toFixed(1)}%</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5">
                      <div 
                        className="bg-purple-500 h-5 rounded-full" 
                        style={{ width: `${player.stats.tpp}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center mb-2 text-gray-600">
            <div className="flex items-center mr-4">
              <div className="w-4 h-4 bg-teal-500 rounded-full mr-1"></div>
              <span className="text-sm">Field Goal %</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-1"></div>
              <span className="text-sm">3-Point %</span>
            </div>
          </div>
          
          <button 
            onClick={toggleExpand}
            className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show All Players'}
          </button>
        </div>
      </div>
    </div>
  );
}