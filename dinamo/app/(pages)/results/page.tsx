import ResultsCard from "@/components/children/ResultsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] relative z-10">
         <Image
            className="absolute -z-10 top-0 left-0 w-1/2 h-[70vh] max-md:h-[50vh] object-cover opacity-50"
            src="/stripes-left.png"
            width={1000}
            height={1000}
            alt="img"
         />
         <Image
            className="absolute -z-10 top-0 right-0 w-1/2 h-[70vh] max-md:h-[50vh] object-cover opacity-50"
            src="/bg-hero.png"
            width={1000}
            height={1000}
            alt="img"
         />
         <div className="w-full h-[70vh] max-md:h-[50vh] top-0 left-0 absolute -z-10 bg-gradient-to-t from-[#0f2145] from-5% to-transparent to-50%"></div>
         <div className="w-full pt-10 pb-20">
            <div className="">
               <div className="flex items-center justify-center gap-1 text-white">
                  <p className="text-sm max-md:text-xs font-russo">La Liga •</p>
                  <p className="text-sm max-md:text-xs"> Camp Nou Stadium</p>
               </div>
               <p className="text-3xl max-md:text-2xl font-russo text-center italic text-[#fdc52c]">
                  Sunday 27 July
               </p>

               <div className="flex items-center justify-center gap-10 max-lg:gap-5 mt-10">
                  <div className="flex max-sm:flex-col-reverse items-center gap-5 max-sm:gap-3">
                     <p className="text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl font-russo text-white">
                        FC Dinamo
                     </p>
                     <Image
                        className="max-xl:w-20 max-sm:w-16"
                        src={"/logo.png"}
                        width={100}
                        height={100}
                        alt={"logo"}
                     />
                  </div>
                  {/* linear-gradient(180deg,#2c4481 0,#181733) */}
                  <div className="text-white flex items-center gap-3 px-6 py-3 max-xl:px-4 max-xl:py-2 max-sm:px-3 max-sm:py-1 bg-gradient-to-b from-[#2c4481] to-[#181733]">
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">
                        1
                     </p>
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">
                        -
                     </p>
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">
                        3
                     </p>
                  </div>
                  <div className="flex max-sm:flex-col items-center gap-5 max-sm:gap-3">
                     <Image
                        className="max-xl:w-20 max-sm:w-16"
                        src={"/logo.png"}
                        width={100}
                        height={100}
                        alt={"logo"}
                     />
                     <p className="text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl font-russo text-white">
                        FC Dinamo
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white mx-4 max-md:mx-2 rounded-2xl">
            <div className="custom-container py-10">
               <h1 className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
                  First Team Results
               </h1>
               <hr className="w-full h-0.5 mt-4" />

               <div className="flex flex-col gap-8 mt-5">
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
