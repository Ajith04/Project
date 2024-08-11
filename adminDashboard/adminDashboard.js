import {addStudents, getStudentById, updateStudent} from '../api.js';



let offCanvas = document.getElementById("offCanvas");
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById("menu2");
let studentManagement = document.getElementById("studentManagement");
let itec = document.getElementById("itec");
let topbar = document.getElementById("topbar");
let dashboard = document.getElementById("dashboard");
let courseManagement = document.getElementById("courseManagement");



let tabDashboard = document.getElementById("tabDashboard");
let tabStudentManagement = document.getElementById("tabStudentManagement");
let tabCourseManagement = document.getElementById("tabCourseManagement");
let tabFeeManagement = document.getElementById("tabFeeManagement");
let tabInstituteManagement = document.getElementById("tabInstituteManagement");
let tabStudyMaterials = document.getElementById("tabStudyMaterials");

tabDashboard.onclick = function(){
studentManagement.style.display = "none";
courseManagement.style.display = "none";
dashboard.style.display = "flex";
tabDashboard.style.backgroundColor = "white";
tabDashboard.style.color = "black";
tabDashboard.style.borderRight = "none";

tabStudentManagement.style.backgroundColor = "#07C6A3";
tabStudentManagement.style.color = "white";
tabStudentManagement.style.borderRight = "1px solid black";

tabCourseManagement.style.backgroundColor = "#07C6A3";
tabCourseManagement.style.color = "white";
tabCourseManagement.style.borderRight = "1px solid black";
}

tabStudentManagement.onclick = function(){
    dashboard.style.display = "none";
    courseManagement.style.display = "none";
    studentManagement.style.display = "flex"; 
    tabStudentManagement.style.backgroundColor = "white";
    tabStudentManagement.style.color = "black";
    tabStudentManagement.style.borderRight = "none";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";
    }

tabCourseManagement.onclick = function(){
    dashboard.style.display = "none";
    studentManagement.style.display = "none";
    courseManagement.style.display = "flex";
    tabCourseManagement.style.backgroundColor = "white";
    tabCourseManagement.style.color = "black";
    tabCourseManagement.style.borderRight = "none";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    }

menu1.onclick = function(){
    offCanvas.style.display = "none";
    topbar.style.width = "100%";
    studentManagement.style.width = "100%";
    courseManagement.style.width = "100%";
    dashboard.style.width = "100%";
    menu2.style.display = "block";
    itec.innerText = "Information Technology Education Centre";

}

menu2.onclick = function(){
    offCanvas.style.display = "block";
    tabDashboard.style.backgroundColor = "white";
    tabDashboard.style.color = "black";
    tabDashboard.style.borderRight = "none";
    topbar.style.width = "75%";
    topbar.style.position= "absolute";
    topbar.style.right = "0";
    studentManagement.style.width = "75%";
    courseManagement.style.width = "75%";
    dashboard.style.width = "75%";
    menu2.style.display = "none";
    itec.innerText = "ITEC";
    offCanvas.style.position = "absolute";
    offCanvas.style.top = "0";
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

let addCourse = document.getElementById("addCourse");

addCourse.onclick = function(){
    let addCourseModal = document.getElementById("addCourseModal");
    addCourseModal.style.display = "block";
}

let addCourseClose = document.getElementById("addCourseClose");
let addCourseCancel = document.getElementById("addCourseCancel");
let addCourseModal = document.getElementById("addCourseModal");

addCourseClose.onclick = function(){
    addCourseModal.style.display = "none";
}

addCourseCancel.onclick = function(){
    addCourseModal.style.display = "none";
}




















        
        




