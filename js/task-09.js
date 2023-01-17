const changeButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeButton.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  spanColor.textContent = document.body.style.backgroundColor;
}

// const changeButton = document.querySelector(".change-color");
// const spanColor = document.querySelector(".color");
// const body = document.querySelector("body");
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// changeButton.addEventListener("click", handleClick);
// function handleClick() {
//   body.style.backgroundColor = getRandomHexColor();
//   spanColor.textContent = body.style.backgroundColor;
// }

// const refs = {
//   changeCoolorBtn: document.querySelector(".change-color"),
//   body: document.querySelector("body"),
//   colorName: document.querySelector(".color")
// };
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// refs.changeCoolorBtn.addEventListener("click", () => {
//   refs.body.style.backgroundColor = getRandomHexColor();
//   refs.colorName.textContent = refs.body.style.backgroundColor;
// })
