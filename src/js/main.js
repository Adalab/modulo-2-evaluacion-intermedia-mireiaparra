const startButton = document.querySelector(".js-button");
const choose = document.querySelector(".js-select");
const text = document.querySelector(".js-text");
const player = document.querySelector(".js-player");
const cpu = document.querySelector(".js-cpu");
let playerPoints = "";
let cpuPoints = "";

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
  compare(strength(getRandomNumber(5)));
  points();
});

function choosePlayer() {
  const resultPlayer = parseInt(choose.value);
  return resultPlayer;
}

function compare(randomNumber) {
  if (choosePlayer() > randomNumber) {
    text.innerHTML = "¡Ha ganado el Ejército del Bien! Enhorabuena";
    playerPoints++;
  } else if (choosePlayer() === randomNumber) {
    text.innerHTML = "Empate";
  } else {
    text.innerHTML = "¡Ha ganado el Ejército del Mal! Vuelve a intentarlo";
    cpuPoints++;
  }
}

function points () {
 player.innerHTML = `Jugador: ${playerPoints}`;
 cpu.innerHTML = `Computadora: ${cpuPoints}`;
}
