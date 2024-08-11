import {addStudents, getStudentById, updateStudent} from '../api.js';

let offCanvas = document.getElementById("offCanvas");
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById("menu2");
let container = document.getElementById("container");
let itec = document.getElementById("itec");

menu1.onclick = function(){
    offCanvas.style.display = "none";
    container.style.width = "100%";
    menu2.style.display = "block";
    itec.innerText = "Information Technology Education Centre";
}

menu2.onclick = function(){
    offCanvas.style.display = "block";
    container.style.width = "75%";
    menu2.style.display = "none";
    itec.innerText = "ITEC";
    offCanvas.style.position = "absolute";
    offCanvas.style.top = "0";
    offCanvas.style.animation = "ease";
    offCanvas.style.transition = "2s";
}

let addStudent = document.getElementById("addStudent");

addStudent.onclick = function(){
    modalContainer.style.display = "block";
}


let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let followup = document.getElementById("followup");
let register = document.getElementById("register");

tab1.onclick = function(){
    followup.style.display = "block";
    register.style.display = "none"
    tab1.style.backgroundColor = "White"
    tab2.style.backgroundColor = "#80C574";
    tab1.style.color = "black";
    tab2.style.color = "white";
}

tab2.onclick = function(){
    followup.style.display = "none";
    register.style.display = "block";
    tab2.style.backgroundColor = "white";
    tab1.style.backgroundColor = "#D99340";
    tab2.style.color = "black";
    tab1.style.color = "white";
}

let close = document.getElementById("close");
let modalContainer = document.getElementById("modalContainer");

close.onclick = function(){
    modalContainer.style.display = "none";
}

let followupCancel = document.getElementById("followupCancel");
let registerCancel = document.getElementById("registerCancel");

followupCancel.onclick = function(){
    modalContainer.style.display = "none";
}

registerCancel.onclick = function(){
    modalContainer.style.display = "none";
}

let followupAdd = document.getElementById("followupAdd");

followupAdd.onclick = async function(){
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;

    let studentobj = {Name:name, Mobile:mobile, Course:course, Date:date, Email:email, Address:address, Description:description};

    await addStudents(studentobj);

}

let editStudent = document.getElementById("editStudent");

editStudent.onclick = function(){
document.getElementById("editContainer").style.display = "block";
}

let editClose = document.getElementById("editClose");
editClose.onclick = function(){
    document.getElementById("editContainer").style.display = "none";
    
}

let search = document.getElementById("search");

search.onclick = async function(){
    let id = document.getElementById("searchId").value;
    const singleStudent = await getStudentById(id);
    
    document.getElementById("editDynamic").style.display = "block";

    document.getElementById("seId").value = singleStudent.id;
    document.getElementById("seFname").value = singleStudent.fname;
    document.getElementById("seLname").value = singleStudent.lname;
    document.getElementById("seCourse").value = singleStudent.course;
    document.getElementById("seBatch").value = singleStudent.batch;
    document.getElementById("seMobile").value = singleStudent.mobile;
    document.getElementById("seEmail").value = singleStudent.email;
    document.getElementById("seAddress").value = singleStudent.address;
    
}

let studentEdit = document.getElementById("studentEdit");
studentEdit.onclick = function(){
seFname.disabled = false;
seLname.disabled = false;
seCourse.disabled = false;
seBatch.disabled = false;
seMobile.disabled = false;
seEmail.disabled = false;
seAddress.disabled = false;
}


let studentUpdate = document.getElementById("studentUpdate");

studentUpdate.onclick = async function(){
    let putId = document.getElementById("searchId").value;

    let seFname = document.getElementById("seFname").value;
    let seLname = document.getElementById("seLname").value;
    let seCourse = document.getElementById("seCourse").value;
    let seBatch = document.getElementById("seBatch").value;
    let seMobile = document.getElementById("seMobile").value;
    let seEmail = document.getElementById("seEmail").value;
    let seAddress = document.getElementById("seAddress").value;

    const putStudents = {Fname:seFname, Lname:seLname, Course:seCourse, Batch:seBatch, Mobile:seMobile, Email:seEmail, Address:seAddress};

    await updateStudent(putId, putStudents);

}

let viewStudent = document.getElementById("viewStudent");

viewStudent.onclick = function(){
    window.location.href = "../viewStudents/viewStudents.html";
}




















        
        




