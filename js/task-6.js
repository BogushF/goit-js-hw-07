function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = () => {
  let boxesDiv = "";
  let size = 30;
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    for (let i = 0; i < inputNumber.value; i++) {
      boxesDiv += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      size += 10;
      boxesContainer.innerHTML = boxesDiv;
    }
    inputNumber.value = "";
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
