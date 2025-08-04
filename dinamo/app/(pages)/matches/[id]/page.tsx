import Image from "next/image";
import { IoIosFootball } from "react-icons/io";

const Page = () => {
   return (
      <div className="bg-[#0f2145] relative z-10">
         <img
            className="absolute aspect-[4/2] max-xl:aspect-[3/2] max-sm:aspect-[1/1.5] -z-10 top-0 left-0 w-full object-cover opacity-15"
            src="https://storage.yandexcloud.net/pfluz/post/1d0a084d-aea2-485c-84a2-df1e80bb84cf-106b1059-7a50-473b-9998-f73068fb7940.jpg"
            alt=""
         />
         <div className="w-full aspect-[4/2] max-xl:aspect-[3/2] max-sm:aspect-[1/1.5] bottom-0-0 left-0 absolute -z-10 bg-gradient-to-t from-[#0f2145] from-20% to-transparent to-60%" />
         <div className="custom-container pt-28 max-lg:pt-16 pb-40 max-lg:pb-28 hidden">
            <div className="flex flex-col items-center justify-center">
               <p className="text-[#fdc52c] text-3xl max-md:text-2xl max-sm:text-xl font-bold font-russo uppercase">
                  Mon 04 Aug
               </p>
               <div className="flex gap-4 mt-2 text-white">
                  <p className="text-lg max-sm:text-xs font-semibold font-russo ">
                     Match countdown
                  </p>
                  <div className="flex items-center justify-center gap-1">
                     <div className="">
                        <p className="text-4xl max-sm:text-2xl font-extrabold font-manrope text-center mb-1">
                           04
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           days
                        </p>
                     </div>
                     <p className="text-4xl max-sm:text-2xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl max-sm:text-2xl font-extrabold font-manrope text-center mb-1">
                           15
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           hours
                        </p>
                     </div>
                     <p className="text-4xl max-sm:text-2xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl max-sm:text-2xl font-extrabold font-manrope text-center mb-1">
                           42
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           mins
                        </p>
                     </div>
                     <p className="text-4xl max-sm:text-2xl font-medium">:</p>
                     <div className="">
                        <p className="text-4xl max-sm:text-2xl font-extrabold font-manrope text-center mb-1">
                           32
                        </p>
                        <p className="text-[10px] font-extrabold font-manrope text-center uppercase text-[#fdc52c]">
                           secs
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex gap-5 items-center justify-between mt-14">
               <div className="w-[40%] flex max-md:flex-col-reverse items-center justify-end gap-5 max-md:gap-3">
                  <p className="text-3xl max-lg:text-2xl max-md:text-sm font-bold font-russo italic uppercase text-white">
                     FC Dinamo
                  </p>
                  <Image
                     src="/logo.png"
                     className="max-lg:w-20 max-md:-16"
                     width={100}
                     height={100}
                     alt="Logo"
                  />
               </div>
               <div className="flex flex-col justify-center gap-3 text-center">
                  <p className="text-sm max-md:text-[10px] font-extrabold text-[#fdc52c]">
                     Kickoff CEST
                  </p>
                  <p className="text-6xl max-lg:text-5xl max-md:text-3xl font-russo text-white">
                     13:00
                  </p>
               </div>
               <div className="w-[40%] flex max-md:flex-col items-center gap-5 max-md:gap-3">
                  <Image
                     src="/logo.png"
                     className="max-lg:w-20 max-md:-16"
                     width={100}
                     height={100}
                     alt="Logo"
                  />
                  <p className="text-3xl max-lg:text-2xl max-md:text-sm font-bold font-russo italic uppercase text-white">
                     FC Paxtakor
                  </p>
               </div>
            </div>
         </div>
         <div className="custom-container pt-28 max-lg:pt-16 pb-40 max-lg:pb-28">
            <div className="flex gap-5 max-lg:gap-0 justify-between">
               <div className="w-[40%] mt-6 max-lg:mt-3 flex max-md:flex-col-reverse max-md:items-center justify-end gap-5 max-md:gap-3">
                  <div className="">
                     <p className="md:mt-6 text-2xl max-lg:text-xl max-md:text-sm font-bold font-russo italic uppercase max-md:text-center text-white">
                        FC Dinamo
                     </p>
                     <ul className="flex items-center max-md:justify-center gap-2 max-sm:gap-1 flex-wrap max-md:mt-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                           <li
                              className="flex gap-0.5 items-center text-xs text-white"
                              key={index}
                           >
                              <IoIosFootball className="text-[#fdc52c] " />
                              <p className="italic">85'</p>
                              <p className="font-russo">Jurani</p>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <Image
                     src="/logo.png"
                     className="w-20 h-20 max-md:w-16 max-md:h-16"
                     width={100}
                     height={100}
                     alt="Logo"
                  />
               </div>
               <div className="">
                  <p className="text-sm max-md:text-xs font-bold uppercase text-center text-white">
                     ft
                  </p>
                  <div className="h-fit flex justify-center gap-3 my-2 text-center text-5xl max-lg:text-3xl max-md:text-2xl font-russo font-black text-white bg-gradient-to-t from-[#181733] to-[#2c4481] py-3 px-4 max-lg:px-3 max-lg:py-2 max-sm:px-2 max-sm:py-1">
                     <p className="">5</p>
                     <p>-</p>
                     <p className="">0</p>
                  </div>
                  <p className="text-sm max-md:text-xs uppercase text-center text-white">
                     HT: <span className="font-bold ml-1">2-0</span>
                  </p>
               </div>
               <div className="w-[40%] mt-6 max-lg:mt-3 flex max-md:flex-col max-md:items-center gap-5 max-md:gap-2">
                  <Image
                     src="/logo.png"
                     className="w-20 h-20 max-md:w-16 max-md:h-16"
                     width={100}
                     height={100}
                     alt="Logo"
                  />
                  <div className="">
                     <p className="md:mt-6 text-2xl max-lg:text-xl max-md:text-sm font-bold font-russo italic uppercase max-md:text-center text-white">
                        FC Paxtakor
                     </p>
                     <ul className="flex items-center max-md:justify-center gap-2 max-sm:gap-1 flex-wrap max-md:mt-3">
                        {Array.from({ length: 0 }).map((_, index) => (
                           <li
                              className="flex gap-0.5 items-center text-xs text-white"
                              key={index}
                           >
                              <IoIosFootball className="text-[#fdc52c] " />
                              <p className="italic">85'</p>
                              <p className="font-russo">Jurani</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-[#f8f8f8] mx-4 max-md:mx-0 rounded-2xl">
            <div className="custom-container">
               <div className="max-w-xl mx-auto flex flex-col gap-10 relative z-10 py-10">
                  <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-6 w-0.5 h-[95%] rounded-full bg-[#fdc52c]" />

                  <div className="match-gradient relative z-10 rounded-sm overflow-hidden shadow-sm">
                     <div className="w-full h-full absolute -z-10 top-0 left-0 gradient" />
                     <img
                        className="w-full h-full object-cover absolute -z-20 top-0 left-0"
                        src="https://www.fcbarcelona.com/resources/v3.1.4-7218/i/bg-elements/stripes-white@x2.png"
                        alt="a"
                     />
                     <div className="flex items-center justify-between gap-4 py-2 px-2 border-b border-[#ffffff1a]">
                        <div className="flex items-center gap-4 max-md:gap-2">
                           <div className="rounded-full p-1 text-[#fdc52c] bg-white">
                              <p className="font-semibold text-sm">88'</p>
                           </div>
                           <p className="text-xl max-lg:text-lg max-md:text-sm font-russo font-bold italic uppercase text-white">
                              GOAL! DINAMO!!!!!
                           </p>
                        </div>
                        <div className="flex items-center gap-3 max-md:gap-2">
                           <Image
                              src={"/logo.png"}
                              width={30}
                              height={30}
                              alt="logo"
                           />
                           <div className="flex items-center gap-1 text-xl max-md:text-base font-black font-russo px-2.5 bg-[#fdc52c]">
                              <p className="text-white/70">2</p>
                              <p className="text-white">-</p>
                              <p className="text-white">3</p>
                           </div>
                           <Image
                              src={"/logo.png"}
                              width={30}
                              height={30}
                              alt="logo"
                           />
                        </div>
                     </div>
                     <div className="flex justify-between px-10 max-md:px-5">
                        <div className="pt-6 pb-24">
                           <p className="text-2xl max-md:text-xl font-medium text-white">
                              Latipov{" "}
                              <span className="font-russo italic"> Jony</span>
                           </p>
                        </div>
                        <div className="relative">
                           <p className="absolute -z-10 top-0 -right-0 max-md:-right-0 italic text-6xl max-md:text-5xl font-bold text-white/30">
                              7
                           </p>
                           <Image
                              className="w-full h-full object-cover"
                              src="/jurani.png"
                              width={100}
                              height={100}
                              alt="Logo"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="bg-[#403f4b] relative z-10 rounded-sm overflow-hidden shadow-sm">
                     <div className="w-full h-full absolute -z-10 top-0 left-0 match-gradient-black" />
                     <img
                        className="w-full h-full object-cover absolute -z-20 top-0 left-0"
                        src="https://www.fcbarcelona.com/resources/v3.1.4-7218/i/bg-elements/stripes-white@x2.png"
                        alt="a"
                     />
                     <div className="flex items-center justify-between gap-4 py-2 px-2 border-b border-[#ffffff1a]">
                        <div className="flex items-center gap-4 max-md:gap-2">
                           <div className="rounded-full p-1 text-[#fdc52c] bg-white">
                              <p className="font-semibold text-sm">88'</p>
                           </div>
                           <p className="text-xl max-lg:text-lg max-md:text-sm font-russo font-bold italic uppercase text-white">
                              GOAL . paxtakor .
                           </p>
                        </div>
                        <div className="flex items-center gap-3 max-md:gap-2">
                           <Image
                              src={"/logo.png"}
                              width={30}
                              height={30}
                              alt="logo"
                           />
                           <div className="flex items-center gap-1 text-xl max-md:text-base font-black font-russo px-2.5 bg-[#fdc52c]">
                              <p className="text-white">2</p>
                              <p className="text-white">-</p>
                              <p className="text-white/70">3</p>
                           </div>
                           <Image
                              src={"/logo.png"}
                              width={30}
                              height={30}
                              alt="logo"
                           />
                        </div>
                     </div>
                     <div className="flex justify-between px-10 max-md:px-5">
                        <div className="pt-6 pb-24">
                           <p className="text-2xl max-md:text-xl font-medium text-white">
                              Latipov{" "}
                              <span className="font-russo italic"> Jony</span>
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="relative z-10 rounded-sm overflow-hidden shadow-md bg-white">
                     <div className="flex items-center justify-between gap-4 py-2 px-2 border-b border-[#efefef]">
                        <div className="flex items-center gap-4 max-md:gap-2">
                           <div className="rounded-full p-1 text-[#fdc52c] border border-[#fdc52c]">
                              <p className="font-semibold text-sm">88'</p>
                           </div>
                           <p className="text-xl max-lg:text-lg max-md:text-sm font-russo font-bold italic uppercase">
                              Change for Dinamo
                           </p>
                        </div>
                     </div>
                     <div className="flex justify-between px-10 max-md:px-5">
                        <div className="pt-6 pb-24">
                           <p className="text-sm font-manrope">ON: Jony</p>
                           <p className="text-sm font-manrope">OFF: Shokha</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
