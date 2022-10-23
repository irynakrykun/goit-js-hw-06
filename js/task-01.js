const listItemEl = document.querySelectorAll('.item');

console.log("Number of categories:", listItemEl.length);

listItemEl.forEach(listItemEl => {
  console.log(`Category: ${listItemEl.querySelector('h2').textContent}`)
  
  console.log("Elements:", Number(listItemEl.querySelectorAll('li').length))
});
  
