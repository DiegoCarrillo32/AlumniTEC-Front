import React, { useState } from 'react'
import { RxDashboard, RxPerson } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    return (
        isOpen ? (
            <section className='h-screen w-64 bg-indigo-400 drop-shadow-sm transition-all'>
            <div className='flex flex-col justify-center items-end  h-20 mr-5'>
                <div className='flex items-center justify-center h-12 w-12 rounded-full bg-white cursor-pointer' onClick={()=>{
                    setIsOpen(!isOpen)
                }}>
                    <svg className='h-6 w-6 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                    </svg>
                </div>
            </div>

            <nav className='flex flex-col justify-between flex-1 px-2 py-4'>
                <ul>
                    <li  onClick={()=>{
                            navigate('/dashboard')
                        }} className='flex items-center py-2 px-4 rounded-lg bg-indigo-500 mb-5 cursor-pointer'>
                        <RxDashboard size={24} color={"white" }/>
                        <span className='ml-4 text-white font-medium'>Dashboard</span>
                    </li>
                    <li  onClick={()=>{
                            navigate('/dashboard/alumni')
                        }} className='flex items-center py-2 px-4 rounded-lg bg-indigo-500 cursor-pointer'>
                        <RxPerson size={24} color={"white" }/>
                        <span className='ml-4 text-white font-medium'>Egresados</span>
                    </li>
                    

                </ul>
                </nav>

        </section>
        ) : (
            <section className='h-screen w-20 bg-indigo-400 drop-shadow-sm transition-all'>
                <div className='flex flex-col justify-center items-center  h-20'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-full bg-white cursor-pointer' onClick={()=>{
                        setIsOpen(!isOpen)
                    }}>
                        <svg className='h-6 w-6 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                        </svg>
                    </div>
                </div>

                <nav className='flex flex-col justify-between flex-1 px-2 py-4'>
                    <ul>
                        <li onClick={()=>{
                            navigate('/dashboard')
                        }} className='flex items-center justify-center py-2 px-4 rounded-lg bg-indigo-500 mb-5 cursor-pointer'>
                            <RxDashboard size={24} color={"white" }/>
                        </li>
                        <li onClick={()=>{
                            navigate('/dashboard/alumni')
                        }} className='flex items-center justify-center py-2 px-4 rounded-lg bg-indigo-500 mb-5 cursor-pointer'>
                            <RxPerson size={24} color={"white" }/>
                        </li>
                    
                    </ul>
                </nav>
            </section>   
        )
    )
}