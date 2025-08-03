import Image from "next/image";
import Link from "next/link";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";

import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import NewCard from "@/components/children/NewCard";
import PhotosCard from "@/components/children/PhotosCard";
import PlayerCard from "@/components/children/PlayerCard";

export default function Home() {
   return (
      <div className="">
         <div className="relative">
            <Image
               className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
               src={"/hero.png"}
               width={1000}
               height={1000}
               alt="img"
               priority
            />
            <div className="custom-container h-[60vh] max-md:h-[50vh] py-40 max-md:py-32 text-white">
               <div className="h-full flex flex-col justify-end">
                  <h2 className="text-4xl max-md:text-xl font-semibold font-russo tracking-wider">
                     Lorem ipsum dolor sit amet consectetur.
                  </h2>
                  <p className="text-lg max-md:text-sm font-manrope">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Saepe, cumque.
                  </p>
               </div>
            </div>
         </div>

         <div className="custom-container -translate-y-28">
            <div className="flex max-md:flex-col justify-center gap-16 max-md:gap-7 px-16 max-lg:px-5 max-sm:px-3 py-5 shadow-md bg-white">
               <div className="md:w-1/2 flex flex-col items-center">
                  <div className="text-center">
                     <h3 className="text-2xl max-md:text-xl font-semibold font-russo italic">
                        MATCHES
                     </h3>
                     <p className="max-md:text-xs font-light">Superliga</p>
                     <p className="font-semibold text-sm">Matchday 1</p>
                     <p className="text-xs">23 August 2025 23:45</p>
                     <p className="text-xs">FC Dinamo Stadium</p>
                  </div>
                  <div className="flex items-center justify-around w-full my-5">
                     <div className="">
                        <Image
                           className="max-md:w-16"
                           src="/logo.png"
                           width={85}
                           height={85}
                           alt="logo"
                        />
                        <p className="text-xl max-md:text-base max-sm:text-sm font-semibold text-center uppercase mt-3">
                           Dinamo
                        </p>
                     </div>
                     <p className="text-3xl maxmd:text-2xl font-russo italic">
                        VS
                     </p>
                     <div className="">
                        <Image
                           className="max-md:w-16"
                           src="/logo.png"
                           width={85}
                           height={85}
                           alt="logo"
                        />
                        <p className="text-xl max-md:text-base max-sm:text-sm font-semibold text-center uppercase mt-3">
                           Dinamo
                        </p>
                     </div>
                  </div>
                  <Link
                     href={"/schedule"}
                     className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]"
                  >
                     See all matches
                  </Link>
               </div>
               <hr className="border-none w-[1px] max-md:w-full h-auto max-md:h-[1px] bg-gray-300" />
               <div className="md:w-1/2 flex flex-col items-center bg-white">
                  <h3 className="text-2xl max-md:text-xl font-russo font-semibold text-center italic mb-2">
                     Standings
                  </h3>
                  <Table className="mb-5">
                     <TableHeader>
                        <TableRow>
                           <TableHead></TableHead>
                           <TableHead>Superliga</TableHead>
                           <TableHead>Pts</TableHead>
                           <TableHead className="text-center">P</TableHead>
                           <TableHead className="text-right">GD</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {[0, 1, 2, 3].map((item: number) => (
                           <TableRow key={item}>
                              <TableCell className="text-xl font-medium font-russo text-[#0474D8]">
                                 {item + 1}
                              </TableCell>
                              <TableCell className="flex items-center gap-2">
                                 <img
                                    src={"/logo.png"}
                                    className="w-8"
                                    alt="logo"
                                 />
                                 <p className="font-bold">DINAMO</p>
                              </TableCell>
                              <TableCell className="font-medium">32</TableCell>
                              <TableCell className="text-center font-light">
                                 32
                              </TableCell>
                              <TableCell className="text-right font-light">
                                 10
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
                  <Link
                     href={"/standings"}
                     className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]"
                  >
                     See all standings
                  </Link>
               </div>
            </div>
         </div>

         <section className="bg-[#0f2145] text-white pt-12 px-4 sm:px-8 md:px-16 overflow-hidden">
            <div className="custom-container">
               <h2 className="text-2xl sm:text-4xl font-bold font-russo mb-10 max-md:mb-28 text-center z-20 relative">
                  Лучший игрок месяца
               </h2>
               <div className="mx-auto relative z-10 flex  md:items-end justify-around">
                  <div className="liquid-bg" />
                  <div className="py-10 max-md:absolute -top-28 -left-5">
                     <p className="text-2xl font-medium">Fransisko</p>
                     <p className="text-7xl max-lg:text-5xl font-russo italic uppercase">
                        Jurani
                     </p>
                     <p className="text-white text-sm mt-2">Midfielders</p>
                  </div>
                  <div className="w-2/4 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full h-full mx-auto">
                     <p className="w-max px-32 absolute -z-10 top-1/2 left-2/5 max-lg:top-1/4 max-md:left-2/5 -translate-x-1/2 -translate-y-1/2 text-[700px] max-xl:text-[600px] max-lg:text-[500px] max-sm:text-[400px] font-russo italic bg-gradient-to-b from-[#fdc52c95] from-30% to-70% to-transparent bg-clip-text text-transparent select-none pointer-events-none">
                        7
                     </p>
                     <Image
                        className="w-full h-full"
                        src="/jurani.png"
                        alt="Лучший игрок"
                        width={1000}
                        height={1000}
                     />
                  </div>
               </div>
            </div>
         </section>

         <div className="custom-container mt-20">
            <div className="flex items-end gap-5 mb-10 max-md:mb-5">
               <h2 className="text-4xl max-md:text-2xl font-semibold font-russo italic">
                  Next Events
               </h2>
               <hr className="bg-[#fdc52c] h-8 w-0.5 border-none" />
               <Link
                  href={"/news"}
                  className="text-xl max-md:text-base font-medium text-[#fdc52c]"
               >
                  See More
               </Link>
            </div>

            <Carousel>
               <CarouselContent className="-ml-4">
                  {[0, 1, 2, 3, 4, 5].map((item: number) => (
                     <CarouselItem
                        key={item}
                        className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                     >
                        <div className="bg-[#0f2145] rounded-2xl">
                           <div className="p-10">
                              <div className="flex items-center justify-between text-white">
                                 <div className="text-center">
                                    <Image
                                       className="w-16 h-16 max-md:h-14 max-md:w-14 mx-auto mb-2"
                                       src={`/logo.png`}
                                       width={48}
                                       height={48}
                                       alt="news"
                                    />
                                    <p className="max-md:text-sm font-semibold">
                                       Dinamo
                                    </p>
                                 </div>
                                 <p className="text-lg font-bold">VS</p>
                                 <div className="text-center">
                                    <Image
                                       className="w-16 h-16 max-md:h-14 max-md:w-14 mx-auto mb-2"
                                       src={`/logo.png`}
                                       width={48}
                                       height={48}
                                       alt="news"
                                    />
                                    <p className="max-md:text-sm font-semibold">
                                       Dinamo
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="bg-white p-5 rounded-xl">
                              <p className="text-sm mb-2">
                                 Futbol primer Equipo
                              </p>
                              <p className="text-2xl font-semibold font-russo italic mb-1">
                                 Superliga
                              </p>
                              <p className="text font-semibold mb-2">
                                 Matchday {item + 1}
                              </p>
                              <div className="flex items-center gap-2">
                                 <MdCalendarMonth className="text-gray-400 text-xl" />
                                 <p className="text-gray-700 max-sm:text-sm">
                                    Sunday, Aug 24, 9:30 PM h
                                 </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                 <HiOutlineLocationMarker className="text-gray-400 text-xl" />
                                 <p className="text-gray-700 max-sm:text-sm">
                                    FC Dinamo Stadium
                                 </p>
                              </div>
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>

               <CarouselPrevious className="max-xl:-left-4 max-sm:hidden" />
               <CarouselNext className="max-xl:-right-4 max-sm:hidden" />
            </Carousel>
         </div>

         <div className="bg-[#0f2145] mt-14 py-20">
            <div className="custom-container">
               <div className="flex items-end gap-5">
                  <h2 className="text-4xl max-md:text-2xl font-semibold font-russo italic text-white">
                     Latest news
                  </h2>
                  <hr className="bg-[#fdc52c] h-8 w-0.5 border-none" />
                  <Link
                     href={"/news"}
                     className="text-xl max-md:text-base font-medium text-[#fdc52c]"
                  >
                     See More
                  </Link>
               </div>

               <div className="mt-10 max-md:mt-7">
                  <div className="grid">
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-5 gap-x-5 max-lg:gap-x-2 max-sm:gap-x-0 gap-y-16 max-md:gap-y-10 max-sm:gap-y-7">
                        {Array.from({ length: 6 }, (_, index) => (
                           <NewCard key={index} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <section className="bg-[#0f2145]">
            <div className="custom-container pt-10 pb-20">
               <div className="flex items-end gap-5 mx-4">
                  <h2 className="text-4xl max-md:text-2xl font-semibold font-russo italic text-white">
                     Players
                  </h2>
                  <hr className="bg-[#fdc52c] h-8 w-0.5 border-none" />
                  <Link
                     href={"/players"}
                     className="text-xl max-md:text-base font-medium text-[#fdc52c]"
                  >
                     See More
                  </Link>
               </div>
               <div className="mt-10">
                  <Carousel className="">
                     <CarouselContent className="">
                        {[0, 1, 2, 3, 4, 5].map((item: number) => (
                           <CarouselItem
                              key={item}
                              className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                           >
                              <PlayerCard />
                           </CarouselItem>
                        ))}
                     </CarouselContent>

                     <CarouselPrevious className="max-xl:-left-4 max-sm:hidden" />
                     <CarouselNext className="max-xl:-right-4 max-sm:hidden" />
                  </Carousel>
               </div>
            </div>
         </section>

         <div className="custom-container mt-10 pb-10">
            <div className="flex items-end gap-5">
               <h2 className="text-4xl max-md:text-2xl font-semibold font-russo italic">
                  Photo Galleries
               </h2>
               <hr className="bg-[#fdc52c] h-7 w-[1px] border-none" />
               <Link
                  href={"#"}
                  className="text-xl max-md:text-base font-medium text-[#fdc52c]"
               >
                  See More
               </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-md:gap-x-2 mt-10 max-md:mt-7">
               {[...Array(4)].map((_, i) => (
                  <PhotosCard key={i} />
               ))}
            </div>
         </div>
      </div>
   );
}
