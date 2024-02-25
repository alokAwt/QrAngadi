import Image from 'next/image'
import React from 'react'
import Icon1 from '../../public/Aboutus/Location.png'
import Icon2 from '../../public/Aboutus/Hand.png'

const Fifthcard = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 mt-16'>
        <div className='flex md:flex-row-reverse mt-8 justify-center items-center flex-col md:gap-0 gap-8'>
            <div className='border-1.5 border-gray-300 rounded-md p-2 flex justify-center items-center w-full'>
                <Image className='rounded-md h-40 w-72 object-contain' src={Icon1}/>
            </div>
            <div className='flex flex-col justify-center items-start gap-8'>
            <h6 className="leading-5 font-bold text-2xl ">
                How we got here
                </h6>
                <p className='font-medium text-sm leading-5'>Our journey started within the dynamic ecosystem of Angadi World Technologies Pvt Ltd. Through innovation, dedication, and a commitment to excellence, we've evolved QR Angadi into a platform that reflects our core values: simplicity, functionality, and security.</p>
            </div>
        </div>
        <div className='flex md:flex-row mt-8 justify-center items-center flex-col md:gap-4 gap-8'>
        <div className='border-1.5 border-gray-300 rounded-md p-2 flex justify-center items-center w-full '>
            <Image className='rounded-md h-40 w-72 object-contain' src={Icon2}/></div>

            <div className='flex flex-col justify-center items-start gap-8 '>
            <h6 className="leading-5 font-bold text-2xl ">
                Join Us on the QR Journey</h6>
                <p className='font-medium text-sm leading-5'>Whether you're a seasoned marketer, a compliance officer, or an individual seeking efficient QR solutions, QR Angadi, a product of Angadi World Technologies Pvt Ltd, welcomes you to join us on this exciting journey. Explore the possibilities, streamline your processes, and discover the convenience of QR technology with us</p>
            </div> 
        </div>
    </div>
  )
}

export default Fifthcard