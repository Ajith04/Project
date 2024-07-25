let admin = {
    username : "admin",
    password : "admin"
}

let username = document.getElementById("username").value;
let loginPassword = document.getElementById("loginPassword").value;
let loginButton = document.getElementById("loginButton");

loginButton.onclick = function(){
    if(username.value == admin.username && loginPassword.value == admin.password){
        window.location.href = "adminDashboard.html";
    }
}



let label = document.getElementById("changePasswordLabel");

let modal = document.getElementById("modalContainer");

let close = document.getElementById("close");
let cancel = document.getElementById("cancel")

label.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";

}

cancel.onclick = function(){
    modal.style.display = "none";
}

