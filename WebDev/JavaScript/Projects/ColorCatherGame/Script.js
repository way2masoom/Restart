// Global Variables
let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = ['red', 'green', 'blue', 'purple', 'hotpink', 'yellow', 'orange', 'pink', 'brown',
    'cyan', 'magenta', 'lime', 'teal', 'navy', 'olive', 'maroon', 'gold'];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const timeDisplay = document.getElementById("time")
const scoreDisplay = document.getElementById("score")

// Function to Generate the random colors
function getRandomColors() {

}

// Function to Start Game 
function startGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    
    createGrid();
}