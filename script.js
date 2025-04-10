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

function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

text.addEventListener("input", (e) => {
  const typedWord = e.target.value;
  if (typedWord === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    text.value = "";
  }
});


addWordToDOM();

// lägg in if statements. T. ex if word === text ....

/* PART 1 

Create a addWordToDOM function that will update the ”word” element with a random item from the words array 

Create a updateScore function that will increment score by +1 

Add an event listener to the ”text” element. When you type in the correct word, the function should:  

Call updateScore  

give the user a new word by calling addWordToDOM 

increment time by 5 seconds  

reset the input to empty string  */