// library of shape/fill functions

// Draw circle
function fill(Fill) {
    ctx.fillStyle = Fill
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, );
    ctx.fill();
}

function line(x1, y1, x2, y2) {
    ctx.strokeStyle = "white"
    ctx.lineWidth = 3
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}