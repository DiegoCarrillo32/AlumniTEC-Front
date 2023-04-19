import React, { useEffect } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import {toast} from 'sonner'
export const Dashboard = () => {
  const navigation = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      toast.error('Usuario no autenticado')
      navigation('/')
    }
  
  }, [])

  return (
    <div className='flex' >
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
