const passwordField = document.querySelector(".form-details input[type='password']")
toggleButton = document.querySelector(".form-details i");

toggleButton.onclick = ()=>{
    console.log("test");
    if (passwordField.type == 'password') {
        passwordField.type = 'text';
        toggleButton.classList.remove("active")
    } else {
        passwordField.type =  'password'
        toggleButton.classList.add("active")
    }
}