import { Divider } from '@nextui-org/react'
import React from 'react'

const ThirdCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-0 items-center py-12 mx-auto h-auto w-full mt-12'>
        <div className='flex flex-col gap-4 justify-start items-start '>
            <h6 className='md:text-3xl text-xl leading-5 text-black font-bold'>Who are <span className='text-buttoncolor'>we?</span></h6>
            <p className=' text-lg md:w-[24rem] font-medium leading-45 tracking-tighter text-justify'>QR Angadi is a flagship product of Angadi World Technologies Pvt Ltd, a company founded with a commitment to innovation and excellence. Our team of dedicated professionals is driven to simplify and enhance the QR code experience for users across various industries.</p>
        </div>
        <div className=' '>
        <Divider  className='text-black bg-black h-60 hidden md:block' orientation='vertical'/>
        </div>
        <div className='flex flex-col gap-4 justify-start items-start '>
            <h6 className='text-3xl leading-5 text-black font-bold'>Our <span className='text-buttoncolor'>Vision</span></h6>
            <p className=' text-lg md:w-[24rem] font-medium leading-45 tracking-tighter text-justify'>
            Angadi shares the overarching vision of the parent company – to create a world where QR codes seamlessly connect the physical and digital realms, streamlining processes, and enhancing user experiences. With QR Angadi, we aim to be at the forefront, offering a platform that combines simplicity, versatility, and security.            </p>
        </div>
    </div>
  )
}

export default ThirdCard