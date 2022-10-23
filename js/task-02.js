const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listAllIngredients =[]

const ItemIngredients = ingredients.map((ingredient) => {
  
  let ingredient_li = document.createElement("li");
  ingredient_li.textContent = ingredient;
  ingredient_li.classList.add("ingredients__item");
  listAllIngredients.push(ingredient_li);
});
document.querySelector('#ingredients').append(...listAllIngredients)
