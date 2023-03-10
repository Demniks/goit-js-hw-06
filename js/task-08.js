const formRef = document.querySelector(".login-form");
const inputsRef = document.querySelectorAll("input");
formRef.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log({ email: email.value, password: password.value });
    formRef.reset();
  }
}
