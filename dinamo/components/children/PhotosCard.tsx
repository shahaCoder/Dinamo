import Link from "next/link";
import React from "react";
import { HiCamera } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

const PhotosCard = () => {
   return (
      <Link
         href={"/photos/1"}
         className="relative group flex max-sm:gap-3 sm:flex-col sm:p-1.5 py-3 group hover:shadow-lg duration-200 ease-in sm:border border-b border-gray-200"
      >
         <div className="relative max-sm:w-2/5 z-10 group-hover:before:top-1.5 before:absolute before:-z-10 before:top-1 before:left-1/2 before:-translate-x-1/2 before:w-[95%] before:h-full before:bg-[#c6c6c6] group-hover:after:top-3 after:absolute after:-z-20 after:top-2 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-full after:bg-[#c7c7c780] before:duration-200 after:duration-400 max-sm:before:hidden max-sm:after:hidden">
            <div className="absolute top-2 right-2 flex justify-center gap-0.5 px-2 py-0.5 rounded-md bg-[#154284] text-white">
               <p className="text-xs font-semibold">12</p>
               <HiCamera className="text-[14px]" />
            </div>
            <img
               className="w-full h-full object-cover aspect-[3/2]"
               src={"/photo-1.jpg"}
               alt="img"
            />
         </div>
         <div className="relative z-10 flex flex-col justify-between h-full">
            <p className="text-sm font-russo sm:text-center sm:mt-4 sm:mb-6">
               Welcome to FC Dinamo
            </p>
            <div className="flex sm:justify-end sm:px-2 gap-1 mt-auto text-gray-500">
               <IoMdTime size={16} />
               <p className="text-xs">27 Jul 25</p>
            </div>
         </div>
      </Link>
   );
};

export default PhotosCard;
