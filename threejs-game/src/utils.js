function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCollision(rect1, rect2) {
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function createRectangle(x, y, width, height) {
    return {
        left: x,
        right: x + width,
        top: y,
        bottom: y + height
    };
}

export { getRandomInt, checkCollision, createRectangle };