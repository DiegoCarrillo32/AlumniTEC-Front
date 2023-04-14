import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({title, icon, path}) => {
  return (
    <Link to={path} className='flex flex-col w-60 h-60 m-2 rounded-sm items-center justify-center bg-slate-200 hover:w-64 hover:h-64 transition-all '>
        {icon}
        <h2>{title} </h2>
    </Link>
  )
}
