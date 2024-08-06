export async function getAdmin() {
    const response = await fetch('http://localhost:3000/admin');
    const data = await response.json();
    return data;
  }
    