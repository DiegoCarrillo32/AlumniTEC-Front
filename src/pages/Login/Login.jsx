import React from 'react'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
 import teclogo from '../../assets/teclogo.svg'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigation = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit', event);
    navigation('/dashboard')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-tecbg bg-no-repeat ">
        <section className='w-[30rem] h-[25rem] bg-white flex flex-col justify-center items-center rounded-md drop-shadow-2xl'>
            <img src={teclogo} className='w-[70%] mb-5' />
            <form onSubmit={handleSubmit}>
              <Input placeholder={"Carné"} className='m-2' />
              <Input type="password" placeholder={"Contraseña"} className='m-2 '/>
              <Button className='m-2'>
                  Iniciar sesión
              </Button>   
            </form>
        </section>
    </div>
        
  )
}
