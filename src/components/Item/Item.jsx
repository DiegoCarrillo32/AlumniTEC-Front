import React from 'react'

export const Item = ({act}) => {
  return (
    <div className='grid grid-cols-2 rounded-md shadow-md p-5 m-2 bg-slate-50 hover:bg-slate-100'>
        <div className='flex flex-col'>
            <span>
                Actividad {act.activityName}
            </span>
            <span>
            Lugar {act.activityPlace}
            </span>
        </div>

        <div className='flex flex-col'>
            <span>
            Fecha de inicio {act.initDate}
            </span>
            <span>
               Fecha de fin {act.endDate}
            </span>
        </div>
    </div>
  )
}
