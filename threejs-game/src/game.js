const THREE = require('three');
import { Rider } from './rider';
import { Obstacle } from './obstacles';
import { Reward } from './rewards';
import { detectCollision } from './utils';

class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.rider = new Rider();
        this.obstacles = [];
        this.rewards = [];
        this.score = 0;
        this.shieldActive = false;
        this.rewardCount = 0;

        this.init();
        this.gameLoop();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.z = 5;

        this.spawnObstacles();
        this.spawnRewards();
    }

    spawnObstacles() {
        // Logic to spawn obstacles at random intervals
        const obstacle = new Obstacle();
        this.obstacles.push(obstacle);
        this.scene.add(obstacle.mesh);
    }

    spawnRewards() {
        // Logic to spawn rewards at random intervals
        const reward = new Reward();
        this.rewards.push(reward);
        this.scene.add(reward.mesh);
    }

    update() {
        this.rider.updatePosition();
        this.obstacles.forEach(obstacle => obstacle.update());
        this.rewards.forEach(reward => reward.update());

        this.checkCollisions();
    }

    checkCollisions() {
        this.obstacles.forEach(obstacle => {
            if (detectCollision(this.rider.mesh, obstacle.mesh)) {
                if (!this.shieldActive) {
                    this.endGame();
                }
            }
        });

        this.rewards.forEach(reward => {
            if (detectCollision(this.rider.mesh, reward.mesh)) {
                reward.collect();
                this.rewardCount++;
                this.score++;

                if (this.rewardCount >= 2) {
                    this.activateShield();
                }
            }
        });
    }

    activateShield() {
        this.shieldActive = true;
        setTimeout(() => {
            this.shieldActive = false;
            this.rewardCount = 0;
        }, 5000); // Shield lasts for 5 seconds
    }

    endGame() {
        // Logic to end the game
        console.log('Game Over! Your score: ' + this.score);
        // Reset game or show game over screen
    }

    gameLoop() {
        requestAnimationFrame(() => this.gameLoop());
        this.update();
        this.renderer.render(this.scene, this.camera);
    }
}

export default Game;