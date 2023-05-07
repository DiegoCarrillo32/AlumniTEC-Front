import React, { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/SyncLoader'

import { useParams } from 'react-router-dom'
import { fetchAlumniById } from '../../api/fetch_alumni'
import { Item } from '../../components/Item/Item'
import PostStudy from '../../components/PostStudy/PostStudy'

export const DetailedAlumni = () => {
  const {id} = useParams()
  const [Alumni, setAlumni] = useState({})
  const [Loading, setLoading] = useState(true)
  useEffect(()=>{
    (async ()=> {
      setLoading(true)
      const res = await fetchAlumniById(id)
      setAlumni(res)
      setLoading(false)
    })()
  }, [])
  return (
    Loading ?
    <div className='flex items-center justify-center w-full'>
      <PacmanLoader color={"#123abc"} loading={Loading} size={24} />
    </div>
    :(
      <div className='flex flex-col w-screen  md:grid md:grid-cols-2 md:pt-10 lg:p-20'>
        <div className='w-full md:w-80' >
          <img className='w-full' src={Alumni.image} alt={Alumni.name} />
          <h2 className='text-2xl self-center'>{Alumni.name}</h2>
        </div>
        <section className='flex flex-col'>
          <h2 className='text-4xl mb-2'>Información personal</h2>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Email:</h2>
            <span className='ml-2'>
              {Alumni.email}
            </span>
          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Trabajo actual:</h2>
            <span className='ml-2'>
              {Alumni.jobTitle}
            </span>

          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Compañia actual:</h2>
            <span className='ml-2'>
              {Alumni.company}
            </span>
          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Numero de telefono:</h2>
            <span className='ml-2'>
              {Alumni.phone}
            </span>
          </div>
          <div className='flex ml-2'>
            <h2 className='font-bold'>Fecha de graduación:</h2>
            <span className='ml-2'>
              {Alumni.gradDate}
            </span>
          </div>
        </section>
      <div>
        <h2 className='text-2xl md:text-4xl md:mb-2'>Actividades extracurriculares</h2>
        <span className='text-gray-400 text-xl'>Informacion sobre las actividades extracurriculares</span>
      </div>

      <section className='flex flex-col overflow-y-scroll'>
        <div>
          {
            Alumni.activity?.map((act, index) => (
              <Item act={act} key={index}/>
            ))

          }
        </div>

      </section>
      <div>
      <h2 className='text-2xl md:text-4xl md:mb-2'>Estudios Posteriores</h2>
      <span className='text-gray-400 text-xl'>Informacion de estudios posteriores</span>
    </div>

    <section className='flex flex-col overflow-y-scroll'>
      <div>
        {
          Alumni.postStudy?.map((act, index) => (
            <PostStudy act={act} key={index} alumniId={id}/>
          ))

        }
      </div>
    </section>
      </div>
      
    )    
  )
}
