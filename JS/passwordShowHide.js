const passwordField = document.querySelector(".form-signup input[type='password']")
toggleButton = document.querySelector(".form-signup i");

toggleButton.onclick = ()=>{
    if (passwordField.type == 'password') {
        passwordField.type = 'text';
        toggleButton.classList.remove("active")
    } else {
        passwordField.type =  'password'
        toggleButton.classList.add("active")
    }
}