import { BalldontlieAPI } from "@balldontlie/sdk";
import { getEnvVariable } from '../../lib/env'; 

const apiKey = getEnvVariable('BALLDONTLIE_API_KEY');
const api = new BalldontlieAPI({ apiKey });

interface Team {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string;
  weight: string;
  jersey_number: string;
  college: string;
  country: string;
  draft_year: number;
  draft_round: number;
  draft_number: number;
  team: Team;
}

export async function getPlayersByTeamId(teamId: number) {
  let allPlayers: Player[] = [];
  let cursor: number | undefined = undefined;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await api.nba.getPlayers({ 
        team_ids: [teamId], 
        per_page: 100, 
        cursor: cursor 
      });

      // Add the fetched players to the allPlayers array
      allPlayers = allPlayers.concat(response.data);

      // Check if there are more players to fetch
      if (response.meta && response.meta.next_cursor) {
        cursor = response.meta.next_cursor;
      } else {
        hasMore = false; // No more players to fetch
      }
    }

    return allPlayers; // Returns an array of all players
  } catch (error) {
    console.error("Error fetching players by team ID:", error);
    return [];
  }
}