import Image from "next/image";
import React from "react";
import Background from "/public/home-bg.png";
import Logo from "/public/home-skull.png";
import HomeLogo from "/public/home_logo.png";

export default function Main() {
  return (
    <div className="h-screen relative">
    <Image
      src={Background}
      alt="Background"
      fill={true}
    />
      <div className="absolute w-full h-full flex items-center px-4">
        <div className="text-white w-full flex justify-evenly">
          <div className="relative">
            <Image 
            src={Logo} 
            alt="Logo" 
            width={400}
            height={400} 
            />
            <Image
            src={HomeLogo}
            alt="Logo"
            className="absolute inset-0 w-full h-auto"
            />

            
            </div>
          <div></div>
        </div>
        <div className="text-white w-full absolute inset-x-0 bottom-0 flex justify-center gap-10">
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-2xl sm:text-3xl">ABOUT</a>
          <p className="text-2xl">-</p>
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-2xl sm:text-3xl">OUR WORK</a>
          <p className="text-2xl">-</p>
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-2xl sm:text-3xl">CONTACT</a>
        </div>
      </div>
    </div>
  );
}