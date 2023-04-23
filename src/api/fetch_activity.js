import { BASE_API } from "../utils/constants"
export const fetch_activity = async () => {
    const res = await fetch(`${BASE_API}/activity/`, {
        method: 'GET',
    })
    return res.json() 
}