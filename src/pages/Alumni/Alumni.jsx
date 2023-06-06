import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import PacmanLoader from 'react-spinners/SyncLoader'

import { fetchAlumni } from '../../api/fetch_alumni'
import { COLUMNS, OPTIONS } from '../../utils/constants';

export const Alumni = () => {
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await fetchAlumni(0, 10, user.isAdminOf)
            setData(res);
            setLoading(false)
        })()
    }, [])
  return (


    Loading ?
    <div className='flex items-center justify-center w-full h-screen'>
    <PacmanLoader color={"#123abc"} loading={Loading} size={24} />
  </div>
    :
     (
        <div className='w-full h-full'>
          <MUIDataTable
              className=""
              title={"Lista de egresados"}
              data={Data}
              columns={COLUMNS}
              options={OPTIONS}
              
          />
        </div>
        
    )
  )
}
