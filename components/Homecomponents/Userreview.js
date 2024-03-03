'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import {Avatar} from "@nextui-org/react";
import Quote from '../../public/Quote.png'
import Image from "next/image";




const Userreview = () => {
    const [api, setApi] = useState(null); 
  const [current, setCurrent] = useState(0); 
  const [count, setCount] = useState(0); 
  const [middleIndex, setMiddleIndex] = useState(0);




  useEffect(() => {
    if (!api) return;

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    setMiddleIndex(Math.floor(totalItems / 2));

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16">
      <div className="">
        <h6 className="font-bold text-3xl mt-8">
        Our <span className="text-buttoncolor">satisfied</span> users! </h6>
      </div>



      <div className="flex justify-center items-center w-11/12  lg:ml-0  mt-12 ">
      <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className=" w-full  py-4   "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2   h-auto">
            <div >
              <Card className='rounded-lg ' >
                <CardContent className="flex flex-col gap-2  items-center justify-center p-6">
                <Avatar size="lg" isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                     <div className="flex justify-center items-center gap-2 text-2xl">
                       <FaStar className="text-[#FFB300]"/>
                       <FaStar className="text-[#FFB300]"/>
                       <FaStar className="text-[#FFB300]"/>
                       <FaStar className="text-[#FFB300]"/>
                       <FaStar className="text-[#FFB300]"/>
                       
                     </div>
                     <p className="text-center">“Very easy to navigate and simple procedure to edit and share the QR code.”</p>
                     <h6 className="text-md font-bold mt-2">Arun</h6>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-[-15px] w-full flex justify-center items-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              current === index + 1 ? 'bg-buttoncolor' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="hidden md:block">

      <CarouselPrevious className='bg-buttoncolor text-white'/>
      <CarouselNext className='bg-buttoncolor text-white  '/>
      </div>
    </Carousel>
      </div>
    </div>
  );
};

export default Userreview;
