const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listAllIngredients = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i += 1) {
  
  let li_elem = document.createElement("li");
  li_elem.textContent = ingredients[i];
  li_elem.classList.add("ingredients__item");
  listAllIngredients.appendChild(li_elem);
}
