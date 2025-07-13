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
                     <h3 className="text-2xl max-md:text-xl font-semibold">MATCHES</h3>
                     <p className="font-medium max-md:text-xs">Serie A</p>
                     <p className="font-semibold max-md:text-sm">Matchday 1</p>
                     <p className="text-sm max-md:text-xs">23 August 2025 23:45</p>
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
                  <Link href={"#"} className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]">
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
                  <Link href={"#"} className="mt-auto max-md:text-sm underline underline-offset-1 text-[#0474D8]">
                     See all standings
                  </Link>
               </div>
            </div>
         </div>

         <div className="custom-container">
            <h2>Next Events</h2>

            <div className="">
               <Carousel>
                  <CarouselContent className="">
                     {[0, 1, 2, 3, 4, 5].map((item: number) => (
                        <CarouselItem key={item} className="basis-1/3">
                           {item}
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  {/* <CarouselPrevious />
                  <CarouselNext /> */}
               </Carousel>
            </div>
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
                  <div className="">
                     <div className=""></div>
                  </div>
               </div>
            </div>
         </div>

         <div className="custom-container mt-20">
            <h2 className="text-4xl font-bold text-center mb-10">
               Dinamo News
            </h2>
            <div className="grid grid-cols-3 gap-2">
               {[0, 1, 2, 3, 4, 5].map((item: number) => (
                  <div key={item} className="border border-[#efefef]">
                     <div className="">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={100}
                           height={100}
                           alt="img"
                           priority
                        />
                     </div>
                     <div className="p-2">
                        <h3 className="text-2xl font-semibold text-center mb-10">
                           A very blaugrana Euro 2025 begins
                        </h3>
                        <div className="flex items-center justify-between">
                           <p className="font-bold text-xs text-red-600">
                              CLUB
                           </p>
                           <p className=" text-xs">4 hrs ago</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="custom-container mt-20"></div>
      </div>
   );
}
