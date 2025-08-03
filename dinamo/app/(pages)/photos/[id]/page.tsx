import React from "react";

import Gallery from "@/components/Gallery";

import { FcGallery } from "react-icons/fc";
import { HiCamera } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

const Page = () => {
   return (
      <div className="relative">
         <img
            className="w-full h-[60vh] absolute opacity-20 -z-10 top-0 left-0 object-cover"
            src="/photo-1.jpg"
            alt="img"
         />
         <div className="absolute -z-20 top-0 left-0 w-full h-[60vh] bg-[#0f2145]" />
         <div className="absolute -z-10 top-0 left-0 w-full h-[60vh] gradient" />
         <div className="absolute -z-10 top-0 left-0 w-full h-[60vh] opacity-[.4] bg-gradient-to-r from-[#154284] to-[#fdc52c]" />
         <div className="custom-container py-16 max-md:py-10">
            <div className="mb-20 max-lg:mb-14 max-md:mb-10">
               <h2 className="text-4xl max-lg:text-3xl font-bold font-russo text-center text-[#fdc52c]">
                  Welcome to FC Dinamo
               </h2>
               <div className="flex items-center justify-around mt-10 max-md:mt-7">
                  <div className="flex items-center gap-1 text-white">
                     <FcGallery className="text-[20px] mb-1.5" />
                     <p className="text-[10px] uppercase">Gallery</p>
                  </div>
                  <div className="flex justify-center] gap-1 max-lg:mb-5 px-7 max-lg:px-5 py-2 max-lg:py-1 rounded-full bg-[#154284] text-white">
                     <p className="text-xl max-lg:text-lg max-md:text-sm font-semibold">
                        12
                     </p>
                     <HiCamera className="text-[25px] max-lg:text-[23px] max-md:text-[18px]" />
                  </div>
                  <div className="flex items-center gap-1">
                     <IoMdTime className="max-sm:text-[15px] mb-1.5 text-white" />
                     <p className="text-[10px] text-gray-400">29 Jul 25</p>
                  </div>
               </div>
            </div>
            <Gallery />
         </div>
      </div>
   );
};

export default Page;
