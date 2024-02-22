import Image from "next/image";

function GamificationAddOns() {
  return (
    <div className="mt-5 mb-20">
      <div className="flex justify-center w-10/12 mx-auto flex-wrap">
        <div className="sm:w-full md:w-1/2 flex justify-center items-center ">
          <Image
            src={"/gamification/main.png"}
            width={500}
            height={500}
            alt="Main"
          />
        </div>
        <div className="md:w-1/2 sm:w-full max-sm:text-center md:pl-10 ">
          <h2 className="text-4xl font-bold leading-13">
            Gamification Add-ons
          </h2>
          <p className="mt-4 text-lg font-semibold leading-7 text-justify">
            Enhance your marketing strategy with our gamification add-ons.
            Choose the ones that best suit your campaign objectives.
          </p>
          <div className="flex justify-between mt-4 gap-10 max-sm:gap-3">
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Image
                src={"/gamification/one.png"}
                width={200}
                height={200}
                alt="One"
              />
              <p className="mt-2 text-md font-bold leading-6">Spin & Win</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Image
                src={"/gamification/two.png"}
                width={200}
                height={200}
                alt="Two"
              />
              <p className="mt-2 text-md font-bold leading-6">Scratch Cards</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Image
                src={"/gamification/three.png"}
                width={200}
                height={200}
                alt="Three"
              />
              <p className="mt-2 text-md font-bold leading-6">Lucky Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamificationAddOns;
