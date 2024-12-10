import Image from "next/image";
import React from "react";
import Background from "/public/home-bg.png";
import Logo from "/public/home-skull.png";
import HomeLogo from "/public/home_logo.png";
import Insta from "/public/insta.png";

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
            width={450}
            height={450}
            className="absolute bottom-64 h-auto"
            
            />
            <div className="w-full flex justify-center">
              <div className="absolute bottom-[17rem] font-bold text-slate-300 text-[15px] [word-spacing:8px] tracking-wide">CABLES TO BRING YOUR BUILD'S <br></br> AESTHETICS TO THE NEXT LEVEL.</div>
              <div className="">
                <a href="https://www.instagram.com/vore.moe/">
                <Image
                src={Insta}
                alt="Instagram"
                width={50}
                height={50} 
                />
                </a>
              </div>
            </div>
            
            </div>
          <div></div>
        </div>
        <div className="text-white w-full absolute inset-x-0 bottom-4 flex justify-center gap-10">
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-xl sm:text-2xl">ABOUT</a>
          <p className="text-2xl">-</p>
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-xl sm:text-2xl">OUR WORK</a>
          <p className="text-2xl">-</p>
          <a href="#" className="mx-8 sm:mx-4 text-1xl md:text-xl sm:text-2xl ">CONTACT</a>
        </div>
      </div>
    </div>
  );
}