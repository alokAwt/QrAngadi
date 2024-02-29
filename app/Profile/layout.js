import ProfileNav from '@/Components/ProfileComponents/ProfileNav'
import Sidebar from '@/Components/ProfileComponents/Sidebar'
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