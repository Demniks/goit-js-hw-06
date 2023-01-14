const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const categoriesElem = categories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
