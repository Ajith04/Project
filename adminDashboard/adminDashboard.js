import {addStudents, updateStudent, removeSingleStudent, addNewCourse, getCourses, addNewStudent, courseUpdate, deleteSingleCourse, getStudents, addPayment, getPayment} from '../api.js';



let offCanvas = document.getElementById("offCanvas");
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById("menu2");
let studentManagement = document.getElementById("studentManagement");
let itec = document.getElementById("itec");
let topbar = document.getElementById("topbar");
let dashboard = document.getElementById("dashboard");
let courseManagement = document.getElementById("courseManagement");
let feeManagement = document.getElementById("feeManagement");
let instituteManagement = document.getElementById("instituteManagement");
let studyMaterials = document.getElementById("studyMaterials");



let tabDashboard = document.getElementById("tabDashboard");
let tabStudentManagement = document.getElementById("tabStudentManagement");
let tabCourseManagement = document.getElementById("tabCourseManagement");
let tabFeeManagement = document.getElementById("tabFeeManagement");
let tabInstituteManagement = document.getElementById("tabInstituteManagement");
let tabStudyMaterials = document.getElementById("tabStudyMaterials");

// ...................................................................................................
// Tab Navigation

// Dashboard
tabDashboard.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
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

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
}

// ........................................................................................
// Student Management
tabStudentManagement.onclick = function(){
    dashboard.style.display = "none";
    courseManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
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

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }

// ..............................................................................................
// Course Management
tabCourseManagement.onclick = function(){
    dashboard.style.display = "none";
    studentManagement.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
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

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }

// .........................................................................................
// Fee Management
tabFeeManagement.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "none";
    feeManagement.style.display = "flex";

    tabFeeManagement.style.backgroundColor = "white";
    tabFeeManagement.style.color = "black";
    tabFeeManagement.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }
    

// ............................................................................
//  Institute Management
tabInstituteManagement.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    feeManagement.style.display = "none";
    studyMaterials.style.display = "none";
    instituteManagement.style.display = "flex";

    tabInstituteManagement.style.backgroundColor = "white";
    tabInstituteManagement.style.color = "black";
    tabInstituteManagement.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabStudyMaterials.style.backgroundColor = "#07C6A3";
    tabStudyMaterials.style.color = "white";
    tabStudyMaterials.style.borderRight = "1px solid black";
    }


// ...................................................................................
// Study materials
tabStudyMaterials.onclick = function(){
    studentManagement.style.display = "none";
    courseManagement.style.display = "none";
    dashboard.style.display = "none";
    feeManagement.style.display = "none";
    instituteManagement.style.display = "none";
    studyMaterials.style.display = "flex";

    tabStudyMaterials.style.backgroundColor = "white";
    tabStudyMaterials.style.color = "black";
    tabStudyMaterials.style.borderRight = "none";
    
    tabStudentManagement.style.backgroundColor = "#07C6A3";
    tabStudentManagement.style.color = "white";
    tabStudentManagement.style.borderRight = "1px solid black";
    
    tabCourseManagement.style.backgroundColor = "#07C6A3";
    tabCourseManagement.style.color = "white";
    tabCourseManagement.style.borderRight = "1px solid black";

    tabInstituteManagement.style.backgroundColor = "#07C6A3";
    tabInstituteManagement.style.color = "white";
    tabInstituteManagement.style.borderRight = "1px solid black";

    tabDashboard.style.backgroundColor = "#07C6A3";
    tabDashboard.style.color = "white";
    tabDashboard.style.borderRight = "1px solid black";

    tabFeeManagement.style.backgroundColor = "#07C6A3";
    tabFeeManagement.style.color = "white";
    tabFeeManagement.style.borderRight = "1px solid black";
    }

// ..............................................................................................
// Top bar menu - onclick
menu1.onclick = function(){
    offCanvas.style.display = "none";
    topbar.style.width = "100%";
    studentManagement.style.width = "100%";
    courseManagement.style.width = "100%";
    dashboard.style.width = "100%";
    feeManagement.style.width = "100%";
    instituteManagement.style.width = "100%";
    studyMaterials.style.width = "100%";
    menu2.style.display = "block";
    itec.innerText = "Information Technology Education Centre";

}

