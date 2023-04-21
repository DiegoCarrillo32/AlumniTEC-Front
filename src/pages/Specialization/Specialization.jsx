import { Box, Modal, Typography } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import React, { useEffect, useState } from 'react'
import { PortalWithState } from 'react-portal'
import { PacmanLoader } from 'react-spinners'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { addSpecialization, changeSpecActive, editSpecialization, fetchSpecialization } from '../../api/fetch_specialization'
import { OPTIONS } from '../../utils/constants'
import { toast } from 'sonner'
import { RxPencil1 } from 'react-icons/rx'
import { VscActivateBreakpoints } from 'react-icons/vsc'

export const Specialization = () => {
    const [ Loading, setLoading ] = useState(true)
    const [ open, setOpen ] = useState(false)
    const [edit, setEdit] = useState({})
    const [Mode, setMode] = useState('add')
    const [Data, setData] = useState([])
    const handleOpen = () => {
        setMode('add')
        setOpen(true)
    }
    const handleOpenEdit = (spec) => {
        
        setMode('edit')
        setEdit(spec)
        setOpen(true)
     
    }
    const handleClose = () => setOpen(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { nombre } = e.target
        const data = {
            name: nombre.value
        }
        const res = await addSpecialization(data)
        if(res.id){
            toast.success('Especializacion añadida')
            setData([...Data, res])
        }
        handleClose()
    }        
    const handleChangeActive = async (id) => {
        const res = await changeSpecActive(id.rowData[2])
        if(res.id){
            toast.success(`Especializacion ${!id.rowData[1] ? 'activada' : 'desactivada'}`)
            setLoading(true)
            const res = await fetchSpecialization()
            
            setData(res);
            setLoading(false)
        }
    }

    const handleEdit = async (spec, e) => {
        e.preventDefault()
        const data = {
            name: e.target.nombre.value,
            id: spec.rowData[2]
        }
        const res = await editSpecialization(data)
        handleClose()
        if(res.id){
            setLoading(true)
            const res = await fetchSpecialization()
            setData(res);
            toast.success('Especializacion editada')
            setLoading(false)
        }
    }
    

    useEffect(()=>{

        (async ()=>{
            setLoading(true)
            const res = await fetchSpecialization()
            setData(res);
            setLoading(false)
        })()        
    }, [])

    const SPEC_COLUMNS = [
        {
            name: "name",
            label: "Nombre",
            options: {
                filter: false,

            }
        },
        {
            name: "isActive",
            label: "Activo",
            options: {
                filter: false,
                display: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className='flex justify-center'>
                            {value ? <div className='bg-green-500 rounded-full w-4 h-4'></div> : <div className='bg-red-500 rounded-full w-4 h-4'></div>}
                        </div>
                    )
                }
            } 
        },
        {
            name: "id",
            label: "ID",
            options: {
                filter: false,
                display: false,
            }
        },
        {
            name: "",
            label: "Editar",
            options: {
                filter: false,
                display: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className='flex justify-around'>
                            <RxPencil1 className='cursor-pointer' onClick={(e)=>{
                                handleOpenEdit(tableMeta)
                            }} size={32}/>
                            <VscActivateBreakpoints className='cursor-pointer' onClick={()=>{
                                handleChangeActive(tableMeta)
                            }} size={32}/>
                        </div>
                        
                        
                    )
                }
            }
        },
        
    ]
    
  return (
    Loading ?
    <div className='flex items-center justify-center w-full h-screen'>
    <PacmanLoader color={"#123abc"} loading={Loading} size={24} />
  </div>
    :
     (
        <div className='w-full h-full'>
            <Modal
            open={open}
            onClose={handleClose}
            >
            <Box className="absolute top-1/4 left-1/4 bg-slate-50 h-48  rounded-md ">
                {
                    Mode === 'add' ?
                    <form onSubmit={handleSubmit}>
                        <Input placeholder={"Nombre"} className='m-2' name='nombre'/>
                        <Button>Añadir especializacion</Button>
                    </form>
                    :
                    <form onSubmit={(e)=>handleEdit(edit, e)}>
                        <Input placeholder={"Nombre"} className='m-2' name='nombre' defaultValue={edit.rowData[0]}/>
                        <Button>Editar especializacion</Button>
                    </form>
                }
            </Box>
            </Modal>
            <MUIDataTable
                className="w-full"
                title={"Lista de especializaciones"}
                data={Data}
                columns={SPEC_COLUMNS}
                options={OPTIONS}  
            />
            <Button className="m-5" onClick={handleOpen}> Añadir especialización </Button>
        </div>

        
    )
  )
}
