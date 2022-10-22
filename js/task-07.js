const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onChangeInput);

function onChangeInput(evt) {
    spanEl.style.fontSize = `${evt.currentTarget.value}px`

}
    