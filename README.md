This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## BuzzCenter Player Insights Dashboard

Welcome to the BuzzCenter Player Insights Dashboard! This project is a secure, interactive dashboard built with Next.js and Auth0 that showcases player statistics for the Charlotte Hornets. The dashboard pulls data from a public NBA API as well as mock data and displays intuitive visualizations to provide insights into player performance. 

![Screen Shot 2025-03-12 at 5 52 53 AM](https://github.com/user-attachments/assets/31c17c5f-395c-4702-bfe1-b7892c62edac)

![Screen Shot 2025-03-12 at 5 54 36 AM](https://github.com/user-attachments/assets/db0a879e-af24-4ae0-b38c-a7ada9d17920)

![Screen Shot 2025-03-12 at 5 55 04 AM](https://github.com/user-attachments/assets/28e91eec-e624-4796-8a93-e29141d35125)

![Screen Shot 2025-03-12 at 5 55 30 AM](https://github.com/user-attachments/assets/238695a0-263a-43ce-9bfc-eaa4ae4770bf)

![Screen Shot 2025-03-12 at 5 55 59 AM](https://github.com/user-attachments/assets/6f66ccf2-b6ec-4824-af3f-e27275fde074)

![Screen Shot 2025-03-12 at 5 56 22 AM](https://github.com/user-attachments/assets/99c2646f-179b-48c9-86ba-bb919154ed3d)




## Features
Authentication
Auth0 Integration: Secure login and logout functionality.

Protected Routes: All dashboard routes are accessible only to authenticated users.

Player Statistics
Displays key statistics for the current Charlotte Hornets roster, including:
- Points per game (PPG)
- Rebounds (REB)
- Assists (AST)
- Field goal percentage (FG%)
- Minutes played (MIN)
- 3 Point Percentage (3P%)

Displays statistics for an All Time Charlotte Hornets roster, including:
- Height
- Weight

Unfortunately, due to the limitations of the free version of BallDontLie API, only these physical statistics were relevant. Once all Hornets players are retrieved from the API, there is no way to determine which of those are the current players, nor was there a way to separate the players by season. The player's game statistics are also locked behind a paywall, so at the very least I decided to list some physical attributes to demonstrate pulling data from an API. 


Dashboard Widgets
Player Leaderboard: A table showing the top 5 players in each statistical category.

Performance Radar Chart: A multi-axis chart showing a selected player's stats across categories.

Points Distribution: A bar chart showing points per game (PPG) for all players.

Shooting Efficiency: A bar chart comparing field goal percentage (FG%) and 3-point percentage (3P%) for each player.

All Time Player Stats: A leaderboard showing the tallest and heaviest Hornets players of all time.


## Getting Started

`git clone https://github.com/your-username/hornets-dashboard.git`

`cd hornets-dashboard`

`npm install`

Create a .env.local file in the root directory (replace with legitimate credentials):

`AUTH0_SECRET=your-auth0-secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret`

`npm run dev`

Open your browser and navigate to http://localhost:3000.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
