import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
   return (
      <>
         <div className="bg-[#0a1833] py-10">
            <div className="custom-container relative">
               <h2 className="text-yellow-500 font-russo italic">
                  Main Partners
               </h2>
               <div className="bg-yellow-600 w-0.5 h-3/4 absolute z-20 top-10 left-9 max-lg:left-7 max-md:left-5" />
               <div className="flex items-center justify-around mt-5">
                  <Link href={"#"}>
                     <Image
                        className="w-72 max-lg:w-52 max-md:w-36"
                        src={
                           "https://fcbarcelona-static-files.s3.amazonaws.com/sponsors/nike--white.svg"
                        }
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </Link>
                  <Link href={"#"}>
                     <Image
                        className="w-72 max-lg:w-52 max-md:w-36"
                        src={
                           "https://fcbarcelona-static-files.s3.amazonaws.com/sponsors/nike--white.svg"
                        }
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </Link>
               </div>
            </div>
         </div>

         <div className="py-20 bg-[#0f2145]">
            <div className="custom-container">
               <h3 className="text-white text-xl font-semibold text-center">
                  Follow FC Dinamo on social media
               </h3>
               <div className="flex flex-wrap justify-center gap-2 mt-5">
                  <Link href={"#"} className="bg-[#3b5998] p-3 pr-20">
                     <IoLogoFacebook className="text-[35px] mb-3" />
                     <p className="text-white text-xs font-medium">FC Dinamo</p>
                     <p className="text-white text-xs font-semibold">
                        @fcdinamo
                     </p>
                  </Link>

                  <Link href={"#"} className="p-3 pr-20 instagram-gradient">
                     <FaInstagram className="text-[35px] mb-3" />
                     <p className="text-white text-xs font-medium">FC Dinamo</p>
                     <p className="text-white text-xs font-semibold">
                        @fcdinamo
                     </p>
                  </Link>
                  <Link href={"#"} className="p-3 pr-20 bg-black">
                     <FaTiktok className="text-[35px] mb-3 text-white" />
                     <p className="text-white text-xs font-medium">FC Dinamo</p>
                     <p className="text-white text-xs font-semibold">
                        @fcdinamo
                     </p>
                  </Link>
                  <Link href={"#"} className="p-3 pr-20 bg-[#b00]">
                     <FaYoutube className="text-[35px] mb-3" />
                     <p className="text-white text-xs font-medium">FC Dinamo</p>
                     <p className="text-white text-xs font-semibold">
                        @fcdinamo
                     </p>
                  </Link>
               </div>
            </div>
         </div>
         <footer className="bg-[#0f2145] text-white py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               <div>
                  <Link href={"/"}>
                     <Image
                        className="w-20"
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        priority
                     />
                  </Link>
                  <h2 className="text-2xl font-bold mt-3 text-white">
                     FC Dinamo
                  </h2>
                  <p className="mt-2 text-gray-400"></p>
               </div>

               {/* Быстрые ссылки */}
               <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                     Навигация
                  </h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="/"
                           className="hover:text-yellow-600 transition"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/players"
                           className="hover:text-yellow-600 transition"
                        >
                           Players
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/players"
                           className="hover:text-yellow-600 transition"
                        >
                           U19
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/players"
                           className="hover:text-yellow-600 transition"
                        >
                           U23
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                     Навигация
                  </h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="/news"
                           className="hover:text-yellow-600 transition"
                        >
                           News
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/photos"
                           className="hover:text-yellow-600 transition"
                        >
                           Photos
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="hover:text-yellow-600 transition"
                        >
                           History
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/schedule"
                           className="hover:text-yellow-600 transition"
                        >
                           Schedule
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                     Навигация
                  </h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="/results"
                           className="hover:text-yellow-600 transition"
                        >
                           Results
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/standing"
                           className="hover:text-yellow-600 transition"
                        >
                           Standing
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="w-full h-1 my-10 max-md:my-6 bg-gradient-line" />
            <div className="text-center text-gray-500 text-sm">
               © {new Date().getFullYear()} FC Dinamo. Все права защищены.
            </div>
         </footer>
      </>
   );
};

export default Footer;
