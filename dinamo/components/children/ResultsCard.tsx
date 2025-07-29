import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ResultsCard = () => {
   return (
      <Link
         href={`/matches/${1}`}
         className="w-full hover:scale-[1.01] hover:shadow-md duration-200 ease-in-out flex items-center justify-between py-4 max-md:py-8 px-5 max-md:px-1 group border-b relative border-gray-200"
      >
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
               <div className="flex items-center justify-center gap-1 mt-10 md:hidden">
                  <p className="text-sm font-russo max-md:font-russo bg-gradient-to-r from-[#fdc52c] from-30% to-[#000428] to-100% bg-clip-text text-transparent">
                     More
                  </p>
                  <FaArrowRightLong className="text-[#000428] text-[14px]" />
               </div>
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
      </Link>
   );
};

export default ResultsCard;
