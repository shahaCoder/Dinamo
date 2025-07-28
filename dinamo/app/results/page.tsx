import ResultsCard from "@/components/children/ResultsCard";
import Image from "next/image";
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
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">1</p>
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">-</p>
                     <p className="text-5xl max-xl:text-3xl max-sm:text-2xl font-russo">3</p>
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

               <div className="flex flex-col items-center justify-center mt-10 max-md:mt-6">
                  <div className="w-full hover:scale-[1.01] hover:shadow-md duration-200 ease-in-out flex items-center justify-between py-4 max-md:py-10 px-5 max-md:px-1 group border-b relative border-gray-200">
                     <div className="absolute left-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                     <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                     <div className="max-w-28 max-lg:max-w-24 w-full max-md:hidden">
                        <p className="text-sm max-lg:text-xs font-russo leading-5 uppercase">
                           Mon 30 Dec
                        </p>
                        <p className="text-sm font-manrope bg-gradient-to-r from-[#fdc52c] from-5% to-[#000428] to-40% bg-clip-text text-transparent">
                           12:00
                        </p>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-200 border-none max-md:hidden" />
                     <div className="max-w-28 max-lg:max-w-20 w-full max-md:hidden">
                        <p className="text-2xl max-lg:text-base font-russo italic text-center">
                           La Liga
                        </p>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-300 border-none max-md:hidden" />
                     <div className="max-w-md max-lg:max-w-[400px] max-md:max-w-full w-full flex items-center justify-between gap-5 max-lg:gap-3">
                        <div className="w-[45%] max-md:w-[30%] flex max-md:flex-col-reverse items-center justify-end gap-3 max-md:gap-2">
                           <p className="text-lg max-lg:text-sm max-sm:text-xs font-russo group-hover:text-[#154284]">
                              FC Barcelona
                           </p>
                           <Image
                              className="max-lg:w-11 max-md:w-14"
                              src="/logo.png"
                              width={50}
                              height={50}
                              alt="dinamo"
                           />
                        </div>
                        <div className="max-md:text-center">
                           <p className="text-2xl max-lg:text-base font-russo italic text-center md:hidden">
                              La Liga
                           </p>
                           <p className="text-sm max-lg:text-xs max-md:text-base font-russo leading-5 uppercase md:hidden">
                              Mon 30 Dec
                           </p>
                           <p className="text-sm font-russo max-md:font-russo md:hidden bg-gradient-to-r from-[#fdc52c] from-5% to-[#000428] to-7 0% bg-clip-text text-transparent">
                              12:00
                           </p>
                           <p className="text-lg max-lg:text-base font-russo uppercase max-md:hidden bg-gradient-to-r from-[#fdc52c] from-30% to-[#000428] to-70% bg-clip-text text-transparent">
                              vs
                           </p>
                        </div>
                        <div className="w-[45%] max-md:w-[30%] flex max-md:flex-col items-center gap-3 max-md:gap-2">
                           <Image
                              className="max-lg:w-11 max-md:w-14"
                              src="/logo.png"
                              width={50}
                              height={50}
                              alt="dinamo"
                           />
                           <p className="text-lg max-lg:text-sm max-sm:text-xs font-russo group-hover:text-[#154284]">
                              Real Madrid
                           </p>
                        </div>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-300 border-none max-md:hidden" />
                     <div className="max-w-24 max-lg:max-w-20 w-full text-end max-md:hidden">
                        <p className="text-sm max-lg:text-xs font-russo leading-5">
                           Matchday 1
                        </p>
                        <p className="text-[10px] font-light">Camp Nou</p>
                     </div>
                  </div>
                  {Array.from({ length: 6 }, (_, index) => (
                     <ResultsCard key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
