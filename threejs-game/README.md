# Three.js Infinite Bike Rider Game

## Overview
This project is an infinite runner game built using Three.js, where players control a bike rider navigating through obstacles and collecting rewards. The game features a simple yet engaging gameplay loop, allowing players to enjoy an endless experience.

## Project Structure
```
threejs-game
├── public
│   └── index.html
├── src
│   ├── main.js
│   ├── game.js
│   ├── rider.js
│   ├── obstacles.js
│   ├── rewards.js
│   └── utils.js
├── package.json
├── webpack.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd threejs-game
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Game
To start the game, run the following command:
```
npm start
```
This will launch a local server and open the game in your default web browser.

## Gameplay
- Control the bike rider using keyboard inputs.
- Navigate through randomly generated obstacles.
- Collect rewards to gain points and activate a shield after collecting two rewards.
- The game continues infinitely, increasing in difficulty as you progress.

## Features
- Infinite gameplay with increasing difficulty.
- Dynamic obstacle and reward spawning.
- Shield activation after collecting rewards.
- Simple controls for an engaging experience.

## Technologies Used
- Three.js for 3D rendering.
- Webpack for module bundling.
- JavaScript for game logic and functionality.

## Contributing
Feel free to submit issues or pull requests to improve the game!