class Obstacle {
    constructor(scene) {
        this.scene = scene;
        this.position = new THREE.Vector3();
        this.mesh = null;
        this.spawn();
    }

    spawn() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.position.set(Math.random() * 10 - 5, 0, Math.random() * -50);
        this.mesh.position.copy(this.position);
        this.scene.add(this.mesh);
    }

    update() {
        this.position.z += 0.1; // Move the obstacle forward
        this.mesh.position.copy(this.position);

        // Remove the obstacle if it goes out of view
        if (this.position.z > 50) {
            this.scene.remove(this.mesh);
        }
    }
}

export default Obstacle;