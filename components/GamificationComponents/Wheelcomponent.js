import WheelComponent from "react-wheel-of-prizes";
import React, { useState, useEffect } from "react";

export default function Spinwheel({ prizeList }) {
  const [segments, setSegments] = useState(prizeList.map((prize) => prize.Name));
 
useEffect(() => {
  if (prizeList && prizeList.length > 0) {
    setSegments(prizeList.map((prize) => prize.Name));
  }
}, [prizeList])

React.useEffect(() => {
  const segments = prizeList.map((prize) => prize.Name);
}, [prizeList]);

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
    <div className="  justify-center items-center w-96 hidden  md:flex ">
      <div className="md:absolute top-44 right-36  md:w-96 md:h-96 w-40 h-40">
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
