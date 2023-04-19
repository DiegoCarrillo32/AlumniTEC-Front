import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { validateToken } from '../../api/token_validate'
export const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    if(localStorage.getItem('token')){
        (async ()=>{
            const res = await validateToken()
            if(res.error){
                toast.error('Token expirado, por favor inicie sesión nuevamente')
                navigate('/')
            }
        })()
        return children
    }else {
        toast.error('Usuario no autenticado')
        navigate('/')
    }
}
