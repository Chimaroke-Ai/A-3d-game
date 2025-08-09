class Reward {
    constructor(position) {
        this.position = position;
        this.collected = false;
    }

    spawn() {
        // Logic to spawn the reward at a random position
    }

    collect() {
        this.collected = true;
        // Logic to handle reward collection
    }

    activateShield() {
        // Logic to activate the shield after collecting two rewards
    }
}

export default Reward;