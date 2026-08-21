"use strict";

let computerensValg;
let brugerensValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);

function rockClicked() {
    brugerensValg = "rock";
    traekferValg();
}

function paperClicked() {
    brugerensValg = "paper";
    traekferValg();
}

function scissorsClicked() {
    brugerensValg = "scissors";
    traekferValg();
}

function traekferValg() {
    computerensValg = "scissors";
    nedTaelling();
}

function nedTaelling() {
    player1.classList.add("shake");
    player2.classList.add("shake");

    player1.addEventListener("animationend", visValg);
}

function visValg() {
    afgoerResultatet();
}

function afgoerResultatet() {
    console.log("brugerensValg", brugerensValg);
    console.log("computerensValg", computerensValg);
}