// .................................................................................................
// Off-canvas menu - onclick
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
    feeManagement.style.width = "75%";
    instituteManagement.style.width = "75%";
    studyMaterials.style.width = "75%";
    dashboard.style.width = "75%";
    menu2.style.display = "none";
    itec.innerText = "ITEC";
    offCanvas.style.position = "absolute";
    offCanvas.style.top = "0";
}

// ...................................................................................................
// Showing Add Student Modal
let addStudent = document.getElementById("addStudent");

addStudent.onclick = function(){
    modalContainer.style.display = "block";
}


// let addStudentShortcut = document.getElementById("addStudentShortcut");
// addStudentShortcut.appendChild(addStudent);


let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let followup = document.getElementById("followup");
let register = document.getElementById("register");

// ......................................................
// Follow-up Tab
tab1.onclick = function(){
    followup.style.display = "block";
    register.style.display = "none"
    tab1.style.backgroundColor = "White"
    tab2.style.backgroundColor = "#80C574";
    tab1.style.color = "black";
    tab2.style.color = "white";
}


// ........................................................
// Register Tab
tab2.onclick = function(){
    followup.style.display = "none";
    register.style.display = "block";
    tab2.style.backgroundColor = "white";
    tab1.style.backgroundColor = "#D99340";
    tab2.style.color = "black";
    tab1.style.color = "white";
}

//.................................................................................
// Add Student Modal Close Button
let close = document.getElementById("close");
let modalContainer = document.getElementById("modalContainer");

close.onclick = function(){
    modalContainer.style.display = "none";
}

// ...............................................................................
// Follow-up Cancel Button
let followupCancel = document.getElementById("followupCancel");
let registerCancel = document.getElementById("registerCancel");

followupCancel.onclick = function(){
    modalContainer.style.display = "none";
}

// ................................................................................
// Register Cancel Button
registerCancel.onclick = function(){
    modalContainer.style.display = "none";
}

// .................................................................................
// Follow-up Add Button
document.getElementById("followup").addEventListener('submit', async function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;

    let studentobj = {Name:name, Mobile:mobile, Course:course, Date:date, Email:email, Address:address, Description:description};
    await addStudents(studentobj);
    event.target.reset();
    
    alert("Successfully added to follow-up list");
    
});


// ......................................................................................
// Register Add Button
document.getElementById("register").addEventListener('submit', async function(event){
    event.preventDefault();
    let stuId = document.getElementById("stuId").value;

    let allStudents = await getStudents();
    
    if(await allStudents.find(e => e.id === stuId)){
        alert("The Student ID is already exists");
    
    }
    else{
        
    let stuFName = document.getElementById("stuFName").value;
    let stuLName = document.getElementById("stuLName").value;
    let selectCourse = document.getElementById("selectCourse").value;
    let stuBatch = document.getElementById("stuBatch").value;
    let stuDate = document.getElementById("stuDate").value;
    let stuMobile = document.getElementById("stuMobile").value;
    let stuEmail = document.getElementById("stuEmail").value;
    let stuAddress = document.getElementById("stuAddress").value;
    let stuRegFee = document.getElementById("stuRegFee").value;
    let stuAddiFee = document.getElementById("stuAddiFee").value;

    let studentObject = {stuid:stuId, stufname:stuFName, stulname:stuLName, stucourse:selectCourse, stubatch:stuBatch, studate:stuDate, stumobile:stuMobile, stuemail:stuEmail, stuaddress:stuAddress, sturegfee:stuRegFee, stuaddifee:stuAddiFee};

    let paymentObject = {studentId:stuId, studentDate:stuDate, studentAddiFee:stuAddiFee};
    
    await addPayment(paymentObject);
    await addNewStudent(studentObject);

    alert("Successfully added as new student");

    let a = document.createElement('a');
    a.href = `mailto:${stuEmail}?subject=WelCome to ITEC&body=Hi ${stuFName}, Congratulations... %0A%0AYou just have registered in ITEC on ${stuDate} to follow the course ${selectCourse}. Please find the link below of our student portal. You can signup with your N.I.C No ${stuId} you used for your course registration. Thank you.%0A%0A%0A The Student portal link - https://www.itecstudentportal.com`;
    a.click();
    event.target.reset();
    }
});

// ........................................................
// Showing Edit Student Modal
let editStudent = document.getElementById("editStudent");

