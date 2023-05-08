import React, { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/SyncLoader'

import { useParams } from 'react-router-dom'
import { fetchAlumniById } from '../../api/fetch_alumni'
import { Item } from '../../components/Item/Item'
import PostStudy from '../../components/PostStudy/PostStudy'
import { Box, Modal } from '@mui/material'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { create_postStudy } from '../../api/create_postStudy'
import { toast } from 'sonner'

export const DetailedAlumni = () => {
  const {id} = useParams()
  const [Alumni, setAlumni] = useState({})
  const [Loading, setLoading] = useState(true)

  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)



const handleSubmitCreate = async (e) => {
   e.preventDefault ()
   const data = {
    name:e.target.name.value,
    institution:e.target.institution.value,
    type:e.target.type.value,
    initDate:e.target.init.value,
    endDate:e.target.end.value,
    alumniId:id
   };

   const resp = create_postStudy(data);

   if(resp != null){
    toast.success("Creado con éxito.")
    handleClose()
   }else{
    toast.error("Ha ocurrido un error");
   }

}


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
      
      <Button onClick={ handleOpen }> Crear Estudio </Button>

          <Modal
            open={open}
            onClose={handleClose}
            >
            <Box className="absolute top-1/4 left-1/4 bg-slate-50 h-fit p-4  rounded-md ">
                <form onSubmit={handleSubmitCreate}>
                    {/* <Input type='textarea' placeholder={"Description"} className='m-4' name='description'/> */}
                    <Input  placeholder={"Nombre"} className='m-4' name='name'/>
                    <Input  placeholder={"Institucion"} className='m-4' name='institution' />
                    <Input  placeholder={"Tipo"} className='m-4' name='type' />
                    <Input type='date' placeholder={"Fecha de inicio"} className='m-4' name='init'  required={true}/>
                    <Input type='date' placeholder={"Fecha de cierre"} className='m-4' name='end'  required={true}/>
                    <Button className="m-4">Añadir estudio</Button>
                </form>
            </Box>
            </Modal>

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
