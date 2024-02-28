import React from 'react'
import "./Sidebar.css"
import Image from 'next/image'
import QR from "../../public/My_Qr.png"
import Create from "../../public/create.png"
import Bulk from "../../public/bulk.png"
import Upgrade from "../../public/upgrade.png"
import Settings from "../../public/settings.png"
import Help from "../../public/help.png"
import Logout from "../../public/logout.png"


export default function 
() {
  return (
    <div className="sidebar">
        <div className="logo">
        <Image src="/QR_Angadi_logo.png" alt="" width={200} height={136} />
        </div>
        <div className="links">
            <div className="link">
                 <Image src={QR} alt="" width={20} height={13} />
                <span className='text'>My Qr Codes</span>
            </div>
            <div className="link">
                 <Image src={Create} alt="" width={20} height={13} />
                <span className='text'>Create Qr Codes</span>
            </div>
            <div className="link">
                 <Image src={Bulk} alt="" width={20} height={13} />
                <span className='text'>Bulk Operations</span>
            </div>
            <div className="link">
                 <Image src={Upgrade} alt="" width={20} height={13} />
                <span className='text'>Upgrade Plan</span>
            </div>
            <div className="link">
                 <Image src={Settings} alt="" width={20} height={13} />
                <span className='text'>Settings</span>
            </div>
        </div>
        <div className='logout'>
        <div className="link">
                 <Image src={Help} alt="" width={20} height={13} />
                <span className='text'>Help & Support</span>
            </div>
            <div className="link">
                 <Image src={Logout} alt="" width={20} height={13} />
                <span className='text'>Logout</span>
            </div>
        </div>
    </div>
  )
}

