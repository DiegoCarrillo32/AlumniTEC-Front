import React from 'react'
import { Card } from '../../components/Card/Card'

import { RxDashboard, RxPerson, RxPencil1 } from 'react-icons/rx'

export const Home = () => {
    const Items = [
        {
            title: 'Egresados',
            icon: <RxPerson size={30}/>,
            path: '/dashboard/alumni'
        },
        {
            title: 'Especializaciones',
            icon: <RxPencil1 size={30}/>,
            path: '/dashboard/specialization'
        },
        
    ]
  return (
    <div className='flex items-center justify-center  flex-wrap h-screen overflow-y-auto'>
        
            {
                Items.map((item)=>(
                    <Card icon={item.icon} path={item.path} title={item.title} key={item.path}/>
                ))
            }
    </div>
  )
}
