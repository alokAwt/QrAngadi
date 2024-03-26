"use client"
import Image from "next/image";
import React from "react";
import Gamification1 from "../../public/Gamification.png";
import Spinandwin from '../../public/Spinandwin.png'
import Scratchandwin from '../../public/Scratchandwin.png'
import Luckywin from '../../public/Luckywin.png'
import {useRouter} from 'next/navigation'

const Gamification = () => {
  const router =useRouter()

  return (
    <div className="w-full bg-[#FFF4F1] h-auto mt-2 md:mt-12 flex justify-center items-center p-2">
      <div className="flex md:flex-row flex-col justify-center mx-auto items-center py-12">
        <div className="flex justify-start items-start md:mr-24 mr-0">
          <Image className="md:w-[32rem] w-[20rem] md:h-80" src={Gamification1} alt="gamification" />
        </div>

        <div className="gap-4 flex flex-col md:justify-start items-center md:mt-0 mt-4 p-2">
          <h6 className="md:text-3xl font-bold md:w-[24rem] w-[20rem] leading-9 text-xl">
          Gamification Add-ons
          </h6>
          <p className="md:w-[24rem] w-[20rem] text-md font-medium text-gray-600 leading-6">
          Enhance your marketing strategy with our gamification add-ons. Choose the ones that best suit your campaign objectives.
          </p>
          <div className="flex justify-center items-center ">
            <div className="flex justify-between gap-8 items-center">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image onClick={()=>router.push("/gamification/spin-wheel")} className="md:h-24  md:w-24 h-20 w-20 hover:ring-4 hover:ring-buttonopacitycolor rounded-full cursor-pointer" src={Spinandwin} alt="sppinerimage"/>
                    <span className="text-sm font-medium">Spin & Win</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image onClick={()=>router.push('/gamification/scratch-card')} className="md:h-24  md:w-24 h-20 w-20 hover:ring-4 hover:ring-buttonopacitycolor rounded-full cursor-pointer" src={Scratchandwin} alt="scratchiamge"/>
                    <span className="text-sm font-medium">Scratch Cards</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <Image onClick={()=>router.push('/gamification/slot-machine')} className="md:h-24  md:w-24 h-20 w-20 hover:ring-4 hover:ring-buttonopacitycolor rounded-full cursor-pointer" src={Luckywin} alt="luckywin"/>
                    <span className="text-sm font-medium">Lucky Win</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamification;
