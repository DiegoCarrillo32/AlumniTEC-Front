import React from 'react'

export const Button = ({ children, className, onClick }) => {
  return (
    <>
    <button
      onClick={onClick}
      className={` h-[52px] w-[260px] rounded-[20px] bg-blue-600
      px-5 py-2 font-bold uppercase text-white duration-200
      ease-linear hover:bg-blue-700 xl:w-[328px] ${className}`}
    >
      {children}
    </button>
  </>
  )
}


