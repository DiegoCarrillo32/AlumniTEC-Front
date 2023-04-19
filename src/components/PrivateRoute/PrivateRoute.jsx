import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { validateToken } from '../../api/token_validate'
export const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          toast.error('Usuario no autenticado')
          navigate('/')
        }
    }, [])
    useEffect(()=>{        
        (async ()=>{
            const res = await validateToken()
            if(res.error){
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                toast.error('Token expirado, por favor inicie sesión nuevamente')
                navigate('/')
            } else {
                localStorage.setItem('token',res.access_token)
                localStorage.setItem('user',JSON.stringify(res))
            }
        })()
    }, [location.pathname])
    return children
}
