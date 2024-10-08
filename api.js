export async function getAdmin() {
    const response = await fetch('http://localhost:3000/admin');
    const data = await response.json();
    return data;
  }


  export async function editAdmin(newPassword){
    await fetch('http://localhost:3000/admin/1', {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ password: newPassword })
  })      
}

export async function addStudents(obj){
  await fetch('http://localhost:3000/followup',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"name":obj.Name, "mobile":obj.Mobile, "course":obj.Course, "date":obj.Date, "email":obj.Email, "address":obj.Address, "description":obj.Description})
  })
  
}


// export async function getStudentById(id) {
//   const response = await fetch(`http://localhost:3000/students/${id}`);
//   const data = await response.json();
//   return data;
// }

export async function updateStudent(putId, putStudents) {
  const response = await fetch(`http://localhost:3000/students/${putId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({firstname:putStudents.Fname, lastname:putStudents.Lname, course:putStudents.Course, batch:putStudents.Batch, mobile:putStudents.Mobile, email:putStudents.Email, address:putStudents.Address})
  });
}

export async function getStudents() {
  const response = await fetch('http://localhost:3000/students');
  const data = await response.json();
  return data;
}


export async function removeSingleStudent(id) {
  await fetch(`http://localhost:3000/students/${id}`, {
  method:'DELETE'
  });
}

export async function addNewCourse(obj){
  await fetch('http://localhost:3000/courses',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"id":obj.courseId, "coursename":obj.courseName, "duration":obj.courseDuration, "fees":obj.courseFee, "instructor":obj.courseInstructor, "syllabus":obj.courseSyllabus})
  })
}

export async function getCourses() {
  const response = await fetch('http://localhost:3000/courses');
  const data = await response.json();
  return data;
  
}

export async function addNewStudent(obj){
  await fetch('http://localhost:3000/students',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"id":obj.stuid, "firstname":obj.stufname, "lastname":obj.stulname, "course":obj.stucourse, "batch":obj.stubatch, "date":obj.studate, "mobile":obj.stumobile, "email":obj.stuemail, "address":obj.stuaddress, "regfee":obj.sturegfee, "addifee":obj.stuaddifee})
  })
}


// export async function getSingleCourse(id) {
//   const response = await fetch(`http://localhost:3000/courses/${id}`);
//   const data = await response.json();
//   return data;
// }


export async function courseUpdate(id, obj) {
  const response = await fetch(`http://localhost:3000/courses/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({coursename:obj.eCourseName, duration:obj.eDuration, fees:obj.eFee, instructor:obj.eInstructor, syllabus:obj.eSyllabus})
  });
}


export async function deleteSingleCourse(id) {
  await fetch(`http://localhost:3000/courses/${id}`, {
  method:'DELETE'
  });
}


export async function addPayment(obj){
  await fetch('http://localhost:3000/payments',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"id":obj.studentId, "date":obj.studentDate, "fee":obj.studentAddiFee})
  })
  
}

export async function getPayment() {
  const response = await fetch('http://localhost:3000/payments');
  const data = await response.json();
  return data;
}


export async function addModule(obj){
  await fetch('http://localhost:3000/modules',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"title":obj.mModuleTitle, "course":obj.mCourseList, "batch":obj.mModulebatch, "date":obj.mModuleDate, "file":obj.mModuleFile, "description":obj.mModuleDescription})
  })
  
}

export async function getAllModules() {
  const response = await fetch('http://localhost:3000/modules');
  const data = await response.json();
  return data;
}


export async function addExpense(obj){
  await fetch('http://localhost:3000/expense',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"title":obj.title, "date":obj.date, "price":obj.price, "receipt":obj.receipt, "file":obj.mModuleFile, "description":obj.description})
  })
  
}


export async function changeRegFee(newReg){
  await fetch('http://localhost:3000/registrationfee/1', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ regfee: newReg })
})      
}

export async function getRegFee() {
  const response = await fetch('http://localhost:3000/registrationfee');
  const data = await response.json();
  return data;
}


export async function addBatch(obj){
  await fetch('http://localhost:3000/batch',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"batchname":obj.batch})
  })
  
}

export async function getBatch() {
  const response = await fetch('http://localhost:3000/batch');
  const data = await response.json();
  return data;
}


export async function getFollowup() {
  const response = await fetch('http://localhost:3000/followup');
  const data = await response.json();
  return data;
}

export async function getExpense() {
  const response = await fetch('http://localhost:3000/expense');
  const data = await response.json();
  return data;
}


