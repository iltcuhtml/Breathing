/**
*for get FPS value
*/
function getFPS() {
    if (Date.now() <= dateBefore + 1000) {
        FPS_Counter++;
    } else {
        FPS = FPS_Counter;

        dateBefore = Date.now();
        FPS_Counter = 0;
    }
}

/**
*for drawing circle in the canvas
*/
function draw() {
    ctx.drawImage(circleImage, 0, 0, 1, 1, circle.x, circle.y, circle.size, circle.size);
}

/**
*for debugging
*/
function debug() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    
    ctx.fillText(`FPS : ${FPS}`, 10, 30);
    
    ctx.fillText(`Canvas Width : ${canvas.width}`, 10, 90);
    ctx.fillText(`Canvas Height : ${canvas.height}`, 10, 120);
}