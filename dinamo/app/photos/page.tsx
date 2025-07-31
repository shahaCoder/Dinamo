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
               href={"#"}
               className="relative aspect-video max-sm:aspect-[3/3] group flex flex-col items-center justify-end py-10 max-lg:py-5 z-10 before:absolute before:-z-10 before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:w-[98%] before:h-full before:bg-[#0f21457e] after:absolute after:-z-20 after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-full after:bg-[#0f21455d]"
            >
               <div className="w-3/4 h-40 rounded-full blur-[250px] absolute -z-20 -bottom-32 left-1/2 -translate-x-1/2 bg-[#fdc52c]" />
               <div className="w-1/4 max-md:w-1/3 h-7 max-md:h-3 absolute top-0 right-10 bg-[#154284]" />
               <div className="w-1/4 max-md:w-1/3 h-7 max-md:h-3 absolute bottom-0 left-0 bg-[#fdc52c]" />
               <img
                  className="w-full h-full absolute -z-10 top-0 left-0 object-cover"
                  src={
                     "https://www.fcbarcelona.com/photo-resources/2025/07/27/4a52914a-f3bb-4a51-a3dd-ea76b4ef59e2/_MGA8564.jpg?width=862&height=538"
                  }
                  alt={"img"}
               />
               <div className="flex justify-center gap-1 mb-10 max-lg:mb-5 px-3 max-md:px-2 py-0.5 rounded-full bg-[#154284] text-white">
                  <p className="text-xl max-lg:text-lg max-md:text-sm font-semibold">
                     12
                  </p>
                  <HiCamera className="text-[25px] max-lg:text-[23px] max-md:text-[18px]" />
               </div>
               <p className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold font-russo tracking-wider group-hover:underline underline-offset-2 text-white">
                  Crazy welcome to Seoul
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
                     <Link
                        key={index}
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
                              src="https://www.fcbarcelona.com/photo-resources/2025/07/27/4a52914a-f3bb-4a51-a3dd-ea76b4ef59e2/_MGA8564.jpg?width=862&height=538"
                              alt="img"
                           />
                        </div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                           <p className="text-sm font-russo sm:text-center sm:mt-4 sm:mb-6">
                              Training after the win in Kobe
                           </p>
                           <div className="flex sm:justify-end sm:px-2 gap-1 mt-auto text-gray-500">
                              <IoMdTime size={16} />
                              <p className="text-xs">27 Jul 25</p>
                           </div>
                        </div>
                     </Link>
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
