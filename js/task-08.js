const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onCheckForm);

function onCheckForm(evt) {
    evt.preventDefault();
    
     const {
    elements: { email, password }
     } = evt.currentTarget;
    
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповненні!!!");
  }
   

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}

