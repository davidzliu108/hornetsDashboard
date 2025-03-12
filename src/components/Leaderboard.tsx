import { Player } from './mockData';

interface PlayerLeaderboardProps {
  players: Player[];
}

export default function PlayerLeaderboard({ players }: PlayerLeaderboardProps) {
  // Function to get top 5 players in a specific stat category
  const getTopPlayers = (statKey: keyof Player['stats'], displayName: string) => {
    const sortedPlayers = [...players].sort((a, b) => b.stats[statKey] - a.stats[statKey]);
    const top5Players = sortedPlayers.slice(0, 5);
    
    return (
      <div className="w-full md:w-1/2 lg:w-1/5 p-2">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
          <div className="bg-teal-500 text-white py-2 px-4">
            <h3 className="font-bold">{displayName}</h3>
          </div>
          <ul className="divide-y divide-gray-200">
            {top5Players.map((player, index) => (
              <li key={player.id} className="p-3 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-teal-700 font-bold mr-2">#{index + 1}</span>
                    <span className="text-gray-800">{player.name}</span>
                  </div>
                  <span className="font-medium text-gray-600">
                    {statKey === 'fgp' 
                      ? `${player.stats[statKey].toFixed(1)}%` 
                      : player.stats[statKey]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Current Player Leaderboard</h2>
      <div className="flex flex-wrap -mx-2">
        {getTopPlayers('ppg', 'Points Per Game')}
        {getTopPlayers('rpg', 'Rebounds Per Game')}
        {getTopPlayers('apg', 'Assists Per Game')}
        {getTopPlayers('fgp', 'Field Goal %')}
        {getTopPlayers('mpg', 'Minutes Per Game')}
      </div>
    </div>
  );
}