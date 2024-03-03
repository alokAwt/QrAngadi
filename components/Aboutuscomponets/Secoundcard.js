import React from 'react'
import { Pacifico } from "next/font/google";
import Image from 'next/image';
import Group1 from '../../public/Aboutus/group1.png'
import Group2 from '../../public/Aboutus/group-2.png'
import Quote from '../../public/Quote.png'


const font = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
  });

const Secoundcard = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-12'>
        <div>
            <Image className=' md:h-96 h-40' src={Group1}/>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-24 w-full'>
            <div className='flex flex-col justify-center mx-auto items-start gap-4 py-8'>
                <h6 className={`${font.className} text-3xl tracking-tight`}>Providing value to users will <br></br>always be our priority <span><Image className='w-6 h-6 inline-block' src={Quote}/></span></h6>
                <p className='text-md text-gray-500 mt-4'>-Team QR Angadi</p>
            </div>
            <div className='flex justify-end'>
                <Image className=' md:h-64' src={Group2} />
            </div>
        </div>
    </div>
  )
}

export default Secoundcard