const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const getName = event=> {
const valueInput = event.target.value.trim();
  valueInput === "" ? outputName.textContent = "Anonymous" : outputName.textContent = valueInput;
};

inputName.addEventListener("input", getName);