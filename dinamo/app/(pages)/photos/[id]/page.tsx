import React from "react";

import Gallery from "@/components/Gallery";

import { FcGallery } from "react-icons/fc";
import { HiCamera } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
   const { id } = await params;

   return (
      <div className="relative">
         <img
            className="w-full h-[50vh] absolute opacity-20 -z-10 top-0 left-0 object-cover"
            src="https://www.fcbarcelona.com/photo-resources/2025/07/31/19ba97cb-a4fc-483a-a05b-b032ba56c977/_MGA8074-1-.jpg?width=2400&height=1050"
            alt="img"
         />
         <div className="absolute -z-20 top-0 left-0 w-full h-[50vh] bg-[#0f2145]" />
         <div className="absolute -z-10 top-0 left-0 w-full h-[50vh] gradient" />
         <div className="absolute -z-10 top-0 left-0 w-full h-[50vh] opacity-[.4] bg-gradient-to-r from-[#154284] to-[#fdc52c]" />
         <div className="custom-container py-16 max-md:py-10">
            <div className="mb-20 max-lg:mb-14 max-md:mb-10">
               <h2 className="text-4xl max-lg:text-3xl font-bold font-russo text-center text-[#fdc52c]">
                  Photos from the win over FC Seoul
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
