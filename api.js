export async function getAdmin() {
    const response = await fetch('http://localhost:3000/admin');
    const data = await response.json();
    return data;
  }


  export async function editAdmin(newPassword){
    const response = await fetch('http://localhost:3000/admin', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ password: newPassword })
  })      
}
    