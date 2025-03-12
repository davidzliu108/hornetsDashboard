import React from 'react';

import { Player } from './mockData';

interface ScrollableCardsProps {
  players: Player[];
}

const ScrollableCards: React.FC<ScrollableCardsProps> = ({ players }) => {
  return (
    <div className="relative mb-10">
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-4 w-max px-2">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
            >
              <div className="h-32 bg-teal-500 flex items-center justify-center">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{player.name}</h3>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {player.position}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points avg</span>
                    <span className="font-medium text-gray-800">{player.stats.ppg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rebounds avg</span>
                    <span className="font-medium text-gray-800">{player.stats.rpg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assists</span>
                    <span className="font-medium text-gray-800">{player.stats.apg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Field Goal %</span>
                    <span className="font-medium text-gray-800">
                      {player.stats.fgp.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minutes avg</span>
                    <span className="font-medium text-gray-800">{player.stats.mpg}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;