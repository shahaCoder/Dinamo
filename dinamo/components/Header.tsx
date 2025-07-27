import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Header = () => {
   return (
      <header className="fixed top-0 left-0 w-full z-50">
         <div className="h-12 flex items-center bg-[#0474D8]">
            <div className="custom-container flex gap-5 items-center justify-end">
               <div className="flex items-center gap-3 group">
                  <Link href={"#"} className="flex items-center gap-2">
                     <div className="bg-[#0f2145] rounded-full p-1.5">
                        <CiUser className="text-white text-xl" />
                     </div>
                     <p className="text-sm font-bold group-hover:underline text-white">LogIn</p>
                  </Link>
               </div>

               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder="UZ" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem defaultChecked value="light">
                        UZ
                     </SelectItem>
                     <SelectItem value="dark">RU</SelectItem>
                     <SelectItem value="system">EN</SelectItem>
                  </SelectContent>
               </Select>
            </div>
         </div>

         <div className="bg-[#0f2145]">
            <div className="custom-container flex items-center justify-between relative text-white">
               <div className="flex items-center gap-7 max-lg:gap-5">
                  <div className="relative w-20 h-14">
                     <Link
                        href={"/"}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                     >
                        <Image
                           className="w-80 scale-200"
                           src="/logo.png"
                           alt="Logo"
                           width={100}
                           height={100}
                           priority
                        />
                     </Link>
                  </div>

                  <nav className="max-md:hidden">
                     <ul className="flex items-center gap-10 max-lg:gap-5">
                        <li>
                           <Link
                              href="/"
                              className="text-sm font-russo font-light italic"
                           >
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="/players"
                              className="text-sm font-russo font-light italic"
                           >
                              Players
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="/standings"
                              className="text-sm font-russo font-light italic"
                           >
                              Standings
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>

               <nav className="max-md:hidden">
                  <ul className="flex items-center gap-10 max-lg:gap-5">
                     <li>
                        <Link
                           href="/news"
                           className="text-sm font-russo font-light italic"
                        >
                           News
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/schedule"
                           className="text-sm font-russo font-light italic"
                        >
                           Schedule
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/players"
                           className="text-sm font-russo font-light italic"
                        >
                           Players
                        </Link>
                     </li>
                  </ul>
               </nav>
               <button className="max-md:block hidden bg-[#0474D8] p-2 rounded-full">
                  <IoMenu className="text-[20px] text-white" />
               </button>
            </div>
         </div>

         <div className="w-full h-1 shadow bg-gradient-to-r from-[#0474D8] from-40% to-60% to-[#fdc52c]"></div>
      </header>
   );
};

export default Header;
