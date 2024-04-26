const listCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listCategories.length);

listCategories.forEach((element) => {
  const titleCategory = element.querySelector("h2").textContent;
  console.log("Category:", titleCategory);
  const lengthCategory = element.querySelectorAll("li").length;
  console.log("Elements:", lengthCategory);
});
