import React from 'react'
import Group1 from '../../public/slide/Group1.png'
import Group2 from '../../public/slide/Group2.png'
import Group3 from '../../public/slide/Group3.png'
import Image from 'next/image'

const Groupimage = () => {
  return (
    <div className='w-full flex flex-col items-center p-2'>
        <div className='flex justify-center items-center gap-2 ml-3 '>
            <Image className='md:w-64 md:h-40' src={Group1}/>
            <Image className='md:w-64 md:h-44 mt-3' src={Group2}/>
        </div>
        <div className='md:w-11/12 w-full'>
        <Image className='' src={Group3}/>
        </div>
    </div>
  )
}

export default Groupimage