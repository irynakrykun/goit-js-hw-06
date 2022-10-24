const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listAllIngredients = document.querySelector('#ingredients')

const ItemIngredients = ingredients.map((ingredient) => {
  
  let ingredient_li = document.createElement("li");
  ingredient_li.textContent = ingredient;
  ingredient_li.classList.add("ingredients__item");
  return ingredient_li;
});
listAllIngredients.append(...ItemIngredients)
