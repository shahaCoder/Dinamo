import ResultsCard from "@/components/children/ResultsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] relative">
         <Image
            className="absolute top-0 left-0 w-full h-[70vh] max-md:h-[50vh] object-cover"
            src="/hero.png"
            width={1000}
            height={1000}
            alt="img"
         />
         <div className="w-full h-[70vh] max-md:h-[50vh] top-0 left-0 absolute bg-gradient-to-t from-[#0f2145] from-5% to-transparent to-50%"></div>
         <div className="h-[70vh] max-md:h-[50vh] w-full"></div>
         <div className="bg-white mx-4 max-md:mx-2 rounded-2xl">
            <div className="custom-container py-10">
               <h1 className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
                  First Team Schedule
               </h1>

               <div className="flex flex-col items-center justify-center mt-10 max-md:mt-6">
                  {Array.from({ length: 6 }, (_, index) => (
                     <ResultsCard key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
