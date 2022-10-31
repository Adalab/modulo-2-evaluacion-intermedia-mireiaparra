const startButton = document.querySelector(".js-button");
const choose = document.querySelector(".js-select");
const text = document.querySelector(".js-text");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

startButton.addEventListener('click', () => {
   compare(getRandomNumber(6));
  });

function choosePlayer() {
const resultPlayer = parseInt(choose.value);
return resultPlayer;
}

function compare(randomNumber) {
    console.log(choosePlayer());
    console.log(randomNumber);
    
if (choosePlayer() > randomNumber) {
    console.log("ganas tú");
}

else if (choosePlayer() === randomNumber) {
    console.log("empate");
}
else {
    console.log("gana la máquina");
}
}

