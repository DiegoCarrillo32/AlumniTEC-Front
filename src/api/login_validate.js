import { BASE_API } from "../utils/constants"

const API_URL = `${BASE_API}/administrator`
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