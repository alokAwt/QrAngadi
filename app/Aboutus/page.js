import Fifthcard from '@/Components/Aboutuscomponets/Fifthcard'
import Firstcard from '@/Components/Aboutuscomponets/Firstcard'
import Formcard from '@/Components/Aboutuscomponets/Formcard'
import Fourthcard from '@/Components/Aboutuscomponets/Fourthcard'
import Loading from '@/Components/Aboutuscomponets/Loading'
import Secoundcard from '@/Components/Aboutuscomponets/Secoundcard'
import ThirdCard from '@/Components/Aboutuscomponets/ThirdCard'
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