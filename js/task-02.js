const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsLi = document.getElementById('ingredients');
ingredients.forEach((ingredient) => {
  const listLi = document.createElement('li');
  listLi.textContent = ingredient;
  listLi.classList.add('item');
  ingredientsLi.appendChild(listLi);
})