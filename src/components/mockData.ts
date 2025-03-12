export interface PlayerStats {
    ppg: number;  // points per game
    rpg: number;  // rebounds per game
    apg: number;  // assists per game
    fgp: number;  // field goal percentage
    mpg: number;  // minutes per game
    tpp: number;  // three point percentage
  }
  
  export interface Player {
    id: number;
    name: string;
    position: string;
    imageUrl: string;  // Added for card display
    stats: PlayerStats;
  }
  
  const hornetsPlayers: Player[] = [
    {
      id: 1,
      name: "LaMelo Ball",
      position: "PG",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
      stats: {
        ppg: 25.6,
        rpg: 5.3,
        apg: 7.0,
        fgp: 40.3,
        mpg: 32.3,
        tpp: 33.1
      }
    },
    {
      id: 2,
      name: "Miles Bridges",
      position: "SF",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png",
      stats: {
        ppg: 21.2,
        rpg: 7.8,
        apg: 3.8,
        fgp: 43.9,
        mpg: 32.5,
        tpp: 32.6
      }
    },
    {
      id: 3,
      name: "Brandon Miller",
      position: "F",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641706.png",
      stats: {
        ppg: 21.0,
        rpg: 4.9,
        apg: 3.6,
        fgp: 40.3,
        mpg: 34.2,
        tpp: 35.5
      }
    },
    {
      id: 4,
      name: "Mark Williams",
      position: "C",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4701232.png&w=350&h=254",
      stats: {
        ppg: 15.7,
        rpg: 9.9,
        apg: 2.3,
        fgp: 58.9,
        mpg: 25.8,
        tpp: 0
      }
    },
    {
      id: 5,
      name: "Tre Mann",
      position: "PG",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432819.png",
      stats: {
        ppg: 14.1,
        rpg: 2.9,
        apg: 3.0,
        fgp: 43.5,
        mpg: 24.5,
        tpp: 40
      }
    },
    {
      id: 6,
      name: "Grant Williams",
      position: "PF",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629684.png",
      stats: {
        ppg: 10.4,
        rpg: 5.1,
        apg: 2.3,
        fgp: 43.9,
        mpg: 29.9,
        tpp: 36.5
      }
    },
    {
      id: 7,
      name: "Josh Okogie",
      position: "SF",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png",
      stats: {
        ppg: 10.0,
        rpg: 3.4,
        apg: 1.4,
        fgp: 43.4,
        mpg: 21.3,
        tpp: 39.1
      }
    },
    {
      id: 8,
      name: "Nick Smith Jr.",
      position: "G",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641733.png",
      stats: {
        ppg: 8.8,
        rpg: 2.0,
        apg: 2.0,
        fgp: 38.1,
        mpg: 22.0,
        tpp: 30.6
      }
    },
    {
      id: 9,
      name: "Damion Baugh",
      position: "SG",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641878.png",
      stats: {
        ppg: 8.0,
        rpg: 2.5,
        apg: 3.8,
        fgp: 34.8,
        mpg: 25.4,
        tpp: 22
      }
    },
    {
      id: 10,
      name: "Cody Martin",
      position: "SF",
      imageUrl: "https://hoopshype.com/wp-content/uploads/sites/92/2023/12/i_fb_0b_4e_cody-martin.png?w=190",
      stats: {
        ppg: 7.8,
        rpg: 4.5,
        apg: 2.3,
        fgp: 43.3,
        mpg: 24.8,
        tpp: 32.3
      }
    },
    {
      id: 11,
      name: "Jusuf Nurkic",
      position: "C",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102530.png",
      stats: {
        ppg: 7.3,
        rpg: 7.8,
        apg: 3.3,
        fgp: 45.5,
        mpg: 17.9,
        tpp: 10.5
      }
    },
    {
      id: 12,
      name: "Josh Green",
      position: "SG",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630182.png",
      stats: {
        ppg: 7.3,
        rpg: 2.7,
        apg: 1.6,
        fgp: 42.3,
        mpg: 28.6,
        tpp: 38.6
      }
    },
    {
      id: 13,
      name: "KJ Simpson",
      position: "G",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683834.png",
      stats: {
        ppg: 7.1,
        rpg: 2.9,
        apg: 2.6,
        fgp: 33.5,
        mpg: 20.4,
        tpp: 21.6
      }
    },
    {
      id: 14,
      name: "Seth Curry",
      position: "SG",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png",
      stats: {
        ppg: 6.1,
        rpg: 1.7,
        apg: 0.7,
        fgp: 46.7,
        mpg: 14.6,
        tpp: 44.7
      }
    },
    {
      id: 15,
      name: "Moussa Diabate",
      position: "F",
      imageUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631217.png",
      stats: {
        ppg: 5.4,
        rpg: 6.6,
        apg: 0.9,
        fgp: 59.0,
        mpg: 18.4,
        tpp: 0
      }
    },
    {
      id: 16,
      name: "Tidjane Salaun",
      position: "F",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5211176.png",
      stats: {
        ppg: 5.3,
        rpg: 4.2,
        apg: 1.1,
        fgp: 31.9,
        mpg: 19.1,
        tpp: 28.9
      }
    },
    {
      id: 17,
      name: "DaQuan Jeffries",
      position: "SG",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913220.png&w=350&h=254",
      stats: {
        ppg: 4.8,
        rpg: 2.8,
        apg: 1.1,
        fgp: 37.4,
        mpg: 19.7,
        tpp: 27.5
      }
    },
    {
      id: 18,
      name: "Malachi Flynn",
      position: "PG",
      imageUrl: "https://cdn.sportsforecaster.com/players/l.nba.com/227193/head/no-background/web",
      stats: {
        ppg: 4.0,
        rpg: 1.8,
        apg: 1.8,
        fgp: 38.5,
        mpg: 11.0,
        tpp: 25.0
      }
    },
    {
      id: 19,
      name: "Taj Gibson",
      position: "F",
      imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3986.png&w=350&h=254",
      stats: {
        ppg: 3.0,
        rpg: 3.6,
        apg: 0.6,
        fgp: 48.6,
        mpg: 11.3,
        tpp: 50.0
      }
    },
];
  
  export default hornetsPlayers;