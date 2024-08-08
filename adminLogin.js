import {getAdmin, editAdmin} from './api.js';

async function adminLogin() {

    const admin = await getAdmin();
    let loginButton = document.getElementById("loginButton");

      loginButton.onclick = async function(){

            
            let username = document.getElementById("username").value;
            let loginPassword = document.getElementById("loginPassword").value;

          if(admin.find(e => e.username === username) && admin.find(e => e.password === loginPassword)){
              window.location.href = "adminDashboard.html";
          }
          else{
            document.getElementById("error_message").innerText = "Please check your User name or Password!";
           
          }
      }



        let changePassword = document.getElementById("changePassword");

        
        changePassword.onclick = async function(){
        let oldPassword = document.getElementById("oldPassword").value;
        let newPassword = document.getElementById("newPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        

        if (admin.find(e => e.password === oldPassword)){
            if(newPassword === confirmPassword){
                editAdmin(newPassword);
                document.getElementById("changePasswordError").innerText = "Successfully changed!";
            }
            else{
                document.getElementById("changePasswordError").innerText = "Confirm password should match new password!";
            }
        }else{
            document.getElementById("changePasswordError").innerText = "Type your old password correctly!";
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

