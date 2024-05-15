const form = document.querySelector(".form-signup form");
const continueButton = form.querySelector(".form-signup input[type='submit']");
const errorText = form.querySelector(".form-signup .error-txt");

form.onsubmit = (e) => {
    e.preventDefault();
}

continueButton.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=> {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                let data = xhr.response;
                if(data == "Success") {
                    location.href = 'users.php'
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}