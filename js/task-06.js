const inputField = document.getElementById("validation-input");
const dataAtr = Number(inputField.dataset.length);

inputField.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputField.value.length === dataAtr) {
    return inputField.classList.replace("invalid", "valid");
  }
  return inputField.classList.add("invalid");
}