editStudent.onclick = function(){
document.getElementById("editContainer").style.display = "block";
}

// ..........................................................
// Edit Student Modal Close Button
let editClose = document.getElementById("editClose");
editClose.onclick = function(){
    document.getElementById("editContainer").style.display = "none";
    
}

// .........................................................................
// Search Button in Edit Student
let search = document.getElementById("search");

search.onclick = async function(){
    let id = document.getElementById("searchId").value;
    const wholeStudents = await getStudents();

    if(await wholeStudents.find(e => e.id === id)){
    let e = wholeStudents.find(e => e.id === id);
    errMessage.textContent = "";
    document.getElementById("editDynamic").style.display = "block";
    document.getElementById("seId").value = e.id;
    document.getElementById("seFname").value = e.firstname;
    document.getElementById("seLname").value = e.lastname;
    document.getElementById("seCourse").value = e.course;
    document.getElementById("seBatch").value = e.batch;
    document.getElementById("seMobile").value = e.mobile;
    document.getElementById("seEmail").value = e.email;
    document.getElementById("seAddress").value = e.address;
    }
    else{
        let errMessage = document.getElementById("errMessage");
        document.getElementById("editDynamic").style.display = "none";
        errMessage.textContent = "No such record";
        errMessage.style.color = "red";
        errMessage.style.textAlign = "center";
        errMessage.style.marginBottom = "20px";
        errMessage.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
   
}

// .........................................................................................
// Edit Button in Edit Student Modal
let studentEdit = document.getElementById("studentEdit");
studentEdit.onclick = function(){
seFname.disabled = false;
seLname.disabled = false;
seCourse.disabled = false;
seBatch.disabled = false;
seMobile.disabled = false;
seEmail.disabled = false;
seAddress.disabled = false;
};

// ..........................................................................................
// Update Student
document.getElementById("editDynamic").addEventListener('submit', async function(event){
    event.preventDefault();
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
    event.target.reset();
    alert("Successfully updated");

});

// .......................................................................
// View all Students in a New Page
let viewStudent = document.getElementById("viewStudent");

viewStudent.onclick = function(){
    let a= document.createElement('a');
    a.href= '../viewStudents/viewStudents.html';
    a.target= '_blank';
    a.click();
}

// .......................................................................................................
// Showing Remove Student Modal
let removeStudent = document.getElementById("removeStudent");
let removeStudetModal = document.getElementById("removeStudetModal");
removeStudent.onclick = function(){
    removeStudetModal.style.display = "block";
}

// ........................................................................
// Remove Student Moadl Cloase Button
document.getElementById("removeClose").onclick = function(){
    removeStudetModal.style.display = "none";
}

// ..................................................................................
// Remove Student Modal Search Button
let removeDynamic = document.getElementById("removeDynamic");

document.getElementById("removeSearch").onclick = async function(){
    let removeSearchId = document.getElementById("removeSearchId").value;
    let student = await getStudents();

    if(student.find(e => e.id === removeSearchId)){
    let e = student.find(e => e.id === removeSearchId);
    removeError.textContent = "";
    removeDynamic.style.display = "flex";
    document.getElementById("removeId").innerText = e.id;
    document.getElementById("removeName").innerText = e.firstname;
    document.getElementById("removeBatch").innerText = e.batch;
    }
    else{
        removeDynamic.style.display = "none";
        let removeError = document.getElementById("removeError");
        removeError.textContent = "No such record";
        removeError.style.color = "White";
        removeError.style.textAlign = "center";
        removeError.style.marginBottom = "20px";
        removeError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
}

// .....................................................................
// Remove Student Modal Remove Button
document.getElementById("removeBtn").onclick = async function(){
    let removeSearchId = document.getElementById("removeSearchId").value;
    await removeSingleStudent(removeSearchId);
    removeDynamic.style.display = "none";
    alert("Successfully removed");

}

// ........................................................................
// Showing Add Course Modal
let addCourse = document.getElementById("addCourse");

addCourse.onclick = function(){
    let addCourseModal = document.getElementById("addCourseModal");
    addCourseModal.style.display = "block";
}

// let addCourseShortcut = document.getElementById("addCourseShortcut");
// addCourseShortcut.appendChild(addCourse);

let addCourseClose = document.getElementById("addCourseClose");
let addCourseCancel = document.getElementById("addCourseCancel");
let addCourseModal = document.getElementById("addCourseModal");

// ...................................................
// Add Course Modal Close Button
addCourseClose.onclick = function(){
    addCourseModal.style.display = "none";
}

// ..................................................
// Add Course Modal Cancel button
addCourseCancel.onclick = function(){
    addCourseModal.style.display = "none";
}

// ..................................................................................................
// Add Course Function
document.getElementById("addCourseForm").addEventListener('submit', async function(event){
    event.preventDefault();
    let courseList = await getCourses();
    let addCourseId = document.getElementById("addCourseId").value;

    if(await courseList.find(e => e.id === addCourseId)){
        alert("The course ID is already exists");
    }else{

    let addCourseName = document.getElementById("addCourseName").value;
    let addCourseDuration = document.getElementById("addCourseDuration").value;
    let addCourseFee = document.getElementById("addCourseFee").value;
    let addCourseInstructor = document.getElementById("addCourseInstructor").value;
    let addCourseSyllabus = document.getElementById("addCourseSyllabus").value;

    let courseObj = {courseId:addCourseId, courseName:addCourseName, courseDuration:addCourseDuration, courseFee:addCourseFee, courseInstructor:addCourseInstructor, courseSyllabus:addCourseSyllabus};

    await addNewCourse(courseObj);
    event.target.reset();
    alert("Successfully added");
    }
});


// ......................................................................................
// Adding Courses to Listbox in Add Student Modal
const courseList = await getCourses();
let selectCourse = document.getElementById("selectCourse");

courseList.forEach(e => {
    let option = document.createElement('option');
    option.value = e.coursename;
    option.text = e.coursename;
    selectCourse.appendChild(option);
});


// ....................................................................................
// Showing Edit Course Modal
let editCourse = document.getElementById("editCourse");
editCourse.onclick = function(){
    let editCourseModal = document.getElementById("editCourseModal");
    editCourseModal.style.display = "block";
}


// ........................................................................
// Edit Course Modal Close Button
document.getElementById("editcourseModalClose").onclick = function(){
    let editCourseModal = document.getElementById("editCourseModal");
    editCourseModal.style.display = "none";
}

// ..................................................................................
// Edit Course Modal Search Button
document.getElementById("courseSearch").onclick = async function(){
    let searchCourseId = document.getElementById("searchCourseId").value;
    const courseList = await getCourses();

    if(await courseList.find(e => e.id === searchCourseId)){
        courseError.innerText = "";
    let e = await courseList.find(e => e.id === searchCourseId);
    let editCourseDynamic = document.getElementById("editCourseDynamic");
    editCourseDynamic.style.display = "block";
    document.getElementById("editCourseId").value = e.id;
    document.getElementById("editCourseName").value = e.coursename;
    document.getElementById("editDuration").value = e.duration;
    document.getElementById("editFee").value = e.fees;
    document.getElementById("editInstructor").value = e.instructor;
    document.getElementById("editSyllabus").value = e.syllabus;
    }
    else{
        editCourseDynamic.style.display = "none";
        let courseError = document.getElementById("courseError");
        courseError.innerText = "No such record";
        courseError.style.color = "red";
        courseError.style.textAlign = "center";
        courseError.style.marginBottom = "20px";
        courseError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    }
}


// ............................................................................
// Edit Course Modal Edit Button
document.getElementById("courseEditBtn").onclick = function(){
    editCourseName.disabled = false;
    editDuration.disabled = false;
    editFee.disabled = false;
    editInstructor.disabled = false;
    editSyllabus.disabled = false;
}


// .......................................................................................................
// Edit Course Modal Update Function
document.getElementById("editCourseDynamic").addEventListener('submit', async function(event){
    event.preventDefault();
    let searchCourseId = document.getElementById("searchCourseId").value;

    let editCourseName = document.getElementById("editCourseName").value;
    let editDuration = document.getElementById("editDuration").value
    let editFee = document.getElementById("editFee").value;
    let editInstructor = document.getElementById("editInstructor").value;
    let editSyllabus = document.getElementById("editSyllabus").value;

    const editCourseObj = {eCourseName:editCourseName, eDuration:editDuration, eFee:editFee, eInstructor:editInstructor, eSyllabus:editSyllabus}

    await courseUpdate(searchCourseId, editCourseObj);
    event.target.reset();

    alert("Successfully updated");
});


// ......................................................................................
// Showing All Courses in a New Page
let viewCourse = document.getElementById("viewCourse");
viewCourse.onclick = function(){
    let a= document.createElement('a');
    a.href= '../viewCourses/viewCourses.html';
    a.target= '_blank';
    a.click();
}


// ...................................................................................
// Showing Remove Course Modal
let removeCourse = document.getElementById("removeCourse");
let removeCourseModal = document.getElementById("removeCourseModal");
removeCourse.onclick = function(){
    removeCourseModal.style.display = "block";
}

// ...................................................................................
// Remove Course Modal close Button
document.getElementById("removeCourseClose").onclick = function(){
    removeCourseModal.style.display = "none";
}


// ..................................................................................
// Remove Course Model Search button
let removeCourseSearch = document.getElementById("removeCourseSearch");
removeCourseSearch.onclick = async function(){
    let courseSearchId = document.getElementById("courseSearchId").value;
    let courseList = await getCourses();

    if(await courseList.find(e => e.id === courseSearchId)){
        removeCourseError.innerText = "";
        let e = await courseList.find(e => e.id === courseSearchId);

    document.getElementById("removeCourseDynamic").style.display = "flex";
    document.getElementById("cId").innerText = e.id;
    document.getElementById("cName").innerText = e.coursename;
    document.getElementById("cInstructor").innerText = e.instructor; 
    }else{
        document.getElementById("removeCourseDynamic").style.display = "none";
        let removeCourseError = document.getElementById("removeCourseError");
        removeCourseError.innerText = "No such record";
        removeCourseError.style.color = "white";
        removeCourseError.style.textAlign = "center";
        removeCourseError.style.marginBottom = "20px";
        removeCourseError.style.fontFamily = "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";

    } 
}

// .............................................................................................
// Remove Course Modal Remove Button
let deleteCourse = document.getElementById("deleteCourse");
deleteCourse.onclick = async function(){
    document.getElementById("removeCourseDynamic").style.display = "none";
    let courseSearchId = document.getElementById("courseSearchId").value;
    await deleteSingleCourse(courseSearchId);
    alert("Successfully deleted");
}

let addStudentShortcut = document.getElementById("addStudentShortcut");
let addCourseShortcut = document.getElementById("addCourseShortcut");
let addPaymentShortcut = document.getElementById("addPaymentShortcut");
let addExpenseShortcut = document.getElementById("addExpenseShortcut");

addStudentShortcut.onclick = function(){
    modalContainer.style.display = "block";
}

addCourseShortcut.onclick = function(){
    addCourseModal.style.display = "block";
}

async function displayLastStudents(){
    let allStudents = await getStudents();
    let reversedStudent = allStudents.reverse();
    let filteredStudents = await reversedStudent.slice(0, 5);
    
    let lastStudents = document.getElementById("lastStudents");

    filteredStudents.forEach(e => {
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574";
        row.style.color = "black";
        row.style.borderBottom = "1px solid black";
        row.style.borderRadius = "5px";
        
        
        

        let idCell = document.createElement('td');
        idCell.style.padding = "3px";
        idCell.textContent = e.id;
        row.appendChild(idCell);

        let nameCell = document.createElement('td');
        nameCell.style.padding = "3px";
        nameCell.textContent = e.firstname;
        row.appendChild(nameCell);

        let courseCell = document.createElement('td');
        courseCell.style.padding = "3px";
        courseCell.textContent = e.course;
        row.appendChild(courseCell);

        let dateCell = document.createElement('td');
        dateCell.style.padding = "3px";
        dateCell.textContent = e.date;
        row.appendChild(dateCell);

        lastStudents.appendChild(row);


    })
}
displayLastStudents();

// async function displayLastCourses(){
//     let allCourses = await getCourses();
//     let reversedCourses = allCourses.reverse();
//     let filteredCourses = await reversedCourses.slice(0, 5);
    
//     let lastCourses = document.getElementById("lastCourses");

//     filteredCourses.forEach(e => {
//         let row = document.createElement('tr');
//         row.style.backgroundColor = "#D99340";
//         row.style.color = "black";
//         row.style.borderBottom = "1px solid black";
        
        

//         let idCell = document.createElement('td');
//         idCell.style.padding = "3px";
//         idCell.textContent = e.id;
//         row.appendChild(idCell);

//         let nameCell = document.createElement('td');
//         nameCell.style.padding = "3px";
//         nameCell.textContent = e.coursename;
//         row.appendChild(nameCell);

//         let feeCell = document.createElement('td');
//         feeCell.style.padding = "3px";
//         feeCell.textContent = e.fees;
//         row.appendChild(feeCell);

//         let instructorCell = document.createElement('td');
//         instructorCell.style.padding = "3px";
//         instructorCell.textContent = e.instructor;
//         row.appendChild(instructorCell);

//         lastCourses.appendChild(row);


//     })
// }

displayLastCourses();


document.getElementById("paymentSearchBtn").onclick = async function(){
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    const paymentAllStudents = await getStudents();

    if (await paymentAllStudents.find(e => e.id === paymentSearchInput)){
        err.style.display = "none";
        let singleStudent = await paymentAllStudents.find(e => e.id === paymentSearchInput)
        let paymentCourseName = singleStudent.course;

        const allCourses = await getCourses();
        let singleCourse = await allCourses.find(e => e.coursename === paymentCourseName);
        let courseFee = singleCourse.fees;
        
        
        const allPayments = await getPayment();
        
        let oldPayments = 0;
        await allPayments.forEach(e => {
            if(e.id === paymentSearchInput){
                oldPayments += parseInt(e.fee);
            }
        });

        let payableAmount = courseFee - oldPayments;


        let payDiv = document.getElementById("payDiv");
        payDiv.style.display = "block";

        document.getElementById("idCell").textContent = singleStudent.id;
        document.getElementById("nameCell").textContent = singleStudent.firstname;
        document.getElementById("mobileCell").textContent = singleStudent.mobile;
        document.getElementById("payableCell").textContent = payableAmount;

        
    }else{
        payDiv.style.display = "none";
        let err = document.getElementById("err");
        err.style.display = "block";
        err.textContent = "The Student ID is not exists";
    }


}



document.getElementById("payDiv").addEventListener('submit', async function(event){
    event.preventDefault();
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    let singlePayment = document.getElementById("singlePayment").value;
    let paymentDate = document.getElementById("paymentDate").value;

    let paymentObj = {studentId:paymentSearchInput, studentDate:paymentDate, studentAddiFee:singlePayment};

    await addPayment(paymentObj);

    alert("Payment successfully added");
});

document.getElementById("reminderBtn").onclick = async function(event){
    event.preventDefault();
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    const paymentAllStudents = await getStudents();
    let singleStudent = await paymentAllStudents.find(e => e.id === paymentSearchInput);
    console.log(singleStudent)
    
    
    let a = document.createElement('a');
    a.href = `mailto:${singleStudent.email}?subject=Payment Reminder&body=Hi ${singleStudent.firstname}, %0A%0AThis is a kindly reminder, You have a payment due. Please pay the amount asap. %0A%0AThank you.`;
    a.click();
}

document.getElementById("paymentHistory").onclick = async function(event){
    event.preventDefault();

    let allPayments = await getPayment();
    let paymentSearchInput = document.getElementById("paymentSearchInput").value;
    let payHistory = document.getElementById("payHistory");
    let payHistoryDiv = document.getElementById("payHistoryDiv");
    payHistoryDiv.style.display = "block";
    let historyErr = document.getElementById("historyErr");
    historyErr.textContent = "none";
    historyErr.style.display = "none";

    await allPayments.forEach(e => {
    if(e.id === paymentSearchInput){
        console.log("hi");
        let row = document.createElement('tr');
        row.style.backgroundColor = "#80C574"

        let dateCell = document.createElement('td');
        dateCell.style.padding = "20px";
        dateCell.style.textAlign = "center";
        dateCell.textContent = e.date;
        row.appendChild(dateCell);

        let feeCell = document.createElement('td');
        feeCell.style.padding = "20px";
        feeCell.style.textAlign = "center";
        feeCell.textContent = e.fee;
        row.appendChild(feeCell);

        payHistory.appendChild(row);

    }else{
        console.log("hello");
        payHistoryDiv.style.display = "none";
        historyErr.style.display = "none";
        historyErr.textContent = "No payment history";
        
    }
    });


}