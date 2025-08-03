import PlayerCard from "@/components/children/PlayerCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] py-10">
         <div className="custom-container">
            <h1 className="text-[#fdc52c] text-4xl max-md:text-2xl font-bold font-russo text-center uppercase">
               FC Dinamo - First Team
            </h1>
         </div>
         <div className="bg-white rounded-xl mx-4 max-md:mx-2 p-10 max-lg:px-4 mt-10">
            <div className="max-w-7xl mx-auto">
               <div className="flex items-center justify-between">
                  <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-bold font-russo uppercase italic">
                     FC Dinamo First Team
                  </h2>
                  <Image
                     src="/logo.png"
                     className="max-md:w-16"
                     width={80}
                     height={80}
                     alt="dinamo"
                  />
               </div>
               <div className="mt-7 overflow-x-auto mx-auto py-2">
                  <div className="flex items-center justify-center gap-2 px-2 w-max sm:w-full flex-nowrap">
                     {[
                        "Goalkeepers",
                        "Defenders",
                        "Midfielders",
                        "Forwards",
                        "Coaching staff",
                     ].map((item) => (
                        <button
                           key={item}
                           className="text-xs max-sm:text-[10px] font-bold font-russo uppercase px-4 py-2 rounded shadow cursor-pointer whitespace-nowrap duration-200 ease-in-out bg-white hover:bg-[#154284] hover:text-white"
                        >
                           {item}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="mt-8">
                  <div className="mb-7">
                     <h2 className="text-3xl max-md:text-2xl font-bold font-russo uppercase text-center">
                        Goalkeepers
                     </h2>
                  </div>
                  <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-2">
                     {[0, 1, 2, 3].map((item) => (
                        <PlayerCard key={item} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
