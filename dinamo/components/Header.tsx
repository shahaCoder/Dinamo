"use client";
import Image from "next/image";
import Link from "next/link";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
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
import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
   return (
      <header className="sticky top-0 w-full z-50">
         <div className="h-12 flex items-center bg-[#0474D8]">
            <div className="custom-container flex gap-5 items-center justify-end">
               <div className="flex items-center gap-3 group">
                  <Link
                     href={"/auth/log-in"}
                     className="flex items-center gap-2"
                  >
                     <div className="bg-[#0f2145] rounded-full p-1.5">
                        <CiUser className="text-white text-xl" />
                     </div>
                     <p className="text-sm font-bold font-russo tracking-widest group-hover:underline text-white">
                        Log In
                     </p>
                  </Link>
               </div>

               <Select>
                  <SelectTrigger className="py-1.5">
                     <GrLanguage />
                     <SelectValue placeholder="UZ" />
                  </SelectTrigger>
                  <SelectContent className="w-10">
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
            <div className="custom-container flex items-center max-sm:justify-between gap-7 max-lg:gap-2 relative text-white">
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
               <div className="flex items-center justify-between w-full max-sm:hidden">
                  <NavigationMenu viewport={false} className="">
                     <NavigationMenuList>
                        <NavigationMenuItem className="px-2">
                           <NavigationMenuLink
                              className="font-russo text-sm italic"
                              asChild
                           >
                              <Link href="#">Home</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger className="font-russo text-sm italic">
                              Matches
                           </NavigationMenuTrigger>
                           <NavigationMenuContent>
                              <NavigationMenuLink asChild>
                                 <Link href="/schedule">Schedule</Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                 <Link href="/results">Results</Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                 <Link href="/standings">Standings</Link>
                              </NavigationMenuLink>
                           </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="">
                           <NavigationMenuTrigger className="font-russo text-sm italic">
                              Team
                           </NavigationMenuTrigger>
                           <NavigationMenuContent className="">
                              <NavigationMenuLink className="text" asChild>
                                 <Link href="/players">Players</Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink className="text" asChild>
                                 <Link href="#">U19</Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink className="text" asChild>
                                 <Link href="#">U23</Link>
                              </NavigationMenuLink>
                           </NavigationMenuContent>
                        </NavigationMenuItem>
                     </NavigationMenuList>
                  </NavigationMenu>

                  <NavigationMenu viewport={false} className="">
                     <NavigationMenuList>
                        <NavigationMenuItem className="px-2">
                           <NavigationMenuLink
                              className="font-russo text-sm italic"
                              asChild
                           >
                              <Link href="/news">News</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="px-2">
                           <NavigationMenuLink
                              className="font-russo text-sm italic"
                              asChild
                           >
                              <Link href="/photos">Photos</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="px-2">
                           <NavigationMenuLink
                              className="font-russo text-sm italic"
                              asChild
                           >
                              <Link href="#">History</Link>
                           </NavigationMenuLink>
                        </NavigationMenuItem>
                     </NavigationMenuList>
                  </NavigationMenu>
               </div>

               <button className="max-sm:block hidden bg-[#0474D8] p-2 rounded-full">
                  <IoMenu className="text-[20px] text-white" />
               </button>
            </div>
         </div>

         <div className="w-full h-1 shadow bg-gradient-to-r from-[#fdc52c] from-40% to-60% to-[#0474D8]"></div>
      </header>
   );
};

export default Header;
