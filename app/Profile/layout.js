import ProfileNav from '@/components/ProfileComponents/ProfileNav'
import Sidebar from '@/components/ProfileComponents/Sidebar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <main className='flex sticky top-0'>
    <div className="">
      <Sidebar/>
    </div>
    <div className="flex flex-col w-full">
      <ProfileNav/>
      {children}
    </div>
  </main>
  )
}

export default layout