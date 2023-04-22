import React from 'react'

export const TextArea = ({className='', placeholder='', resize=false, name=''}) => {
  return (
    <div className='flex items-center justify-center'>
        <textarea id={name} name={name} className={`w-[260px] rounded-md 
        border-black border-opacity-40 xl:w-[328px] ${resize? 'resize-none': ''} ${className}`} placeholder={placeholder}   />
    </div>

    

  )
}
