import ResultsCard from "@/components/children/ResultsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] relative">
         <Image
            className="absolute top-0 left-0 w-full h-[70vh] max-md:h-[50vh] object-cover"
            src="/hero.png"
            width={1000}
            height={1000}
            alt="img"
         />
         <div className="w-full h-[70vh] max-md:h-[50vh] top-0 left-0 absolute bg-gradient-to-t from-[#0f2145] from-5% to-transparent to-50%"></div>
         <div className="h-[70vh] max-md:h-[50vh] w-full"></div>
         <div className="bg-white mx-4 max-md:mx-2 rounded-2xl">
            <div className="custom-container py-10">
               <h1 className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
                  First Team Schedule
               </h1>

               <ul className="flex items-center mt-5 max-md:hidden">
                  {Array.from({ length: 10 }, (_, index) => (
                     <li
                        key={index}
                        className="w-full relative flex flex-col items-center justify-center py-3 cursor-pointer group border border-[#efefef] bg-[#f8f8f8]"
                     >
                        <p className="text-[10px] text-[#222]">2025</p>
                        <p className="text-xs font-bold font-manrope uppercase text-[#727272]">
                           Aug
                        </p>
                        <span className="block w-0 h-0.5 absolute z-10 bottom-0 left-1/2 -translate-x-1/2 group-hover:w-full duration-200 ease-in-out bg-[#154284]" />
                     </li>
                  ))}
               </ul>

               <div className="flex flex-col gap-8 mt-10 max-md:mt-6">
                  {Array.from({ length: 3 }, (_, index) => (
                     <div key={index} className="">
                        <p className="text-2xl max-md:text-xl font-russo uppercase">
                           August 2025
                        </p>
                        <div className="flex flex-col items-center justify-center my-4">
                           {Array.from({ length: 4 }, (_, index) => (
                              <ResultsCard key={index} />
                           ))}
                        </div>
                        <div className="w-full h-2 shadow bg-gradient-to-r from-[#fdc52c] from-40% to-60% to-[#0474D8]" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
