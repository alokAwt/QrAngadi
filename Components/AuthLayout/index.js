import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <div className="bg-[url('/Auth/auth.png')] p-10">
      <div className="bg-white flex gap-10 p-10 rounded-[25px]">
        <div className="form-container bg-white w-full shadow-[0px_0px_4px_2px_#00000040] rounded-[15px] p-10 pt-5 flex-[0.7]">
          <Image src={"/auth/logo.png"} height={60} width={125} unoptimized />
          {children}
        </div>

        <div className="animation-container bg-white w-full flex-1">
          awdwfsc
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
