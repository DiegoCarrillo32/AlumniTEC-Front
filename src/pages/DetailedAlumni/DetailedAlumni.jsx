import React, { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/SyncLoader'

import { useParams } from 'react-router-dom'
import { fetchAlumniById } from '../../api/fetch_alumni'
import { Item } from '../../components/Item/Item'

export const DetailedAlumni = () => {
  const {id} = useParams()
  const [Alumni, setAlumni] = useState({})
  const [Loading, setLoading] = useState(true)
  useEffect(()=>{
    (async ()=> {
      setLoading(true)
      const res = await fetchAlumniById(id)
      setAlumni(res)
      console.log(res, "RESPUESTA");
      setLoading(false)
    })()
  }, [])
  return (
    //ALUMNO DETALLADO
    Loading ?
    <div className='flex items-center justify-center w-full'>
      <PacmanLoader color={"#123abc"} loading={Loading} size={24} />
    </div>
    :
    <div className="flex flex-col overflow-y-scroll md:h-screen md:grid md:grid-cols-2 md:p-20 md:overflow-y-scroll">
      <section className='grid  grid-cols-1 ' >
        <section>
          <div className='overflow-hidden h-64 w-64 rounded-lg'>
            <img className='w-full h-full' src={Alumni.image} alt={Alumni.name} />
          </div>
          <h2 className='text-2xl'>{Alumni.name}</h2>
        </section>

        <section className='flex flex-col'>
          <h2 className='text-4xl mb-2'>Información personal</h2>
          <div className='flex ml-2'>

            <h2 className='font-bold'>Email:</h2>
            <span className='ml-2'>
              {Alumni.email}
            </span>
          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Trabajo actual</h2>
            <span className='ml-2'>
              {Alumni.jobTitle}
            </span>

          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Compañia actual</h2>
            <span className='ml-2'>
              {Alumni.company}
            </span>
          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Numero de telefono</h2>
            <span className='ml-2'>
              {Alumni.phone}
            </span>
          </div>

        </section>
      </section>

      <section className='grid  grid-cols-2 '>
        <div>
          
          <h2 className='text-4xl mb-2'>Información academica</h2>
          <div className='flex ml-2'>

              <h2 className='font-bold'>Fecha de graduación:</h2>
              <span className='ml-2'>
                {Alumni.gradDate}
              </span>
            </div>
          <div className='flex ml-2'>

            <h2 className='font-bold'>Año de graduacion:</h2>
            <span className='ml-2'>
              {Alumni.gradYear}
            </span>
          </div>
          <div className='flex ml-2'>
              <h2 className='font-bold'>Año de ingreso:</h2>
              <span className='ml-2'>
                {Alumni.enrollYear}
              </span>
            </div>
        </div>
      </section>
      
      <section className='flex flex-col'>
        <h2 className='text-4xl mb-2'>Actividades extracurriculares</h2>
        <div>
          {
            Alumni.activity?.map((act, index) => (
              <Item act={act}/>
            ))

          }
        </div>
      </section>
    </div>
    
  )
}
