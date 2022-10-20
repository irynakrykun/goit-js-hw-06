const listItemEl = document.querySelectorAll('.item');

console.log("Number of categories:", listItemEl.length);

for (let i = 0; i < listItemEl.length; i += 1){
  console.log(`Category: ${listItemEl[i].querySelector('h2').textContent}`)
  
  console.log("Elements:", Number(listItemEl[i].querySelectorAll('li').length))
}
