import { Box, Modal } from '@mui/material'
import React from 'react'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { edit_postStudy } from '../../api/edit_postStudy'
import { toast } from 'sonner'
import { change_active_postStudy } from '../../api/activty_postStudy'

const PostStudy = ({act,alumniId, SetReload}) => {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    const handleActive = async (e) => {
      e.preventDefault();
      const res = await change_active_postStudy(act.id)
      if(res != null){

            SetReload(prev => !prev);
            toast.success('Estudios posterior cambiado con exito')
      }
      else {
        toast.error('Error al editar estudios posterior')
      }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            institution: e.target.institution.value,
            initDate: e.target.init.value,
            endDate: e.target.end.value,
            //id: alumniId,
            id: act.id,

        };
        const res = await edit_postStudy(data)
        if(res != null){
            setOpen(false)
            SetReload(prev => !prev)
            toast.success('Estudios posterior editado con exito')
        }
        else{
            toast.error('Error al editar estudios posterior')
        }
    }
  return (
    <>
    <Modal
            open={open}
            onClose={handleClose}
            >
            <Box className="absolute top-1/4 left-1/4 bg-slate-50 h-fit p-4  rounded-md ">
                <form onSubmit={handleSubmit}>
                    {/* <Input type='textarea' placeholder={"Description"} className='m-4' name='description'/> */}
                    <Input  placeholder={"Nombre"} className='m-4' name='name' defaultValue={act.name}/>
                    <Input  placeholder={"Institucion"} className='m-4' name='institution' defaultValue={act.institution}/>
                    <Input  placeholder={"Tipo"} className='m-4' name='type' defaultValue={act.type}/>
                    <Input type='date' placeholder={"Fecha de inicio"} className='m-4' name='init' defaultValue={act.initDate} required={true}/>
                    <Input type='date' placeholder={"Fecha de cierre"} className='m-4' name='end' defaultValue={act.endDate} required={true}/>
                    <Button className="m-4">Editar especializacion</Button>
                </form>
            </Box>
            </Modal>
            <div className='grid grid-cols-2 rounded-md shadow-md p-5 m-2 bg-slate-50 hover:bg-slate-100'>
        <div className='flex flex-col'>
        <button className= 'text-blue-500 hover:text-blue-700' onClick={handleOpen}>Editar</button>
        <button className= 'text-blue-500 hover:text-blue-700' onClick={handleActive}>{act.isActive? 'Deshabilitar': 'Habilitar'}</button>

        <span>
                Nombre {act.name}
            </span>
            <span>
                Lugar {act.institution}
            </span>
        </div>

        <div className='flex flex-col'>
            <span>
            Fecha de inicio {act.initDate}
            </span>
            <span>
               Fecha de fin {act.endDate}
            </span>
        </div>
    </div>
    </>
  )
}

export default PostStudy