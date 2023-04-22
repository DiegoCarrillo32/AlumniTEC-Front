import React, { useEffect, useState } from 'react'
import { ImageUploader } from '../../components/ImageUploader/ImageUploader'
import { Button } from '../../components/Button/Button'
import { Box, Modal } from '@mui/material'
import { Input } from '../../components/Input/Input'
import { SyncLoader } from 'react-spinners'
import { createJobOffer, getJobOffers } from '../../api/fetch_joboffer'
import { TextArea } from '../../components/TextArea/TextArea'

export const JobOffer = () => {
    const [ Loading, setLoading ] = useState(true)
    const [ open, setOpen ] = useState(false)
    const [ jobOffers, setJobOffers ] = useState([])
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const file = e.target.image.files[0]
        const reader = new FileReader()
        reader.onload = async (event) => {
            const binaryData = event.target.result;
            
            const base64_data = binaryData.replace(/^data:image\/(png|jpg);base64,/, "");
            const data = {
                description: e.target.description.value,
                initDate: e.target.init.value,
                endDate: e.target.end.value,
                image: base64_data
            }
            console.log(data);
            const res = await createJobOffer(data)
            console.log(res);
        };
        reader.readAsBinaryString(file);
        
    }  

    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const res = await getJobOffers()
            console.log(res);
            setJobOffers(res)
            setLoading(false)

        })()
    }, [])
    
  return (
    Loading ? <div className='flex items-center justify-center w-full h-screen'>
    <SyncLoader color={"#123abc"} loading={Loading} size={24} />
  </div> :
    <div>
        <Button onClick={handleOpen}>
            <span>Añadir oferta de trabajo</span>
        </Button>

        <Modal
            open={open}
            onClose={handleClose}
            >
            <Box className="absolute top-1/4 left-1/4 bg-slate-50 h-fit p-4  rounded-md ">
                <form onSubmit={handleSubmit}>
                    <TextArea name='description' placeholder='Descripcion de la oferta de trabajo' resize={true}/>
                    {/* <Input type='textarea' placeholder={"Description"} className='m-4' name='description'/> */}
                    <Input type='date' placeholder={"Fecha de inicio"} className='m-4' name='init'/>
                    <Input type='date' placeholder={"Fecha de cierre"} className='m-4' name='end'/>
                    <Input className='m-4' type="file" name='image' />
                    {/* <ImageUploader/> */}
                    <Button className="m-4">Añadir especializacion</Button>
                </form>
            </Box>
            </Modal>

            {
                jobOffers.map((jobOffer, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center w-full h-screen'>
                            <h1>{jobOffer.description}</h1>
                            <h1>{jobOffer.initDate}</h1>
                            <h1>{jobOffer.endDate}</h1>
                            {/* const url = `data:image/jpeg;base64,${data.imageData}`; */}
                            {
                                // transform the base64 image into a displayable image
                                
                            }
                            <img src={

                                `data:image/jpeg;base64,${btoa(jobOffer.image)}`
                            } alt="jobOffer" />
                        </div>
                    )
                })
            }


    </div>


    
    // <ImageUploader/>
  )
}
