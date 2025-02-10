"use client"
import Image from "next/image";
import React from "react";
import firstImage from "../../../../../public/Vector (4).svg";
import secondImage from "../../../../../public/Vector (8).svg";
import thirdImage from "../../../../../public/Vector (6).svg";
import fourthImage from "../../../../../public/Vector (5).svg";
import CustomButton from "../Button/customButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-White">
      {
        pathname === "/preview" ?
        <>
        <CustomButton variant="alternate">Back to Editor</CustomButton>
        <CustomButton>Share Link</CustomButton>
        </> 
        :
        <>
        <div className="w-[10%]">
          <Image alt="Home" src={firstImage} className="w-full" />
        </div>
        <div className="w-[10%]">
          <Image alt="Home" src={secondImage} className="w-full" />
        </div>
        <div className="w-[10%]">
          <Image alt="Home" src={thirdImage} className="w-full" />
        </div>
        <div className="w-[10%]">
          <Image alt="Home" src={fourthImage} className="w-full" />
        </div>
        </>
      }
    </div>
  );
};

export default Navbar;
