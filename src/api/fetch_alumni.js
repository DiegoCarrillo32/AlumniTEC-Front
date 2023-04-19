import { BASE_API } from "../utils/constants"

export async function fetchAlumni(page = 0, limit = 10, search='agro'){
    const BASE_URL = `${BASE_API}/alumni/${page}/${limit}/${search}`
    const response = await fetch(BASE_URL,{ 
        method: 'GET',
        mode: 'cors',
      })

    return response.json();
}

export async function fetchAlumniById(id){
    const BASE_URL = `${BASE_API}/alumni/${id}`
    const response = await fetch(BASE_URL,{ 
        method: 'GET',
        mode: 'cors',
      })

    return response.json();
}