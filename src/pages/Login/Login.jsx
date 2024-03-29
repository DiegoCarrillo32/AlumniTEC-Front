import React from 'react'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
 import teclogo from '../../assets/teclogo.svg'
import { useNavigate } from 'react-router-dom'
import {Toaster,toast} from 'sonner'
import {login_validate} from '../../api/login_validate'
export const Login = () => {
  const navigation = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.promise(login_validate(event.target.carnet.value,event.target.password.value),{
      loading: "Revisando información",
      success: (data)=>{
        if(data.access_token){
          localStorage.setItem('token',data.access_token)
          localStorage.setItem('user',JSON.stringify(data))
          navigation('/dashboard')
          return "Se ha iniciado sesión"
        }else{
          return "Error, contraseña o DNI incorrecto"
        }
      },
      error: "Error, contacte un administrador"
    })
  
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-tecbg bg-no-repeat ">
        <section className='w-[30rem] h-[25rem] bg-white flex flex-col justify-center items-center rounded-md drop-shadow-2xl'>
            <img src={teclogo} className='w-[70%] mb-5' />
            <form onSubmit={handleSubmit}>
              <Input placeholder={"Carné"} className='m-2' name='carnet'/>
              <Input type="password" placeholder={"Contraseña"} className='m-2 ' name= 'password'/>
              <Button className='m-2'>
                  Iniciar sesión
              </Button>   
            </form>
        </section>
    </div>
        
  )
}
