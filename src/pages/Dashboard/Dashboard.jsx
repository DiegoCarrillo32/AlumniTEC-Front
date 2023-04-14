import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex' >
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
