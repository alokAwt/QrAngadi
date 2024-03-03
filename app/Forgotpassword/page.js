import React from "react";
import Image from "next/image";
import Forgotpassword from "@/components/Forgotpassword";
function page() {
  return (
    <div className="bg-[url('/Auth/auth.png')] p-5 md:p-10">
      <div className="bg-white flex gap-10 p-3 md:p-6 rounded-[25px] flex-wrap">
        <div className="form-container bg-white w-full shadow-[0px_0px_4px_2px_#00000040] rounded-[15px] p-3 md:p-10 pt-5 flex-1 md:flex-[0.7] min-w-[256px] max-w-[500px]">
          <Image src={"/auth/logo.png"} height={60} width={125} unoptimized />
          <div className="flex justify-center align-center bg-red-400"></div>
          <Forgotpassword />
        </div>
      </div>
    </div>
  );
}

export default page;
