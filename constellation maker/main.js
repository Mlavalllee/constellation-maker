//Constellation Maker

// Canvas Setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 600;

//Global Variables
let cnvRect = cnv.getBoundingClientRect();
let X = 0;
let Y = 0;
let Drag = false;
let time = 0;

//Array
let Stars = [0];

// Event listener / function
document.addEventListener("dblclick", MouseDbClickHandler);
document.addEventListener("mousedown", MouseDownHandler);
document.addEventListener("mouseup", MouseUpHandler)
document.addEventListener("mousemove", MouseMoveHandler)

function MouseDbClickHandler (event) {
    // MousePos subtracted by CanvasPos
    X = Math.floor(event.clientX - cnvRect.left);
    Y = Math.floor(event.clientY - cnvRect.top);
    //Push Star out
    if(X >= 0 && X <= 600 && Y >= 0 && Y <= 600 )
    Stars.push(NewStar());
}

// Drag True or false boolean
function MouseDownHandler() {
    Drag = true;
}

function MouseUpHandler() {
    Drag = false;
    time = 0;
}

//  Dragging function
function MouseMoveHandler(event) {
    time++;
    if(time >= 60) {
        X = Math.floor(event.clientX - cnvRect.left);
        Y = Math.floor(event.clientY - cnvRect.top);
        if (Drag === true) {
            console.log(1)
        }
    }

}


// Call Draw loop
requestAnimationFrame(Draw);

// Draw loop

function Draw() {
        // Clear Canvas
      //  ctx.clearRect(0, 0, cnv.width, cnv.height);
    let x = 1;
    for(let i = 0; i < Stars.length; i++) {
        DrawLine(Stars[i])
        DrawConstellation(Stars[i])
        if (i >= x) {
           Get2ndStarValue(Stars[x])
           x++;
        }
        if( Drag === true) {
            Stars[i].x = X
            Stars[i].y = Y
        }
    }
    requestAnimationFrame(Draw);
}


// Star Stored
function NewStar(InitX, InitY, InitR,InitC) {
    return {
        x: X,
        y: Y,
        r: 10,
        c: 0
    }
}
