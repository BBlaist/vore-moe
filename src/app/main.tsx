import Image from "next/image";
import React from "react";
import { Oxygen } from "next/font/google";
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
            width={450}
            height={450} 
            />
            <Image
            src={HomeLogo}
            alt="Logo"
            width={500}
            height={500}
            className="absolute bottom-48 w-full h-auto"
            />
            <div className="w-full flex justify-center">
              <div className="absolute bottom-44 w-1/2 ">Cables to bring your build's Aesthetics to the next level.</div>
            </div>
            
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