// Global Variables
let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = ['red', 'green', 'blue', 'purple', 'hotpink', 'yellow', 'orange', 'pink', 'brown', 'magenta', 'lime', 'teal', 'navy', 'olive', 'maroon', 'gold'];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const timeDisplay = document.getElementById("time")
const scoreDisplay = document.getElementById("score")


// ShuffleArray for colors to position Randomly 
function shuffleArray(colors) {
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
}


// Grid Function to Arrange the color in Grid form
function createGrid() {
    grid.innerHTML = "";
    let randomColors = shuffleArray([...colors]);
    console.log(randomColors);

    targetColor = colors[Math.floor(Math.random() * 16)];
    targetColorDisplay.textContent = targetColor;
    randomColors.forEach((color) => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        box.addEventListener('click', () => {
            handleClick(color);
        })
        grid.appendChild(box);
    })
}

// Handel Click Function to Match the color with target color
function handleClick(clickedColor) {
    if (clickedColor === targetColor) {
        score++;
        scoreDisplay.textContent = score;
        createGrid();
    }
}

// Function to Start Game 
function startGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    // Function to create the Grid of colors
    createGrid();
    clearInterval(timer);
    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if (time === 0) {
            clearInterval(timer);
            alert("⌛ Time's Up! and your final Score : " + score)
        }
    }, 1000);
}