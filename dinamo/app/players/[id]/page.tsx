import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiDumbbell, CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

const Hage = ({ params }: { params: { id: number } }) => {
   return (
      <div className="bg-[#0f2145]">
         <div className="bg-player relative z-10 overflow-hidden">
            <i className="absolute -z-20 top-1/4 max-md:top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 player-name font-extrabold uppercase bg-gradient-to-b from-white/30 from-30% to-70% to-transparent bg-clip-text text-transparent select-none pointer-events-none">
               Balde
            </i>
            <div className="absolute -z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#0f2145] to-transparent" />
            <div className="custom-container">
               <div className="flex max-md: items-center justify-between pt-10">
                  <div className="w-1/2 h-full flex flex-col justify-center max-lg:hidden">
                     <div className="flex items-center justify-center gap-5">
                        <div className="text-center">
                           <p className="text-sm font-bold uppercase text-white">
                              Dinamo Games
                           </p>
                           <p className="text-6xl font-bold text-[#fdc52c]">
                              126
                           </p>
                           <p className="text-[10px] font-bold uppercase text-gray-400">
                              2025/2026 Season
                           </p>
                           <p className="text-[#fdc52c] text-xl font-bold">0</p>
                        </div>
                        <div className="text-center">
                           <p className="text-sm font-bold uppercase text-white">
                              Dinamo Goals
                           </p>
                           <p className="text-6xl font-bold text-[#fdc52c]">
                              3
                           </p>
                           <p className="text-[10px] font-bold uppercase text-gray-400">
                              2025/2026 Season
                           </p>
                           <p className="text-[#fdc52c] text-xl font-bold">0</p>
                        </div>
                        <div className="text-center">
                           <p className="text-sm font-bold uppercase text-white">
                              Dinamo Assists
                           </p>
                           <p className="text-6xl font-bold text-[#fdc52c]">
                              15
                           </p>
                           <p className="text-[10px] font-bold uppercase text-gray-400">
                              2025/2026 Season
                           </p>
                           <p className="text-[#fdc52c] text-xl font-bold">0</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 mt-10">
                        {[0, 1, 2].map((item) => (
                           <Link
                              key={item}
                              href="#"
                              className="rounded-md overflow-hidden"
                           >
                              <div className="h-">
                                 <Image
                                    className="w-full h-full object-cover"
                                    src="/hero.png"
                                    width={1000}
                                    height={1000}
                                    alt="logo"
                                 />
                              </div>
                              <div className="bg-[#080e1fe6] h-20 p-3">
                                 <p className="max-lg:text-xs font-bold text-center text-white">
                                    My Top 11 | Balde
                                 </p>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
                  <div className="w-1/2 max-lg:w-full flex justify-end">
                     <div className="w-3/4 max-xl:w-4/5 max-lg:w-full max-lg:flex max-md:flex-col max-lg:items-end relative">
                        <Image
                           className="w-full h-full max-md:w-2/3 max-md:mx-auto object-cover"
                           src="/03-balde.webp"
                           width={1000}
                           height={1000}
                           alt="logo"
                        />
                        <div className="bg-[#080e1fe6] w-full h-fit py-4 lg:absolute lg:bottom-0 lg:left-0">
                           <div className="">
                              <p className="text-xs font-bold text-center uppercase text-gray-300">
                                 Defender
                              </p>
                              <div className="flex justify-center gap-1">
                                 <p className="text-gray-300 text-3xl">3 </p>
                                 <p className="text-xl max-md:text-lg text-white">
                                    Alejandro{" "}
                                    <span className="text-3xl max-md:text-2xl font-bold uppercase">
                                       Balde
                                    </span>
                                 </p>
                              </div>
                           </div>
                           <div className="flex items-center justify-around border-t md:hidden border-gray-600 pt-4 mt-4">
                              <div className="text-center">
                                 <p className="text-[10px] font-bold uppercase text-white">
                                    Dinamo Games
                                 </p>
                                 <p className="text-3xl font-bold text-[#fdc52c]">
                                    126
                                 </p>
                                 <p className="text-[10px] font-bold uppercase text-gray-400">
                                    2025/2026 Season
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                              <div className="text-center">
                                 <p className="text-[10px] font-bold uppercase text-white">
                                    Dinamo Goals
                                 </p>
                                 <p className="text-3xl font-bold text-[#fdc52c]">
                                    3
                                 </p>
                                 <p className="text-[10px] font-bold uppercase text-gray-400">
                                    2025/2026 Season
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                              <div className="text-center">
                                 <p className="text-[10px] font-bold uppercase text-white">
                                    Dinamo Assists
                                 </p>
                                 <p className="text-3xl font-bold text-[#fdc52c]">
                                    15
                                 </p>
                                 <p className="text-[10px] font-bold uppercase text-gray-400">
                                    2025/2026 Season
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white mx-10 max-lg:mx-2 rounded-xl py-10">
            <div className="custom-container">
               <div className="h-full flex max-lg:flex-col items-center gap-10 max-lg:gap-7">
                  <div className="w-1/2 max-lg:w-full px-10 max-lg:px-7 py-5 max-sm:p-0 rounded-xl sm:shadow-2xl">
                     <h3 className="text-3xl max-md:text-2xl font-bold mb-7">
                        Personal details
                     </h3>
                     <div className="grid grid-cols-2 gap-10 max-xl:gap-x-5">
                        <div className="flex items-center gap-5">
                           <div className="">
                              <CiUser className="text-[25px] text-yellow-500" />
                           </div>
                           <div className="">
                              <p className="text-gray-600 text-sm font-semibold">
                                 Full name
                              </p>
                              <p className="text- font-semibold">
                                 Alejandro Balde
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-5">
                           <div className="">
                              <IoLocationOutline className="text-[25px] text-yellow-500" />
                           </div>
                           <div className="">
                              <p className="text-gray-600 text-sm font-semibold">
                                 Place of birth
                              </p>
                              <p className="text- font-semibold">
                                 Barcelona, Spain
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-5">
                           <div className="">
                              <IoCalendarOutline className="text-[25px] text-yellow-500" />
                           </div>
                           <div className="">
                              <p className="text-gray-600 text-sm font-semibold">
                                 Date of birth
                              </p>
                              <p className="text- font-semibold">18/10/2003</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-5">
                           <div className="">
                              <CiDumbbell className="text-[25px] text-yellow-500" />
                           </div>
                           <div className="flex items-center gap-3">
                              <div className="">
                                 <p className="text-gray-600 text-sm font-semibold">
                                    Weight
                                 </p>
                                 <p className="text- font-semibold">69kg</p>
                              </div>
                              <div className="">
                                 <p className="text-gray-600 text-sm font-semibold">
                                    Height
                                 </p>
                                 <p className="text- font-semibold">175cm</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/2 max-lg:w-full px-10 max-lg:px-7 py-5 max-sm:p-0 rounded-xl sm:shadow-2xl">
                     <h3 className="text-3xl max-md:text-2xl font-bold mb-7">
                        Career
                     </h3>
                     <div className="h-32 overflow-y-scroll">
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                           <p className="text-sm font-semibold text-gray-500">
                              Real Madrid
                           </p>
                           <p className="text-sm font-semibold text-gray-500">
                              2018-
                           </p>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                           <p className="text-sm font-semibold text-gray-500">
                              FC Barcelona
                           </p>
                           <p className="text-sm font-semibold text-gray-500">
                              2017-2018
                           </p>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                           <p className="text-sm font-semibold text-gray-500">
                              FC Dinamo
                           </p>
                           <p className="text-sm font-semibold text-gray-500">
                              2016-2017
                           </p>
                        </div>
                        <div className="flex items-center justify-between py-2">
                           <p className="text-sm font-semibold text-gray-500">
                              Man Sity
                           </p>
                           <p className="text-sm font-semibold text-gray-500">
                              2008-2016
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hage;
