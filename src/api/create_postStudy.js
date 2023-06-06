import { BASE_API } from "../utils/constants"

export async function create_postStudy(a){
    const BASE_URL = `${BASE_API}/post-studies`
    const response = await fetch(BASE_URL,{ 
        method: 'POST',
        body: JSON.stringify(a),
        headers: {
            'Content-Type': 'application/json',
        },
      })
    
    return response.json()
}  