import Image from "next/image";

const Page = () => {
   return (
      <div className="bg-[#0f2145]">
         <div className="custom-container pt-28 pb-40">
            <div className="flex flex-col items-center justify-center">
               <p className="text-[#fdc52c] text-3xl max-md:text-2xl font-bold font-russo uppercase">
                  Mon 04 Aug
               </p>
               <div className="flex gap-4 mt-2 text-white">
                  <p className="text-lg font-semibold font-russo ">
                     Match countdown
                  </p>
                  <div className="flex items-center justify-center gap-2">
                     <div className="">
                        <p className="text-4xl font-extrabold font-manrope mb-1">
                           04
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           days
                        </p>
                     </div>
                     <p className="text-4xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl font-extrabold font-manrope mb-1">
                           15
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           hours
                        </p>
                     </div>
                     <p className="text-4xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl font-extrabold font-manrope mb-1">
                           42
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           mins
                        </p>
                     </div>
                     <p className="text-4xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl font-extrabold font-manrope mb-1">
                           32
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           secs
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-between mt-14">
               <div className="w-[40%] flex items-center justify-end gap-5">
                  <p className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase text-white">
                     FC Barcelona
                  </p>
                  <Image src="/logo.png" width={100} height={100} alt="Logo" />
               </div>
               <div className="flex flex-col justify-center gap-3 text-center">
                  <p className="text-sm font-extrabold text-[#fdc52c]">
                     Kickoff CEST
                  </p>
                  <p className="text-6xl font-russo text-white">13:00</p>
               </div>
               <div className="w-[40%] flex items-center gap-5">
                  <Image src="/logo.png" width={100} height={100} alt="Logo" />
                  <p className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase text-white">
                     FC Real Madrid
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
