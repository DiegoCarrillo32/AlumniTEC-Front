import { BASE_API } from "../utils/constants"

export async function change_active_postStudy(a){
    const BASE_URL = `${BASE_API}/post-studies/active/${a}
    `
    const response = await fetch(BASE_URL,{ 
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
      })
    
    return response.json()
}  