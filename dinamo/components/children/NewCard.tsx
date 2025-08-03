import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewCard = () => {
   return (
      <Link
         href={`/news/${1}`}
         className="relative flex flex-col transition-all duration-300 ease-in-out rounded-lg p-2 max-sm:p-1 hover:scale-105 hover:bg-white/10"
      >
         <Image
            className="w-full h-40 rounded-lg"
            src={`/hero.png`}
            width={1000}
            height={1000}
            alt="news"
            priority
         />
         <div className="mt-3 max-sm:mt-1.5">
            <h3 className="text-lg max-md:text-xs font-russo font-semibold leading-6 max-md:leading-4 tracking-wider line-clamp-3 text-white">
               Lorem ipsum dolor sit. Далеко-далеко за словесными горами в
               стране.
            </h3>
         </div>
      </Link>
   );
};

export default NewCard;
