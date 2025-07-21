import Image from "next/image";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145] py-10">
         <div className="custom-container">
            <h1 className="text-[#fdc52c] text-4xl max-md:text-2xl font-bold text-center uppercase">
               FC Dinamo - First Team
            </h1>
         </div>
         <div className="bg-white rounded-xl mx-4 max-md:mx-2 p-10 max-lg:px-4 mt-10">
            <div className="max-w-7xl">
               <div className="flex items-center justify-between">
                  <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-bold uppercase">
                     FC Dinamo First Team
                  </h2>
                  <Image src="/logo.png" className="max-md:w-16" width={80} height={80} alt="dinamo" />
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
                           className="text-xs max-sm:text-[10px] font-bold uppercase px-4 py-2 rounded shadow cursor-pointer whitespace-nowrap
                   duration-200 ease-in-out bg-white hover:bg-[#154284] hover:text-white"
                        >
                           {item}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="mt-8">
                  <div className="mb-7">
                     <h2 className="text-3xl max-md:text-2xl font-bold uppercase text-center">
                        Goalkeepers
                     </h2>
                  </div>
                  <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-2">
                     {[0, 1, 2, 3].map((item) => (
                        <div
                           key={item}
                           className=" relative z-10 flex flex-col justify-end group overflow-hidden"
                        >
                           <div className="w-full h-full playrCard absolute z- top-0 left-0" />

                           <Image
                              className="w-full h-full object-cover"
                              src={"/balde.webp"}
                              width={1000}
                              height={1000}
                              alt="player"
                           />

                           <p className="text-8xl font-bold absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-white/30 transition-all duration-300 ease-in-out group-hover:-translate-y-24">
                              3
                           </p>

                           <div className="absolute bottom-4 left-0 w-full transition-all duration-300 ease-in-out group-hover:bottom-32 max-md:group-hover:bottom-28">
                              <p className="text-xl max-md:text-lg text-center mb-4 text-white">
                                 Alejandro{" "}
                                 <span className="text-3xl max-md:text-2xl font-bold uppercase">
                                    Balde
                                 </span>
                              </p>
                              <p className="text-xs font-bold text-center text-white">
                                 Defender
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
                                 <p className="text-[10px] font-bold text-gray-400">
                                    2025/2026
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                              <div className="text-center">
                                 <p className="text-[10px] max-lg:text-[8px] font-bold uppercase text-white">
                                    Dinamo Goals
                                 </p>
                                 <p className="text-2xl font-bold">3</p>
                                 <p className="text-[10px] font-bold text-gray-400">
                                    2025/2026
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                              <div className="text-center">
                                 <p className="text-[10px] max-lg:text-[8px] font-bold uppercase text-white">
                                    Dinamo Assists
                                 </p>
                                 <p className="text-2xl font-bold">15</p>
                                 <p className="text-[10px] font-bold text-gray-400">
                                    2025/2026
                                 </p>
                                 <p className="text-[#fdc52c] text-xl font-bold">
                                    0
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
