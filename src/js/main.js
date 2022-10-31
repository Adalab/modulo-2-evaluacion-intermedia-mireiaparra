const startButton = document.querySelector(".js_button");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

startButton.addEventListener('click', () => {
   getRandomNumber(6);
  });

