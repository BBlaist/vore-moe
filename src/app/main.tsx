import Image from "next/image";
import React from "react";
import Background from "/public/place_back.jpeg";

export default function Main() {
  return (
    <div className="h-screen relative">
      <Image
        src={Background}
        alt="Background"
        fill={true}
      />
      <div className="absolute w-full h-full">
      <div className="flex justify-around align-center text-white">
        <div>content-left</div>
        <div>content-right</div>
      </div>
      <div className="text-white ">
        <a href="#">ABOUT</a> <a href="#">OUR WORK</a> <a href="#">CONTACT</a>
      </div>
      </div>
    </div>
  );
}
