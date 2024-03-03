import Fifthcard from '@/components/Aboutuscomponets/Fifthcard'
import Firstcard from '@/components/Aboutuscomponets/Firstcard'
import Formcard from '@/components/Aboutuscomponets/Formcard'
import Fourthcard from '@/components/Aboutuscomponets/Fourthcard'
import Loading from '@/components/Aboutuscomponets/Loading'
import Secoundcard from '@/components/Aboutuscomponets/Secoundcard'
import ThirdCard from '@/components/Aboutuscomponets/ThirdCard'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col items-center w-11/12  mx-auto'>
    <Firstcard/>
    <Secoundcard/>
    <ThirdCard/>
    <Fourthcard/>
    <Fifthcard/>
    <Formcard/>

    </main>
  )
}

export default page