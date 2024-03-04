import { Divider } from '@nextui-org/react'
import React from 'react'

const BussinessStat = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16 mb-4">
    <div className="">
      <h6 className="font-bold text-3xl mt-8 text-center">
      Grow your business with <span className='text-buttoncolor'>QR Angadi!</span>
      </h6>
    </div>


    <div className='flex justify-evenly items-center gap-24 mt-12  mx-auto w-11/12 flex-col md:flex-row'>
        <div className='w-72 flex justify-start  items-center flex-col gap-2  '>
            <span className='text-buttoncolor font-medium'>250+</span>
            <p className='font-semibold text-lg'>Companies</p>
        </div>
        <Divider orientation='vertical' className='h-24 hidden md:block'/>
        <div className='w-72 flex justify-start  items-center flex-col gap-2 '>
            <span className='text-buttoncolor font-medium'>3593+</span>
            <p className='font-semibold text-lg'>Profiles</p>
        </div>
        <Divider orientation='vertical' className='h-24 hidden md:block'/>
        <div className='w-72 flex justify-start  items-center flex-col gap-2'>
            <span className='text-buttoncolor font-medium'>1M+</span>
            <p className=' text-lg font-semibold'>QR Code generated</p>
        </div>
       
    </div>
    </div>
  )
}

export default BussinessStat