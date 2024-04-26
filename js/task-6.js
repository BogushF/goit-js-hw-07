function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = amount => {
  const amount = parseInt(inputNumber.value);
  let boxesDiv = '';
  let size = 30;
if (amount >= 1 && amount <= 100){
  for (let i = 0; i < amount; i++) {
    boxesDiv += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesContainer.innerHTML = boxesDiv;
  inputNumber.value = "";
}
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);