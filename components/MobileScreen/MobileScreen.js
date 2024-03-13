import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
function MobileScreen() {
  return (
    <div
      className={`relative min-h-[500px] max-w-[300px] ${styles.mobileContainer}`}
    >
      <div className="w-[95%] mx-auto min-h-[600px] bg-[gray] relative p-5 pt-[50px] rounded-[55px]">
        {/* data on mobie screen */}
      </div>
      <div className="absolute w-full h-full bg-transparent top-0 left-0 z-10">
        <Image
          src={"/mobile_screen.png"}
          height={0}
          width={0}
          className="h-full w-full"
          unoptimized
        />
      </div>
    </div>
  );
}

export default MobileScreen;
