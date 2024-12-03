import Image from "next/image";
import React from "react";
import Background from "/public/place_back.jpeg";
import Logo from "/public/VoreM.png";

export default function Main() {
  return (
    <div className="h-screen relative">
      <div className="absolute w-full h-full bg-filtered"></div>
      <div className="absolute w-full h-full flex items-center justify-between px-4">
        <div className="text-white w-full flex">
          <div className="ml-4 md:ml-4 lg:ml-80">
            <Image 
            src={Logo} 
            alt="Logo" 
            className = "w-3/6 h-auto md:w-4/6 lg:w-full"
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