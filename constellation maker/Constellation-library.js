// Constellation Drawing library

//global variables
let x2;
let y2;

// Draw Star
function DrawConstellation(AStar) {
    fill("white");
    circle(AStar.x, AStar.y, AStar.r, "fill");
}

// Draw line between Stars
function DrawLine(AStar) {
    if(AStar.c === 0) {
        AStar.c++;
        line(AStar.x, AStar.y, x2, y2);
    }

}

//Get second x and y for Line
function Get2ndStarValue(AStar) {
        x2 = AStar.x
        y2 = AStar.y
        AStar.c = 0;
}
