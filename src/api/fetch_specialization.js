import { BASE_API } from "../utils/constants";

export const fetchSpecialization = async () => {
     return await fetch(`${BASE_API}/specialization`, {
        method: "GET",
        
     })
        .then(response => response.json())
        .then((data) => {
        return data;
        });
}

export const addSpecialization = async (specialization) => {
       return await fetch(`${BASE_API}/specialization`, {
         method: "POST",
         headers: {
               "Content-Type": "application/json",
         },
         body: JSON.stringify(specialization),
       })
         .then(response => response.json())
         .then((data) => {
         return data;
         });
}
export const editSpecialization = async (specialization) => {
        return await fetch(`${BASE_API}/specialization/${specialization.id}`, {
          method: "PATCH",
          headers: {
                "Content-Type": "application/json",
          },
          body: JSON.stringify(specialization),
        })
          .then(response => response.json())
          .then((data) => {
          return data;
          });
  }

export const changeSpecActive = async (specialization) => {
        return await fetch(`${BASE_API}/specialization/${specialization}`, {
          method: "DELETE",
          headers: {
                "Content-Type": "application/json",
          },
          
        })
          .then(response => response.json())
          .then((data) => {
          return data;
          });
  }