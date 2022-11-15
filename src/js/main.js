"use strict";
const startButton = document.querySelector(".js-button");
const choose = document.querySelector(".js-select");
const text = document.querySelector(".js-text");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");
const restartButton = document.querySelector(".js-restart");
let playerPoints = 0;
let cpuPoints = 0;
let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getStrength(raceNumber) {
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
  compare(getStrength(getRandomNumber(5)));
  getPoints();
  restart();
});

function choosePlayer() {
  const resultPlayer = parseInt(choose.value);
  return resultPlayer;
}

function paintHTML(eachElement, eachText) {
  eachElement.innerHTML = eachText;
}

function compare(randomNumber) {
  const resultPlayer = choosePlayer();
  if (resultPlayer > randomNumber) {
    paintHTML(text, "¡Ha ganado el Ejército del Bien! Enhorabuena");
    playerPoints++;
    counter++;
  } else if (resultPlayer === randomNumber) {
    paintHTML(text, "Empate");
    counter++;
  } else {
    paintHTML(text, "¡Ha ganado el Ejército del Mal! Vuelve a intentarlo");
    cpuPoints++;
    counter++;
  }
}

function getPoints() {
  paintHTML(player, `Jugador: ${playerPoints}`);
  paintHTML(cpu, `Computadora: ${cpuPoints}`);
}

function restart() {
  if (counter >= 10) {
    restartButton.classList.remove("hidden");
    startButton.classList.add("hidden");
    counter = "";
    win();
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
  paintHTML(text, "¡Comienza la batalla!");
  getPoints();
  startButton.classList.remove("hidden");
});

function win() {
  if (playerPoints > cpuPoints) {
    paintHTML(text, "¡Has vencido! Enhorabuena");
  } else if (playerPoints === cpuPoints) {
    paintHTML(text, "Empate");
  } else {
    paintHTML(text, "¡Has perdido! Vuelve a intentarlo");
  }
}
