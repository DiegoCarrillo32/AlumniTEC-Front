import { BASE_API } from "../utils/constants"

export async function fetchalumniIdName(search='agro'){
    const BASE_URL = `${BASE_API}/alumni/filter/${search}`
    const response = await fetch(BASE_URL,{ 
        method: 'GET',

      })
    
    return response.json()
}  