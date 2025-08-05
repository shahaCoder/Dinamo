import Image from "next/image";
import React from "react";
import {
   HiHandThumbDown,
   HiHandThumbUp,
   HiOutlineHandThumbDown,
   HiOutlineHandThumbUp,
} from "react-icons/hi2";

const CommentsCard = () => {
   return (
      <div className="flex gap-4 max-sm:gap-3">
         <div className="min-w-[55px] max-sm:min-w-[45px]">
            <Image
               className="w-full rounded-full"
               src={"/logo.png"}
               width={55}
               height={55}
               alt="logo"
            />
         </div>
         <div className="">
            <div className="flex items-center gap-2">
               <p className="max-sm:text-sm font-semibold text-[#004e92]">Latipov Jonibek</p>
               <p className="text-xs max-sm:text-[10px] text-[#aaa]">2 месяца назад</p>
            </div>
            <p className="text-sm font-manrope mt-1.5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
               nulla cupiditate itaque magni. Далеко-далеко, за словесными
               горами в стране гласных и согласных живут.
            </p>
            <div className="flex items-center gap-5 mt-3 px-5">
               <button className="cursor-pointer">
                  {/* <HiOutlineHandThumbUp className="text-[20px]" /> */}
                  <HiHandThumbUp className="text-[20px]" />
               </button>
               <button className="cursor-pointer">
                  <HiOutlineHandThumbDown className="text-[20px]" />
                  {/* <HiHandThumbDown className="text-[20px]" /> */}
               </button>
            </div>
         </div>
      </div>
   );
};

export default CommentsCard;
