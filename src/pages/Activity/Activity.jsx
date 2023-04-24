
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import {fetchalumniIdName} from '../../api/fetch_alumniIdName'
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { create_activity } from '../../api/create_activity';
import { fetch_activity } from '../../api/fetch_activity';
import { ACTIVITY_COLUMNS, OPTIONS } from '../../utils/constants';
import MUIDataTable from 'mui-datatables';
import { Box, Modal } from '@mui/material';
import { toast } from 'sonner';
import { SyncLoader } from 'react-spinners';

export const Activity = () => {
    const [alumni,setListAlumni] = useState([]);
    const [Loading, setLoading] = useState(true)
    const [selectedAlumni,setSelectedAlumni] = useState([]);
    const [activity,setActivity] = useState([]);
    const [ open, setOpen ] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    const handleSelectedAlumni = (e) => {
        setSelectedAlumni(e)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        
        const data = {
            alumni: selectedAlumni.map((alumni)=>alumni.value),
            initDate: e.target.fi.value,
            endDate: e.target.ff.value,  
            activityName: e.target.na.value,
            activityPlace: e.target.la.value,
            activityDescription: e.target.da.value,
        }
        const res = await create_activity(data)
        setLoading(true)
        handleClose()
        if(res.id){
            setActivity([...activity, res])
            toast.success('Actividad creada')
        }
        setLoading(false)

        
    }
    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetchalumniIdName(user.isAdminOf)
            setListAlumni(res)
            setLoading(false)
        } )()

        },[])

    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const res = await fetch_activity()
            setActivity(res)
            setLoading(false)
        } )()
    },[])

    return (
        Loading ? <div className='flex items-center justify-center w-full h-screen'>
    <SyncLoader color={"#123abc"} loading={Loading} size={24} />
  </div> :
    <div className = "w-screen h-screen">
    <Button onClick={handleOpen}>
        <span>Añadir Actividad</span>
    </Button>  
      <MUIDataTable
            className="w-full"
            title={"Lista de Actividades"}
            data={activity}
            columns={ACTIVITY_COLUMNS}
            options={OPTIONS}
            
        />
        <Modal
        open={open}
        onClose={handleClose}
        >
        <Box className="absolute top-1/4 left-1/4 bg-slate-50 h-fit p-4  rounded-md ">
        <form onSubmit={handleSubmit} className='w-96'>
            <Select
            required={true}
            onChange={handleSelectedAlumni}
            isMulti
            name="Egresados"
            options={ alumni }
            className="basic-multi-select w-full"
            classNamePrefix="select"
            />

                <Input placeholder={"Fecha de inicio"} className='m-2' name='fi' type="date" required={true}/>
                <Input placeholder={"Fecha de fin"} className='m-2' name='ff' type="date" required={true}/>
                <Input placeholder={"Nombre de actividad"} className='m-2' name='na' required={true}/>
                <Input placeholder={"Lugar de la actividad"} className='m-2' name='la' required={true}/>
                <Input placeholder={"Descripcion de la actividad"} className='m-2' name='da' required={true}/>

                <Button className='m-2'>
                    Añadir Actividad
                </Button>   
      </form>
        </Box>
        </Modal>
    </div>
  );
}

