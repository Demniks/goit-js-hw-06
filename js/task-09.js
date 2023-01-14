const changeButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeButton.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  spanColor.textContent = document.body.style.backgroundColor;
}
