const inputSlider = document.getElementById("font-size-control");
const textInput = document.getElementById("text");

inputSlider.addEventListener("input", onInputChange);

function onInputChange(event) {
  textInput.style.fontSize = `${inputSlider.value}px`;
  console.log(inputSlider.value);
}
