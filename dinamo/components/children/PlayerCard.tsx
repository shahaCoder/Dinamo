import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlayerCard = () => {
   return (
      <Link
         href={`/players/1`}
         className=" relative z-10 flex flex-col justify-end group overflow-hidden bg-gradient-to-br from-[#154184cb] via-[#1e5f91b6] to-[#168aadb7]"
      >
         <div className="w-full h-full playrCard absolute z- top-0 left-0" />

         <Image
            className="w-full h-full object-cover"
            src={"/jurani.png"}
            width={1000}
            height={1000}
            alt="player"
         />

         <p className="text-8xl font-bold absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-white/30 transition-all duration-300 ease-in-out group-hover:-translate-y-24">
            7
         </p>

         <div className="absolute bottom-4 left-0 w-full transition-all duration-300 ease-in-out group-hover:bottom-32 max-md:group-hover:bottom-28">
            <p className="text-xl italic max-md:text-lg text-center mb-4 text-white">
               Fransisko{" "}
               <span className="text-3xl max-md:text-2xl font-bold font-russo uppercase">
                  Jurani
               </span>
            </p>
            <p className="text-xs font-bold text-center text-white">
               Midfielders
            </p>
         </div>

         <div
            className="text-white w-[95%] flex items-center justify-around pt-2 mt-4 absolute left-1/2 -translate-x-1/2 border-t border-gray-400 
               opacity-0 translate-y-full group-hover:opacity-100 group-hover:-translate-y-2
               transition-all duration-300 ease-in-out"
         >
            <div className="text-center">
               <p className="text-[10px] max-lg:text-[8px] font-bold uppercase text-white">
                  Dinamo Games
               </p>
               <p className="text-2xl font-bold">126</p>
               <p className="text-[10px] font-bold text-gray-400">2025/2026</p>
               <p className="text-[#fdc52c] text-xl font-bold">0</p>
            </div>
            <div className="text-center">
               <p className="text-[10px] max-lg:text-[8px] font-bold uppercase text-white">
                  Dinamo Goals
               </p>
               <p className="text-2xl font-bold">3</p>
               <p className="text-[10px] font-bold text-gray-400">2025/2026</p>
               <p className="text-[#fdc52c] text-xl font-bold">0</p>
            </div>
            <div className="text-center">
               <p className="text-[10px] max-lg:text-[8px] font-bold uppercase text-white">
                  Dinamo Assists
               </p>
               <p className="text-2xl font-bold">15</p>
               <p className="text-[10px] font-bold text-gray-400">2025/2026</p>
               <p className="text-[#fdc52c] text-xl font-bold">0</p>
            </div>
         </div>
      </Link>
   );
};

export default PlayerCard;
