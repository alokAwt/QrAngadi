"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Jackpot from "../../public/gamification/Jackpot.png";

{
  /* <ScratchCard
width={500}
height={500}
image="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
brushSize={60}
/> */
}

const ScratchCardgame = () => {
  const [width, Setwidth] = useState(500);
  const [height, Setheight] = useState(500);
  const [brushSize, SetbrushSize] = useState(60);
  const [image, Setimage] = useState(
    "https://th.bing.com/th?id=ORMS.ac78a2b9aa029e8a23ac2e889eb08cf7&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
  );
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = imageRef.current;
    image.crossOrigin = "anonymous";
    image.onload = () => {
      context.drawImage(image, 0, 0);
      context.globalCompositeOperation = "destination-out";
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
  };

  const calculateScratchedPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, width, height).data;
    const totalPixels = width * height;
    let scratchedPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        scratchedPixels++;
      }
    }

    setScratchedPercent((scratchedPixels / totalPixels) * 100);
  }, [width, height, imageRef]);

  const handleMouseUp = useCallback(() => {
    if (isMouseDown) {
      setIsMouseDown(false);
      calculateScratchedPercent();
    }
  }, [isMouseDown, calculateScratchedPercent]);

  const scratch = (e) => {
    if (!isMouseDown) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI * 2, true);
    context.fill();
  };

  const resetGame = () => {
    setScratchedPercent(0);
    setIsMouseDown(false);
    // Clear canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Select a new random image
    // const randomIndex = Math.floor(Math.random() * prizes.length);
    // setImage(prizes[randomIndex].image);
    const image = imageRef.current;
    context.drawImage(image, 0, 0, width, height);
  };

  if (scratchedPercent >= 80) {
    alert("Congratulations! You win");
    resetGame();
  }
  return (
    <div className="flex justify-center items-center ">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={scratch}
        onMouseUp={handleMouseUp}
      />
      <img
        ref={imageRef}
        src={image}
        alt="hidden"
        style={{ display: "none" }}
      />
      <p>{scratchedPercent.toFixed(2)}% scratched</p>
    </div>
  );
};

export default ScratchCardgame;
