"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Page = () => {
   const [form, setForm] = useState({
      email: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(form); // тут можешь отправить форму на сервер
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-[#181733]">
         <div className="w-1/2 h-screen max-lg:hidden"></div>
         <div className="lg:w-1/2 w-full flex items-center justify-center px-4">
            <div className="w-full max-w-[400px] px-6 max-md:px-2 rounded-lg">
               <div className="flex gap-4 flex-col items-center justify-center mb-9">
                  <Image src="/logo.png" width={80} height={80} alt="logo" />
                  <h2 className="text-2xl max-md:text-xl font-bold font-russo uppercase text-white">
                     FC Dinamo
                  </h2>
                  <p className="text-sm max-sm:text-sm text-center font-light text-white">
                     Enter your email address to log in with your Barça account
                     or to create a new Barça account.
                  </p>
               </div>
               <form onSubmit={handleSubmit} className="">
                  <div className="relative">
                     <label className="absolute -top-1 left-3 block text-xs select-none pointer-events-none px-1 text-white bg-[#181733]">
                        Email adders*
                     </label>
                     <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full text-white mt-1 px-3 py-3 focus:outline-white focus:outline-1 border border-gray-300 rounded-sm"
                     />
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-[#676d89] text-[#0f2145] text-xs font-bold uppercase mt-14 max-md:mt-10 py-4 px-3 rounded-sm"
                  >
                     ACCEPT AND CONTINUE
                  </button>

                  <div className="relative flex flex-col gap-3 mt-8 pt-8 border-t border-gray-400">
                     <p className="font-semibold absolute -top-3 left-1/2 -translate-x-1/2 px-2 text-white bg-[#181733]">
                        Or
                     </p>
                     <button className="flex items-center justify-center gap-3 text-xs font-russo py-2.5 rounded-sm cursor-pointer border-2 border-gray-400 bg-white">
                        <FcGoogle className="text-[25px] " />
                        Continue with Google
                     </button>

                     <button className="flex items-center justify-center gap-3 text-xs font-russo py-2.5 rounded-sm cursor-pointer border-2 border-gray-400 bg-white">
                        <FaApple className="text-[25px]" color="#949494" />
                        Continue with Google
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Page;
