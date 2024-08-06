import {getAdmin} from './api.js';

async function adminLogin() {
      let loginButton = document.getElementById("loginButton");

      loginButton.onclick = async function(){
            const admin = await getAdmin();
            const adminfinal = admin[0];
            let username = document.getElementById("username").value;
            let loginPassword = document.getElementById("loginPassword").value;
          if(username === adminfinal.username && loginPassword === adminfinal.password){
              window.location.href = "adminDashboard.html";
          }
          else{
            document.getElementById("error_message").innerText = "Please check your User name or Password!";
           
          }
      }
  }
  
  adminLogin();




let label = document.getElementById("changePasswordLabel");

let modal = document.getElementById("modalContainer");

let close = document.getElementById("close");
let cancel = document.getElementById("cancel");

label.onclick = function(){
    modal.style.display = "block";
}

close.onclick = function(){
    modal.style.display = "none";

}

cancel.onclick = function(){
    modal.style.display = "none";
}

