const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.firstElementChild.textContent;
  const categoryElements = categoryItem.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});