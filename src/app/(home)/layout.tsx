import React from 'react'
import SideBar from '@/components/layout/SideBar'

export default function layout({children}: Readonly<{
  children: React.ReactNode;
}>) {
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
