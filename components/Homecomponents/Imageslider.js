"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Slider from "../../public/Slider2.png";
import Slider1 from "../../public/Slider1.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Animateqr from "../Homecomponents/Animateqr";  //edited
import Groupimage from "../Homecomponents/Groupimage";
import QRsticker from "..//Homecomponents/QRsticker";
import slide3 from "../../public/slide/slide3.png";
import slide4 from "../../public/slide/slide4.png";
import slide5 from "../../public/slide/Lottery.png";
import { useRouter } from "next/navigation";

function Imageslider() {
  const router = useRouter();
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slidesData = [
    {
      image: Slider,
      title: `Empower Your QR Experience to Perfection with- QR Angadi`,
      description:
        "Elevate Your Information Sharing Game with QR Angadi - The Best in User-Friendly QR Code Generation.",
      component: <Animateqr />,
      Buttontext1: { text: "Create QR Code", to: "/QRcodesolution" },
      Buttontext2: { text: "My Dashboard", to: "/Profile" },
      secoundimage: "",
    },

    {
      image: Slider1,
      title: `Revamp Your Marketing Assets!`,
      description:
        "Create sleek QR codes that blend seamlessly with your brand. Boost engagement and amplify your brand presence effortlessly.",
      component: <QRsticker />,
      Buttontext1: { text: "Create QR Code", to: "/QRcodesolution" },
      Buttontext2: { text: "My Dashboard", to: "/Profile" },
      secoundimage: "",
    },
    {
      image: Slider1,
      title: "Effortless Compliance Management!",
      description:
        "QR Angadi takes QR code basics to the next level. Simplify compliance with our comprehensive solution. Easily manage and track regulatory requirements for your business.",
      component: "",
      Buttontext1: { text: "Create QR Code", to: "/QRcodesolution" },
      Buttontext2: { text: "My Dashboard", to: "/Profile" },
      secoundimage: slide3,
    },
    {
      image: Slider1,
      title: "Track your Progress!",
      description:
        "QR Angadi enables you to monitor various metrics including click counts, views, and popular QR for your codes.",
      component: <Groupimage />,
      Buttontext1: { text: "Create QR Code", to: "/QRcodesolution" },
      Buttontext2: { text: "My Dashboard", to: "/Profile" },
      secoundimage: "",
    },
    {
      image: Slider1,
      title: "Secure. Customize. Simplify.",
      description:
        "Keep your data safe, tailor your codes, and simplify your process with QR Angadi. It's your secure, customizable, and efficient QR solution.",
      component: "",
      Buttontext1: { text: "Create QR Code", to: "/QRcodesolution" },
      Buttontext2: { text: "My Dashboard", to: "/Profile" },
      secoundimage: slide4,
    },
    {
      image: Slider1,
      title: "Be a lucky winner with QR Angadi!",
      description:
        "Get customers engaged with fun games like Spin and Win, Scratch Cards, and Lucky Draw. Upgrade your marketing with QR Angadi's gamification!",
      component: "",
      Buttontext1: "Try Now",
      Buttontext2: "",
      secoundimage: slide5,
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="flex  justify-center items-center w-full h-[90vh] mx-auto"
    >
      <CarouselContent style={{width:1200}}  className="mx-auto h-[90hvh] w-full">
        {slidesData.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full justify-center items-center mx-auto">
              <div className="w-full justify-center items-center mx-auto">
                <div style={{width:'100%'}} className="flex items-center justify-center w-full ">
                  <Image
                    loading="lazy"
                    width={1300}
                    className="md:h-[90vh] sm:h-{90vh]  h-[90vh] lg:h-[90vh]   object-fill "
                    src={slide.image}
                  />
                  <div className="absolute  font-semibold w-[85%] flex justify-between items-center flex-col-reverse md:flex-row lg:flex-row">
                    <div className="gap-6 flex flex-col justify-start md:mt-0 mt-4">
                      <h6 className="md:text-3xl lg:text-3xl text-sm font-bold md:w-[24rem] lg:w-[24rem] w-[20rem] leading-9">
                        {slide.title}
                      </h6>
                      <p className="md:w-[30rem] lg:w-[30rem] text-md font-normal text-gray-600 leading-6">
                        {slide.description}
                      </p>
                      <div className="flex  items-center gap-2 mt-2">
                        {slide.Buttontext1.text && (
                          <Button
                            variant="bordered"
                            className="rounded-sm w-auto border-buttoncolor text-buttoncolor font-medium"
                            onClick={() => router.push(slide.Buttontext1.to)}
                          >
                            {slide.Buttontext1.text}
                          </Button>
                        )}
                        {slide.Buttontext2.text && (
                          <Button
                            className="rounded-sm w-auto bg-buttoncolor text-white font-medium"
                            onClick={() => router.push(slide.Buttontext2.to)}
                          >
                            {slide.Buttontext2.text}
                          </Button>
                        )}
                      </div>
                    </div>
                    <div>
                      {slide.component}
                      {slide.secoundimage && (
                        <Image
                          className="md:w-96 md:h-96 w-80 h-80"
                          src={slide.secoundimage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-2 w-full flex justify-center items-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              current === index + 1 ? "bg-buttoncolor" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <CarouselPrevious className="hidden absolute md:flex justify-center items-center left-4 bg-[rgb(0,0,0,0.4)] text-white" />
      <CarouselNext className="hidden absolute md:flex justify-center items-center right-4 bg-[rgb(0,0,0,0.4)] text-white" />
    </Carousel>
  );
}

export default Imageslider;
