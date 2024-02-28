"use client"
import React, { useState } from 'react'
import Sidebar from "../../Components/ProfileComponents/Sidebar"
import MainComponent from '@/Components/ProfileComponents/MainComponent'
import Notification from "../../public/Notification.png"
import Image from 'next/image'

const page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
 
  //   <div className="flex h-screen">
  //   <div className="w-1/5 text-white">
  //     <Sidebar />
  //   </div>
  //   <div className="w-4/5">
  //     <MainComponent />
  //   </div>
  // </div>

  <div className="lg:flex">
  {/* Mobile Hamburger Menu */}
  <div className="lg:hidden flex items-center">
    <button
      onClick={toggleSidebar}
      className="text-black p-3 focus:outline-none"
    >
      ☰
    </button>
    <div className="flex items-center justify-between">
      <div>
          <p className='user_name' style={{fontSize:12}}>Hello Emma!</p>
          <p className='qr_code' style={{fontSize:12}}>Let's Create Qr Codes</p>
          </div>
          <Image src={Notification} alt='' width={25} height={20} objectFit='contain' style={{marginLeft:100}} />
        </div>
  </div>

  {/* Sidebar (visible on larger screens) */}
  <div className={`w-4/5 lg:w-1/5 text-white ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className={`w-full ${isSidebarOpen ? 'hidden' : 'lg:w-4/5'}`}>
    <MainComponent />
  </div>
</div>
  )
}

export default page