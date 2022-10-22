function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const BtnEl = document.querySelector('.change-color');
const SpanEl = document.querySelector('.color');


BtnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  SpanEl.textContent = color;
})