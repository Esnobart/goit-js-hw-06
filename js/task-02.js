const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.getElementById('ingredients');
const ingredientsLi = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
ingredientsUl.insertAdjacentHTML('beforeend', ingredientsLi);