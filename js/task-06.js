const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onChangeFocus)


function onChangeFocus(evt){
console.log(evt)
    
    if (evt.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
        
        
    } else  {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
 }
