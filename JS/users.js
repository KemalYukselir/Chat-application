const usersList = document.querySelector(".users .users-list")

setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=> {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                let data = xhr.responseText.trim(); // Trim the response
                console.log(data);
                usersList.innerHTML = data;
            }
        }
    }
    xhr.send();
}, 1000
)