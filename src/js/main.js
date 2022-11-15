"use strict";
const startButton = document.querySelector(".js-button");
const choose = document.querySelector(".js-select");
const text = document.querySelector(".js-text");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");
const restartButton = document.querySelector(".js-restart");
let playerPoints = "";
let cpuPoints = "";
let counter = "";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function strength(raceNumber) {
  let strengthResult = "";
  if (raceNumber === 4) {
    strengthResult = 3;
  } else if (raceNumber === 5) {
    strengthResult = 5;
  } else {
    strengthResult = 2;
  }

  return strengthResult;
}

startButton.addEventListener("click", () => {
  event.preventDefault();
  compare(strength(getRandomNumber(5)));
  points();
  restart();
});

function choosePlayer() {
  const resultPlayer = parseInt(choose.value);
  return resultPlayer;
}

function compare(randomNumber) {
  if (choosePlayer() > randomNumber) {
    text.innerHTML = "¡Ha ganado el Ejército del Bien! Enhorabuena";
    playerPoints++;
    counter++;
  } else if (choosePlayer() === randomNumber) {
    text.innerHTML = "Empate";
    counter++;
  } else {
    text.innerHTML = "¡Ha ganado el Ejército del Mal! Vuelve a intentarlo";
    cpuPoints++;
    counter++;
  }
}

function points() {
  player.innerHTML = `Jugador: ${playerPoints}`;
  cpu.innerHTML = `Computadora: ${cpuPoints}`;
}

function restart() {
  if (counter >= 10) {
    restartButton.classList.remove("hidden");
    startButton.classList.add("hidden");
    counter = "";
    winner();
  } else {
    restartButton.classList.add("hidden");
    startButton.classList.remove("hidden");
  }
}

restartButton.addEventListener("click", () => {
  event.preventDefault();
  restartButton.classList.add("hidden");
  playerPoints = 0;
  cpuPoints = 0;
  text.innerHTML = "¡Comienza la batalla!";
  points();
  startButton.classList.remove("hidden");
});

function winner() {
    if (playerPoints > cpuPoints) {
        text.innerHTML = "¡Has vencido! Enhorabuena";
      } else if (playerPoints === cpuPoints) {
        text.innerHTML = "Empate";
      } else {
        text.innerHTML = "¡Has perdido! Vuelve a intentarlo";
      }
    }
