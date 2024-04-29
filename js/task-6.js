function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxesDiv = "";
  let size = 30;
    for (let i = 0; i < amount; i++) {
      boxesDiv += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      size += 10;
    }
    boxesContainer.innerHTML = boxesDiv;
  };

  const createDefiniteBoxes = () => {
    if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    createBoxes(inputNumber.value);
    inputNumber.value = "";
  }
  };

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createButton.addEventListener("click", createDefiniteBoxes);
destroyButton.addEventListener("click", destroyBoxes);
