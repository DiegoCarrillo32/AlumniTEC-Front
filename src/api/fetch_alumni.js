import { BASE_API } from "../utils/constants"

export async function fetchAlumni(page = 0, limit = 10){
    const BASE_URL = `${BASE_API}/alumni/${page}/${limit}`
    const response = await fetch(BASE_URL,{ 
        method: 'GET',
        mode: 'cors',
      })

    return response;
}