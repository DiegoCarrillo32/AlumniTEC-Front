import { BASE_API } from "../utils/constants"

export async function validateToken(){
    const token = localStorage.getItem("token")
    if (token == null){
        return false
    }
    const response = await fetch(`${BASE_API}/auth/validate`,{
        method: 'POST',
        mode: 'cors',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({token})
    })
    return response.json()
}