const input = document.getElementById("name-input");
const text = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  text.textContent = event.currentTarget.value || "Anonymous";
}
