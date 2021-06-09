//Constellation Maker

// Canvas Setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 600;

//Global Variable
let cnvRect = cnv.getBoundingClientRect();

//Array
let Stars = [0, 0];

// Event listener / function
document.addEventListener("click", MouseClickHandler);

function MouseClickHandler (event) {
    // MousePos subtracted by CanvasPos
    X = Math.floor(event.clientX - cnvRect.left);
    Y = Math.floor(event.clientY - cnvRect.top);
    //Push Star out
    if(X >= 0 && X <= 600 && Y >= 0 && Y <= 600 )
    Stars.push(NewStar());
}



// Call Draw loop
requestAnimationFrame(Draw);

// Draw loop

function Draw() {
    //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    let x = 1;
    for(let i = 0; i < Stars.length; i++) {
        DrawLine(Stars[i])
        DrawConstellation(Stars[i])
        if (i >= x) {
           Get2ndStarValue(Stars[x])
           x++;
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
