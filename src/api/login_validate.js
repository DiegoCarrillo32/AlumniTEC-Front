import { BASE_API } from "../utils/constants"

const API_URL = `${BASE_API}/auth/login`
export async function login_validate(id,password){
  if (id == "" || password == ""){
    return false
  }
  const response = await fetch(`${API_URL}`,{ 
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({id,password}),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}