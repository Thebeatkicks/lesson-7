// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time

let time = 10;
const timeInterval = setInterval(updateTime, 1000);

//diffiuculty
let difficulty = difficultySelect.value;



function updateTime() {
  time--;
  timeEl.innerText = time;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}

function updateScore() {
  if (difficulty === "hard") {
    score += 3;
  scoreEl.innerText = score;
} else if (difficulty === "medium") {
  score += 2;
  scoreEl.innerText = score;
} else  {
  score++;
  scoreEl.innerText = score;

}
}
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out!</h1>
    <p>Your final score is <span id="final-score">${score}</span></p>
    <button onclick="location.reload()">Restart</button>
  `;
  endgameEl.style.display = "flex";
} 

text.addEventListener("input", (e) => {
  const typedWord = e.target.value;
  if (typedWord === randomWord) {
    updateScore();
    addWordToDOM();
    if (difficulty === "easy") {
      time += 5;
    } else if (difficulty === "medium") {
      time += 4;
    } else {
      time += 3;
    }
    text.value = "";
  }
});

difficultySelect.addEventListener("change", (e) => {
  difficulty = e.target.value;
}
);

addWordToDOM();

/* PART 2 

Create a updateTime function using the setInterval( ) method, every time it runs it should decrement -1 from the timer. Stop the timer when it reaches zero. 

Create  a gameOver function that will display the end-game-container once the timer hits zero 

 

PART 3, OPTIONAL: 

Add an event listener to the settings button that will hide the settings 

Add an event listener for the settings form so that you can change the difficulty 

Set time depending on difficulty in the eventlistener */