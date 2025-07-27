import Image from "next/image";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] relative">
         <Image
            className="absolute top-0 left-0 w-full h-[70vh] object-cover"
            src="/hero.png"
            width={1000}
            height={1000}
            alt="img"
         />
         <div className="w-full h-[70vh] top-0 left-0 absolute bg-gradient-to-t from-[#0f2145] from-5% to-transparent to-50%"></div>
         <div className="h-[70vh] w-full"></div>
         <div className="bg-white mx-4 rounded-2xl">
            <div className="custom-container py-10">
               <h1 className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
                  First Team Schedule
               </h1>

               <div className="flex flex-col items-center justify-center mt-10">
                  <div className="w-full hover:scale-[1.01] hover:shadow-md duration-200 ease-in-out flex items-center justify-between py-4 px-5 group border-b relative border-gray-200">
                     <div className="absolute left-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                     <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                     <div className="max-w-28 max-lg:max-w-24 w-full">
                        <p className="text-sm max-lg:text-xs font-russo leading-5 uppercase">
                           Mon 30 Dec
                        </p>
                        <p className="text-sm font-manrope bg-gradient-to-r from-[#fdc52c] from-5% to-[#000428] to-40% bg-clip-text text-transparent">
                           12:00
                        </p>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-200 border-none" />
                     <div className="max-w-28 max-lg:max-w-20 w-full">
                        <p className="text-2xl max-lg:text-base font-russo italic text-center">
                           La Liga
                        </p>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-300 border-none" />
                     <div className="max-w-md max-lg:max-w-[400px] w-full flex items-center justify-between gap-5 max-lg:gap-3">
                        <div className="w-[45%] flex items-center justify-end gap-3">
                           <p className="text-lg max-lg:text-sm font-russo group-hover:text-[#154284]">
                              FC Barcelona
                           </p>
                           <Image
                              className="max-lg:w-11"
                              src="/logo.png"
                              width={50}
                              height={50}
                              alt="dinamo"
                           />
                        </div>
                        <div className="">
                           <p className="text-lg max-lg:text-base font-russo uppercase bg-gradient-to-r from-[#fdc52c] from-20% to-[#000428] to-80% bg-clip-text text-transparent">
                              vs
                           </p>
                        </div>
                        <div className="w-[45%] flex items-center gap-3">
                           <Image
                              className="max-lg:w-11"
                              src="/logo.png"
                              width={50}
                              height={50}
                              alt="dinamo"
                           />
                           <p className="text-lg max-lg:text-sm font-russo group-hover:text-[#154284]">
                              Real
                           </p>
                        </div>
                     </div>
                     <hr className="w-[0.5px] h-10 bg-gray-300 border-none" />
                     <div className="max-w-24 max-lg:max-w-20 w-full text-end">
                        <p className="text-sm max-lg:text-xs font-russo leading-5">
                           Matchday 1
                        </p>
                        <p className="text-[10px] font-light">Camp Nou</p>
                     </div>
                  </div>
                  {Array.from({ length: 6 }, (_, index) => (
                     <div
                        key={index}
                        className="w-full hover:scale-[1.01] hover:shadow-md duration-200 ease-in-out flex items-center justify-between py-4 px-5 group border-b relative border-gray-200"
                     >
                        <div className="absolute left-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                        <div className="absolute right-0 top-0 h-full w-0 group-hover:w-1 duration-200 ease-in-out bg-gradient-to-t from-[#fdc52c] to-[#000428]" />
                        <div className="max-w-28 max-lg:max-w-24 w-full">
                           <p className="text-sm max-lg:text-xs font-russo leading-5 uppercase">
                              Sun 27 Jul
                           </p>
                           <p className="text-sm font-manrope bg-gradient-to-r from-[#fdc52c] from-5% to-[#000428] to-40% bg-clip-text text-transparent">
                              12:00
                           </p>
                        </div>
                        <hr className="w-[0.5px] h-10 bg-gray-200 border-none" />
                        <div className="max-w-28 max-lg:max-w-20 w-full">
                           <p className="text-2xl max-lg:text-base font-russo italic text-center">
                              La Liga
                           </p>
                        </div>
                        <hr className="w-[0.5px] h-10 bg-gray-300 border-none" />
                        <div className="max-w-md max-lg:max-w-[400px] w-full flex items-center justify-between gap-5 max-lg:gap-3">
                           <div className="w-[45%] flex items-center justify-end gap-3">
                              <p className="text-lg max-lg:text-sm font-russo group-hover:text-[#154284]">
                                 FC Dinamo
                              </p>
                              <Image
                                 className="max-lg:w-11"
                                 src="/logo.png"
                                 width={50}
                                 height={50}
                                 alt="dinamo"
                              />
                           </div>
                           <div className="">
                              <p className="text-lg max-lg:text-base font-russo uppercase bg-gradient-to-r from-[#fdc52c] from-20% to-[#000428] to-80% bg-clip-text text-transparent">
                                 vs
                              </p>
                           </div>
                           <div className="w-[45%] flex items-center gap-3">
                              <Image
                                 className="max-lg:w-11"
                                 src="/logo.png"
                                 width={50}
                                 height={50}
                                 alt="dinamo"
                              />
                              <p className="text-lg max-lg:text-sm font-russo group-hover:text-[#154284]">
                                 Dinamo
                              </p>
                           </div>
                        </div>
                        <hr className="w-[0.5px] h-10 bg-gray-300 border-none" />
                        <div className="max-w-24 max-lg:max-w-20 w-full text-end">
                           <p className="text-sm max-lg:text-xs font-russo leading-5">
                              Matchday 1
                           </p>
                           <p className="text-[10px] font-light">Camp Nou</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
