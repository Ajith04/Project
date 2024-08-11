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


export async function getStudentById(id) {
  const response = await fetch(`http://localhost:3000/students/${id}`);
  const data = await response.json();
  return data;
}


    