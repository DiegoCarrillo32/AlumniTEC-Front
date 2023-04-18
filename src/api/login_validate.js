const API_URL = "http://localhost:3000/administrator"
export async function login_validate(id,password){
    console.log(id,password)
  if (id == "" || password == ""){
    return false
  }
  const response = await fetch(`${API_URL}/${id}/${password}`,{ 
    method: 'GET',
    mode: 'cors',
  })
  return response.json()
}