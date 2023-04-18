import React, { useEffect, useState } from 'react'
import { fetchAlumni } from '../../api/fetch_alumni'

export const Alumni = () => {
    const [Paginate, setPagiante] = useState({
        page: 0,
        limit: 10,
    });
    useEffect(()=>{
        
        (async ()=>{
            console.log(await fetchAlumni(Paginate.page, Paginate.limit));
        })()
    }, [])
  return (
    //TABLA DE ALUMNOS 
    <>
        <button onClick={()=>{
            setPagiante({
                page: Paginate.page + 1,
                limit: Paginate.limit
            })
        }} >Aumentar paginación</button>
        <button onClick={()=>{
            (async ()=>{
                console.log(await fetchAlumni(Paginate.page, Paginate.limit));
            })()
        }} >Ver mas datos</button>
    </>
  )
}
