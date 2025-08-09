class Rider {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.speed = 5;
        this.isJumping = false;
        this.jumpHeight = 10;
        this.shieldActive = false;
        this.rewardCount = 0;
    }

    move(direction) {
        if (direction === 'left') {
            this.position.x -= this.speed;
        } else if (direction === 'right') {
            this.position.x += this.speed;
        }
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.position.y += this.jumpHeight;
            setTimeout(() => {
                this.isJumping = false;
                this.position.y -= this.jumpHeight;
            }, 500);
        }
    }

    collectReward() {
        this.rewardCount++;
        if (this.rewardCount >= 2) {
            this.activateShield();
        }
    }

    activateShield() {
        this.shieldActive = true;
        setTimeout(() => {
            this.shieldActive = false;
            this.rewardCount = 0; // Reset reward count after shield activation
        }, 5000); // Shield lasts for 5 seconds
    }

    updatePosition() {
        // Logic to update the rider's position in the game world
    }
}

export default Rider;