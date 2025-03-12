// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import LogoutButton from '../../components/LogoutButton';
import hornetsPlayers from '../../components/mockData';
import ScrollableCards from '../../components/ScrollableCards';
import PlayerLeaderboard from '../../components/Leaderboard';
import ShootingEfficiencyChart from '../../components/ShootingEfficiencyChart';
import PerformanceRadarChart from '../../components/RadarChart';
import PointsDistributionChart from '../../components/PointsDistributionChart';
import { getPlayersByTeamId } from '../../components/GetPlayersApi';

export default
  async function Dashboard() {

    const hornetsPlayersApi = await getPlayersByTeamId(4);

        // Function to parse height from "feet-inches" format to total inches
        const parseHeight = (height: string) => {
            if (!height) return 0; // Handle null or undefined height
            const [feet, inches] = height.split('-').map(Number);
            return feet * 12 + (inches || 0); // Default to 0 if inches are missing
          };
      
        // Get top 5 tallest players
        const top5TallestPlayers = [...hornetsPlayersApi]
        .sort((a, b) => parseHeight(b.height) - parseHeight(a.height))
        .slice(0, 5);
    
        // Get top 5 heaviest players
        const top5HeaviestPlayers = [...hornetsPlayersApi]
        .sort((a, b) => Number(b.weight) - Number(a.weight))
        .slice(0, 5);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">BuzzCenter</h1>
            <p>Powered by Fastbreak AI</p>

            <div className="p-4 max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-teal-500">Hornets Dashboard</h1>
                <LogoutButton />
                </div>
                
                <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Current Charlotte Hornets Roster</h2>
                <p className="text-sm text-gray-500">Scroll horizontally to see all players</p>
                </div>
                
                <ScrollableCards players={hornetsPlayers} />

                <PlayerLeaderboard players={hornetsPlayers} />

                <PerformanceRadarChart players={hornetsPlayers} />
        
                <PointsDistributionChart players={hornetsPlayers} />

                <ShootingEfficiencyChart players={hornetsPlayers} />

                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">All Time Player Stats</h2>
                    <div className="flex flex-wrap -mx-2">
                        {/* Top 5 Tallest Players */}
                        <div className="w-full md:w-1/2 lg:w-1/5 p-2">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <div className="bg-teal-500 text-white py-2 px-4">
                            <h3 className="font-bold">Top 5 Tallest Players</h3>
                            </div>
                            <ul className="divide-y divide-gray-200">
                            {top5TallestPlayers.map((player, index) => (
                                <li key={player.id} className="p-3 hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                    <span className="text-teal-700 font-bold mr-2">#{index + 1}</span>
                                    <span className="text-gray-800">
                                        {player.first_name} {player.last_name}
                                    </span>
                                    </div>
                                    <span className="font-medium text-gray-600">{player.height}</span>
                                </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>

                        {/* Top 5 Heaviest Players */}
                        <div className="w-full md:w-1/2 lg:w-1/5 p-2">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <div className="bg-teal-500 text-white py-2 px-4">
                            <h3 className="font-bold">Top 5 Heaviest Players</h3>
                            </div>
                            <ul className="divide-y divide-gray-200">
                            {top5HeaviestPlayers.map((player, index) => (
                                <li key={player.id} className="p-3 hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                    <span className="text-teal-700 font-bold mr-2">#{index + 1}</span>
                                    <span className="text-gray-800">
                                        {player.first_name} {player.last_name}
                                    </span>
                                    </div>
                                    <span className="font-medium text-gray-600">{player.weight} lbs</span>
                                </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>

            
                    </div>
                </div>


                <div className="text-sm text-gray-500 mt-4">
                    <p>Statistics current as of March 11, 2025</p>
                </div>
            </div>
        
        </div>
    );
  }
//   { returnTo: '/dashboard' };