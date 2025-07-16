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
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Home() {
   return (
      <div className="">
         <div className="relative">
            <Image
               className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
               src={"/hero.png"}
               width={1000}
               height={1000}
               // fill
               alt="img"
               priority
            />
            <div className="custom-container h-[60vh] max-md:h-[50vh] py-40 text-white">
               <div className="h-full flex flex-col justify-end">
                  <h2 className="text-4xl max-md:text-xl font-semibold">
                     RICCI: "AT AC MILAN TO GROW AND IMPROVE"
                  </h2>
                  <p className="text-lg max-md:text-sm">
                     The new Rossoneri midfielder speaks to the media at Casa
                     Milan
                  </p>
               </div>
            </div>
         </div>

         <div className="custom-container -translate-y-28">
            <div className="flex max-md:flex-col justify-center gap-16 px-16 max-lg:px-5 max-sm:px-3 py-5 bg-white">
               <div className="md:w-1/2 flex flex-col items-center">
                  <div className="text-center">
                     <h3 className="text-2xl max-md:text-xl font-semibold">
                        MATCHES
                     </h3>
                     <p className="font-medium max-md:text-xs">Serie A</p>
                     <p className="font-semibold max-md:text-sm">Matchday 1</p>
                     <p className="text-sm max-md:text-xs">
                        23 August 2025 23:45
                     </p>
                     <p className="text-sm max-md:text-xs">San Siro Stadium</p>
                  </div>
                  <div className="flex items-center justify-between w-full my-5">
                     <div className="">
                        <Image
                           className="max-md:w-16"
                           src="/logo.png"
                           width={85}
                           height={85}
                           alt="logo"
                        />
                        <p className="text-xl max-md:text-base font-semibold text-center uppercase mt-3">
                           Dinamo
                        </p>
                     </div>
                     <p className="text-3xl maxmd:text-2xl font-semibold">VS</p>
                     <div className="">
                        <Image
                           className="max-md:w-16"
                           src="/logo.png"
                           width={85}
                           height={85}
                           alt="logo"
                        />
                        <p className="text-xl max-md:text-base font-semibold text-center uppercase mt-3">
                           Dinamo
                        </p>
                     </div>
                  </div>
                  <Link
                     href={"#"}
                     className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]"
                  >
                     See all matches
                  </Link>
               </div>
               <div className="md:w-1/2 flex flex-col items-center bg-white">
                  <h3 className="text-2xl max-md:text-xl font-semibold text-center">
                     Standings
                  </h3>
                  <Table className="mb-5">
                     <TableHeader>
                        <TableRow>
                           <TableHead></TableHead>
                           <TableHead>Serie A</TableHead>
                           <TableHead>Pts</TableHead>
                           <TableHead className="text-center">P</TableHead>
                           <TableHead className="text-right">GD</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {[0, 1, 2, 3].map((item: number) => (
                           <TableRow key={item}>
                              <TableCell className="text-xl font-medium text-[#0474D8]">
                                 {item + 1}
                              </TableCell>
                              <TableCell className="flex items-center gap-2">
                                 <img
                                    src={"/logo.png"}
                                    className="w-8"
                                    alt="logo"
                                 />
                                 <p className="font-semibold">DINAMO</p>
                              </TableCell>
                              <TableCell>0</TableCell>
                              <TableCell className="text-center">0</TableCell>
                              <TableCell className="text-right">0</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
                  <Link
                     href={"#"}
                     className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]"
                  >
                     See all standings
                  </Link>
               </div>
            </div>
         </div>

         <div className="custom-container">
            <h2 className="text-4xl max-md:text-2xl font-semibold mb-10 max-md:mb-5">
               Next Events
            </h2>

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
                                       className="w-12 h-12 mx-auto mb-2"
                                       src={`/logo.png`}
                                       width={48}
                                       height={48}
                                       alt="news"
                                    />
                                    <p>Dinamo</p>
                                 </div>
                                 <p className="text-lg font-bold">VS</p>
                                 <div className="text-center">
                                    <Image
                                       className="w-12 h-12 mx-auto mb-2"
                                       src={`/logo.png`}
                                       width={48}
                                       height={48}
                                       alt="news"
                                    />
                                    <p>Dinamo</p>
                                 </div>
                              </div>
                           </div>
                           <div className="bg-white p-5 rounded-xl">
                              <p className="text-sm mb-2">
                                 Futbol primer Equipo
                              </p>
                              <p className="text-2xl font-semibold mb-1">
                                 La Liga
                              </p>
                              <p className="text font-semibold mb-2">
                                 Matchday {item + 1}
                              </p>
                              <div className="flex items-center gap-2">
                                 <MdCalendarMonth className="text-gray-400 text-xl" />
                                 <p className="text-gray-700 font-medium">
                                    Sunday, Aug 24, 9:30 PM h
                                 </p>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                 <HiOutlineLocationMarker className="text-gray-400 text-xl" />
                                 <p className="text-gray-700 font-medium">
                                    Estadio Santiago Bernabeu
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

         <div className="custom-container mt-20">
            <div className="flex items-end gap-5">
               <h2 className="text-4xl max-md:text-2xl font-semibold">
                  Latest news
               </h2>
               <hr className="bg-black h-7 w-[1px]" />
               <Link
                  href={"#"}
                  className="text-xl max-md:text-base text-[#0474D8]"
               >
                  See More
               </Link>
            </div>

            <div className="mt-10">
               <div className="grid">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-md:gap-20">
                     <div className="relative">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={1000}
                           height={1000}
                           alt="news"
                           priority
                        />
                        <div className="w-[90%] mx-auto py-2 px-3 -translate-y-10 bg-white">
                           <p className="text-sm mb-2">13 July 2025</p>
                           <h3 className="text-xl max-sm:text-lg font-semibold">
                              OFFICIAL STATEMENT: ANDREA DI SIENA
                           </h3>
                        </div>
                     </div>
                     <div className="relative">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={1000}
                           height={1000}
                           alt="news"
                           priority
                        />
                        <div className="w-[90%] mx-auto py-3 px-3 -translate-y-10 bg-white">
                           <p className="text-sm mb-2">12 July 2025</p>
                           <h3 className="text-xl max-sm:text-lg font-semibold">
                              OFFICIAL STATEMENT: ANDREA DI SIENA
                           </h3>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-md:gap-20 mt-20">
                     <div className="relative">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={1000}
                           height={1000}
                           alt="news"
                           priority
                        />
                        <div className="w-[90%] mx-auto py-3 px-3 -translate-y-10 bg-white">
                           <p className="text-sm mb-2">13 July 2025</p>
                           <h3 className="text-xl max-sm:text-lg font-semibold">
                              OFFICIAL STATEMENT: ANDREA DI SIENA
                           </h3>
                        </div>
                     </div>
                     <div className="relative">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={1000}
                           height={1000}
                           alt="news"
                           priority
                        />
                        <div className="w-[90%] mx-auto py-3 px-3 -translate-y-10 bg-white">
                           <p className="text-sm mb-2">13 July 2025</p>
                           <h3 className="text-xl max-sm:text-lg font-semibold">
                              OFFICIAL STATEMENT: ANDREA DI SIENA
                           </h3>
                        </div>
                     </div>
                     <div className="relative">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={1000}
                           height={1000}
                           alt="news"
                           priority
                        />
                        <div className="w-[90%] mx-auto py-3 px-3 -translate-y-10 bg-white">
                           <p className="text-sm mb-2">12 July 2025</p>
                           <h3 className="text-xl max-sm:text-lg font-semibold">
                              OFFICIAL STATEMENT: ANDREA DI SIENA
                           </h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-32 mb-20 bg-white">
            <div className="custom-container py-10">
               <div className="flex items-end gap-5">
                  <h2 className="text-4xl max-md:text-2xl font-semibold">
                     Videos
                  </h2>
                  <hr className="bg-black h-7 w-[1px]" />
                  <Link
                     href={"#"}
                     className="text-xl max-md:text-base text-[#0474D8]"
                  >
                     Watch More
                  </Link>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                  {/* Главный блок на всю ширину на мобилке */}
                  <Link
                     href={"#"}
                     className="sm:col-span-2 sm:row-span-2 group overflow-hidden"
                  >
                     <div className="h-[60vw] md:h-[60%] overflow-hidden">
                        <Image
                           className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                           src={"/hero.png"}
                           width={1000}
                           height={1000}
                           alt="video"
                        />
                     </div>
                     <div className="bg-[#0474D8] h-full py-6 px-4 md:py-10 md:px-3">
                        <p className="text-white text-xs md:text-sm">
                           13 July 2025
                        </p>
                        <h3 className="text-white text-xl md:text-3xl max-sm:text-lg font-semibold leading-snug mt-2 md:mt-3">
                           Away Kit 2025/26: the backstage
                        </h3>
                     </div>
                  </Link>

                  {/* Остальные карточки — в колонку на мобилке, в сетку на десктопе */}
                  {[0, 1, 2, 3].map((item: number) => (
                     <Link
                        href={"#"}
                        key={item}
                        className="group overflow-hidden"
                     >
                        <div className="h-[60vw] sm:h-[60%] overflow-hidden">
                           <Image
                              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                              src={"/hero.png"}
                              width={1000}
                              height={1000}
                              alt="video"
                           />
                        </div>
                        <div className="bg-[#0474D8] h-full py-4 px-4 md:py-2 md:px-3">
                           <p className="text-white text-xs">13 July 2025</p>
                           <h3 className="text-white text-lg md:text-lg font-semibold leading-5 mt-1">
                              Away Kit 2025/26: the backstage
                           </h3>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

            <div className="custom-container mt-10 pb-10">
               <div className="flex items-end gap-5">
                  <h2 className="text-4xl max-md:text-2xl font-semibold">
                     Photo Galleries
                  </h2>
                  <hr className="bg-black h-7 w-[1px]" />
                  <Link
                     href={"#"}
                     className="text-xl max-md:text-base text-[#0474D8]"
                  >
                     See More
                  </Link>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                  {[...Array(4)].map((_, i) => (
                     <Link
                        key={i}
                        href={"#"}
                        className="relative h-[250px] sm:h-[250px] lg:h-[280px] overflow-hidden group"
                     >
                        {/* Фон */}
                        <Image
                           src="/hero.png"
                           alt={`section bg ${i}`}
                           fill
                           className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />

                        {/* Затемнение */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                        {/* Текст */}
                        <div className="absolute inset-0 flex flex-col items-start justify-end px-5 py-10 z-10">
                           <p className="text-white text-xs sm:text-sm">
                              13 July 2025
                           </p>
                           <h3 className="text-white text-xl font-semibold mt-1">
                              History of the Academy
                           </h3>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>

         <div className="custom-container mt-20"></div>
      </div>
   );
}
