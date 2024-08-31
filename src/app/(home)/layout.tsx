import React from 'react'
import SideBar from '@/components/layout/SideBar'

export default function layout({children}) {
  return (
    <div>
      <div className='  flex  '> 

        <div>
        <SideBar/>
        </div>
        <div className='w-full'>
        {children}
          
        </div>
      </div>


    </div>
  )
}
