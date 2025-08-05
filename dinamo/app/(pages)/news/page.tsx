import NewCard from "@/components/children/NewCard";
import React from "react";

const Page = () => {
   return (
      <div className="bg-[#0f2145]">
         <div className="custom-container rounded-xl mx-4 max-md:mx-2 p-10 max-lg:px-4 pt-14">
            <h1 className="text-white text-5xl max-md:text-2xl font-bold font-russo tracking- uppercase">
               Latest News
            </h1>

            <div className="">
               <div className="mt-10">
                  <div className="grid">
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 max-lg:gap-x-2 max-sm:gap-x-0 gap-y-16 max-md:gap-y-10 max-sm:gap-y-7">
                        {Array.from({ length: 6 }, (_, index) => (
                           <NewCard key={index} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-center mt-10">
               <button
                  className="text-xs max-sm:text-[10px] font-bold uppercase px-4 py-2 rounded shadow cursor-pointer whitespace-nowrap
                   duration-200 ease-in-out bg-white hover:bg-[#0474D8] hover:text-white"
               >
                  Load more news
               </button>
            </div>
         </div>
      </div>
   );
};

export default Page;
