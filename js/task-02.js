const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.getElementById('ingredients');
const ingredientsLi = ingredientsArray.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem.outerHTML;
}).join('');
ingredientsUl.insertAdjacentHTML('beforeend', ingredientsLi);