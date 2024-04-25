function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const randomBackgroundColor = () => {
  
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;  
  span.textContent = randomHexColor;
}

btn.addEventListener("click", randomBackgroundColor);