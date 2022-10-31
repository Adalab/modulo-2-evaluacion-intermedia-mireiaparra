const startButton = document.querySelector(".js-button");
const choose = document.querySelector(".js-select");
const text = document.querySelector(".js-text");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function strength (raceNumber) {
    if (raceNumber === 4) {
        return 3;
    } else if (raceNumber === 5) {
        return 5;
    }else {
        return 2;
    }
}

startButton.addEventListener('click', () => {
   compare(strength(getRandomNumber(5)));
  });

function choosePlayer() {
const resultPlayer = parseInt(choose.value);
return resultPlayer;
}

function compare(randomNumber) {
    console.log(choosePlayer());
    console.log(randomNumber);
    
if (choosePlayer() > randomNumber) {
    text.innerHTML = "¡Ha ganado el Ejército del Bien! Enhorabuena";
}

else if (choosePlayer() === randomNumber) {
    text.innerHTML =  "Empate";
}
else {
    text.innerHTML =  "¡Ha ganado el Ejército del Mal! Vuelve a intentarlo";
}
}

