"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiArrowLeftWideFill } from "react-icons/ri";

const Page = () => {
   const [ChageAvatar, setChageAvatar] = useState(false);

   return (
      <div>
         <div className="custom-container py-7">
            <Link href="/" className="w-fit flex items-center gap-1 cursor-pointer group">
               <Image
                  className="w-11"
                  src={"/logo.png"}
                  width={100}
                  height={100}
                  alt="logo"
               />
               <RiArrowLeftWideFill className="text-[20px]" />
               <p className="text-lg font-medium font-russo group-hover:underline">BACK TO WEB</p>
            </Link>

            <div className="mt-10">
               <div className="bg-white max-w-sm w-full h-screen rounded-2xl shadow-lg">
                  <div className="px-9 py-5 flex gap-5">
                     <div className="">
                        <Image
                           className="w-16"
                           src={"/logo.png"}
                           width={1000}
                           height={1000}
                           alt="profile"
                        />
                        <button
                           onClick={() => setChageAvatar(true)}
                           className="text-[#AAAAAA] text-sm underline font-manrope text-center mt-1 cursor-pointer"
                        >
                           Change
                        </button>
                     </div>
                     <div className="">
                        <p className="text-lg font-russo uppercase">
                           JONIBEK LATIPOV
                        </p>
                        <p className="w-fit px-3 py-1 rounded-full text-sm font-russo uppercase bg-[#154284] text-white">
                           Culer
                        </p>
                     </div>
                  </div>
                  {ChageAvatar ? (
                     <div className="px-9 py-4 flex flex-col items-center">
                        <h3 className="text-sm font-russo uppercase">
                           My Avatar
                        </h3>

                        <ul className="w-full h-[60vh] overflow-y-auto overflow-hidden grid grid-cols-3 gap-4 mt-7">
                           {Array.from({ length: 20 }, (_, index) => (
                              <li key={index}>
                                 <Image
                                    className="w-20"
                                    src={"/logo.png"}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                 />
                              </li>
                           ))}
                        </ul>

                        <button onClick={() => setChageAvatar(false)} className="flex items-center mt-6 cursor-pointer group">
                           <RiArrowLeftWideFill className="text-[20px]" />

                           <p className="text-lg font-medium font-russo group-hover:underline">
                              BACK
                           </p>
                        </button>
                     </div>
                  ) : (
                     <div className="px-9 py-4 flex flex-col items-center">
                        <h3 className="text-sm font-russo uppercase">
                           PERSONAL INFORMATION
                        </h3>

                        <form
                           action=""
                           className="w-full flex flex-col gap-5 mt-7"
                        >
                           <label htmlFor="name" className="">
                              <p className="text-sm mb-1">
                                 <span className="text-red-500">* </span>Name
                              </p>
                              <input
                                 className="w-full text-sm px-3 py-2 rounded-[3px] outline-black border border-black"
                                 type="text"
                                 id="name"
                                 defaultValue={"Jonibek"}
                              />
                           </label>

                           <label htmlFor="" className="">
                              <p className="text-sm mb-1">
                                 <span className="text-red-500">* </span>
                                 LastName
                              </p>
                              <input
                                 className="w-full text-sm px-3 py-2 rounded-[3px] outline-black border border-black"
                                 type="text"
                                 defaultValue={"Latipov"}
                              />
                           </label>

                           <button className="text-sm font-bold uppercase py-3 px-4 rounded-sm bg-[#C5C7C8]">
                              save changes
                           </button>
                        </form>

                        <button className="text-red-500 w-fit font-semibold cursor-pointer mt-20 hover:underline">
                           Log Out
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
