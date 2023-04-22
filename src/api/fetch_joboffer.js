import { BASE_API } from "../utils/constants"

export const createJobOffer = async (jobOfferDto) => {
    const res = await fetch(`${BASE_API}/job-offer/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobOfferDto),
    })
    return res.json() 
}


export const getJobOffers = async () => {
    return await fetch(`${BASE_API}/job-offer/`, {
       method: "GET",
       
    })
       .then(response => response.json())
       .then((data) => {
       return data;
       });
}
