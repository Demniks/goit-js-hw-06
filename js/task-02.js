const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.getElementById("ingredients");

const ingredientsArr = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = ingredient;
  return liElem;
});

ulElem.append(...ingredientsArr);
