import WheelComponent from "react-wheel-of-prizes";

export default function Spinwheel() {
  const segments = [
    "10% off",
   
  ];
  const segColors = [
    "#FC4851",
    "#FFBD54",
    "#90C2F5",
    "#FFBD54",
    "#90C2F5",
    "#FC4851",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className=" flex justify-center items-center w-96 ">
      <div className="absolute top-44 right-36  w-96 h-96">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="Spin Wheel"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#FF7143"
          contrastColor="white"
          buttonText="Start"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Poppins"
        />
      </div>
    </div>
  );
}
