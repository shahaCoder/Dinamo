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

const Header = () => {
   return (
      <header>
         <div className="py-3 max-lg:py-2 bg-[#0474D8]">
            <div className="custom-container flex items-center justify-end">
               {/* <div className="flex items-center gap-5">
                  <Link href={"#"}>
                     <FaInstagram className="text-[25px] max-lg:text-[20px]" color="white" />
                  </Link>
                  <Link href={"#"}>
                     <FaInstagram className="text-[25px] max-lg:text-[20px]" color="white" />
                  </Link>
                  <Link href={"#"}>
                     <FaInstagram className="text-[25px] max-lg:text-[20px]" color="white" />
                  </Link>
               </div> */}

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
                  <div className="relative w-20 h-16">
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
                           <Link href="/" className="font-semibold">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link href="/players" className="font-semibold">
                              Players
                           </Link>
                        </li>
                        <li>
                           <Link href="/standings" className="font-semibold">
                              Standings
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>

               <nav className="max-md:hidden">
                  <ul className="flex items-center gap-10 max-lg:gap-5">
                     <li>
                        <Link href="/players" className="font-semibold">
                           Players
                        </Link>
                     </li>
                     <li>
                        <Link href="/players" className="font-semibold">
                           Players
                        </Link>
                     </li>
                     <li>
                        <Link href="/players" className="font-semibold">
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

         <div className="w-full h-2 max-lg:h-1 shadow bg-gradient-to-r from-[#0474D8] from-40% to-60% to-white"></div>
      </header>
   );
};

export default Header;
