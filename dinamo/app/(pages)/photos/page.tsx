import PhotosCard from "@/components/children/PhotosCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGallery } from "react-icons/fc";
import { HiCamera } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";

const Page = () => {
   return (
      <div className="bg-[#0f2145] pb-10">
         <div className="custom-container pt-6 pb-10">
            <Link
               href={"/photos/2"}
               className="relative aspect-video max-sm:aspect-[3/3] group flex flex-col items-center justify-end py-10 max-lg:py-5 z-10 before:absolute before:-z-10 before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:w-[98%] before:h-full before:bg-[#0f21457e] after:absolute after:-z-20 after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-full after:bg-[#0f21455d]"
            >
               <div className="w-3/4 h-40 rounded-full blur-[250px] absolute -z-20 -bottom-32 left-1/2 -translate-x-1/2 select-none pointer-events-none bg-[#fdc52c]" />
               <div className="w-1/4 max-md:w-1/3 h-7 max-md:h-3 absolute top-0 right-10 bg-[#154284]" />
               <div className="w-1/4 max-md:w-1/3 h-7 max-md:h-3 absolute bottom-0 left-0 bg-[#fdc52c]" />
               <img
                  className="w-full h-full absolute -z-10 top-0 left-0 object-cover"
                  src={"/photo-1.jpg"}
                  alt={"img"}
               />
               <div className="flex justify-center gap-1 mb-10 max-lg:mb-5 px-3 max-md:px-2 py-0.5 rounded-full bg-[#154284] text-white">
                  <p className="text-xl max-lg:text-lg max-md:text-sm font-semibold">
                     12
                  </p>
                  <HiCamera className="text-[25px] max-lg:text-[23px] max-md:text-[18px]" />
               </div>
               <p className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold font-russo tracking-wider group-hover:underline underline-offset-2 text-white">
                  Welcome to FC Dinamo
               </p>
               <div className="flex items-center gap-2 mt-4 max-lg:mt-2 max-md:mt-0">
                  <div className="flex items-center gap-1 text-white">
                     <FcGallery className="text-[20px] mb-1.5" />
                     <p className="text-[10px] uppercase">Gallery</p>
                  </div>
                  <div className="flex items-center gap-1">
                     <IoMdTime className="max-sm:text-[15px] mb-1.5 text-white" />
                     <p className="text-[10px] text-gray-400">29 Jul 25</p>
                  </div>
               </div>
               <div className="w-full h-full absolute -z-10 bottom-0 left-0 bg-gradient-to-t from-[#0f2145] to-transparent from-0% to-30%" />
            </Link>
         </div>
         <div className="bg-white mx-4 max-lg:mx-0 rounded-2xl relative z-10">
            <div className="custom-container py-10">
               <h2 className="text-4xl max-md:text-2xl font-russo text-center uppercase">
                  Latest photos
               </h2>
               <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2 max-sm:gap-0 mt-7">
                  {Array.from({ length: 10 }).map((_, index) => (
                     <PhotosCard key={index} />
                  ))}
               </div>
               <button className="bg-[#0f2145] text-white font-russo text-sm px-4 py-2 rounded-full mt-5 mx-auto block relative cursor-pointer hover:bg-transparent hover:underline underline-offset-1 duration-200">
                  <span className="block bg-gradient-to-r from-[#fdc52c] to-[#154284] from-10% to-80% w-[95%] h-full absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 rounded-full" />
                  Show more +
               </button>
            </div>
         </div>
      </div>
   );
};

export default Page;
