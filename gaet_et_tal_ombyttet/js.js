const guessElement = document.querySelector("#guess");
const feedbackElement = document.querySelector("#feedback");
const attemptsElement = document.querySelector("#attempts");

const startButton = document.querySelector("#start");
const tooLowButton = document.querySelector("#tooLow");
const correctButton = document.querySelector("#correct");
const tooHighButton = document.querySelector("#tooHigh");
const cat = document.querySelector("#cat");

let min;
let max;
let guess;
let attempts;
let gameStarted = false;

// Start spillet
startButton.addEventListener("click", startGame);

// Brugerens svar på computerens gæt
tooLowButton.addEventListener("click", tooLow);
correctButton.addEventListener("click", correct);
tooHighButton.addEventListener("click", tooHigh);

function startGame() {
    min = 0;
    max = 100;
    attempts = 0;
    gameStarted = true;

    cat.classList.remove("show");

    startButton.textContent = "Start forfra";
    feedbackElement.textContent = "Er mit gæt for lavt, for højt eller rigtigt?";
    attemptsElement.textContent = "";

    enableAnswerButtons();

    makeGuess();
}

function makeGuess() {
    // Computeren vælger altid midten af det mulige interval.
    guess = Math.floor((min + max) / 2);

    attempts++;
    guessElement.textContent = guess;

    guessElement.classList.remove("new-guess");
    void guessElement.offsetWidth;
    guessElement.classList.add("new-guess");
}

function tooLow() {
    if (!gameStarted) return;

    // Hvis computeren gætter for lavt,
    // må tallet være større end computerens gæt.
    min = guess + 1;

    if (min > max) {
        endGame("Hmm... noget passer ikke. Prøv at starte forfra.");
        return;
    }

    feedbackElement.textContent = "Okay! Så skal jeg gætte højere.";
    makeGuess();
}

function tooHigh() {
    if (!gameStarted) return;

    // Hvis computeren gætter for højt,
    // må tallet være mindre end computerens gæt.
    max = guess - 1;

    if (min > max) {
        endGame("Hmm... noget passer ikke. Prøv at starte forfra.");
        return;
    }

    feedbackElement.textContent = "Okay! Så skal jeg gætte lavere.";
    makeGuess();
}

function correct() {
    if (!gameStarted) return;

    feedbackElement.textContent = `Jeg fandt dit tal på ${attempts} ${attempts === 1 ? "gæt" : "gæt"}!`;
    attemptsElement.textContent = "Godt tænkt! 🎉";

    cat.classList.add("show");
    gameStarted = false;

    disableAnswerButtons();
}

function endGame(message) {
    feedbackElement.textContent = message;
    gameStarted = false;
    disableAnswerButtons();
}

function enableAnswerButtons() {
    tooLowButton.disabled = false;
    correctButton.disabled = false;
    tooHighButton.disabled = false;
}

function disableAnswerButtons() {
    tooLowButton.disabled = true;
    correctButton.disabled = true;
    tooHighButton.disabled = true;
}
