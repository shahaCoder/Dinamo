import NewCard from "@/components/children/NewCard";
import Image from "next/image";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
   return (
      <div className="">
         <img
            className="w-full h-[100vh] max-md:h-[73vh] fixed -z-10 top-24 left-0 object-cover object-[30%]"
            src={`https://www.fcbarcelona.com/photo-resources/2025/07/23/46bfa46b-a72b-4035-b2bb-21ccfdead47b/16x9_TRANSFER_RASHFORD_2025.png?width=1280&height=800`}
            alt="news"
         />
         <div className="w-8 h-80 max-md:w-5 max-md:h-60 fixed -z-10 left-0 top-1/5 bg-[#154284]" />
         <div className="w-8 h-80 max-md:w-5 max-md:h-60 fixed -z-10 right-0 top-1/2 bg-[#fdc52c]" />
         <div className="h-[70vh]"></div>
         <div className="bg-white rounded-t-2xl mt-auto px-4">
            <div className="max-w-2xl mx-auto py-10">
               <h2 className="text-4xl max-md:text-3xl max-md:leading-8 font-russo italic bg-gradient-to-r from-[#000428] to-[#004e92] bg-clip-text text-transparent">
                  Como ninth Italian opponents in the Gamper. Далеко-далеко за
                  словесными горами в стране.
               </h2>
               <p className="text-lg max-md:text-base max-sm:text-sm font-light mt-4">
                  The English striker comes to the blaugranes on loan until 30
                  June 2026
               </p>

               <p className="mt-10 font-light first-letter:pr-1 first-letter:text-8xl first-letter:float-left first-letter:font-black font- first-letter:text-[#004e92]">
                  FC Barcelona and Manchester United have reached an agreement
                  for the loan of the player Marcus Rashford until 30 June 2026.
                  The agreement also establishes an option to buy the English
                  forward. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Magni tempora fugit voluptates id quae reprehenderit
                  corrupti vitae inventore! Quisquam assumenda deleniti, odio
                  maiores aliquam quo vel vitae perspiciatis alias unde
                  voluptatum dolorum accusantium tempora, distinctio officia!
                  Facilis dolores odit architecto, cupiditate eius, eos veniam
                  mollitia in atque quas, temporibus sequi.
               </p>

               <img
                  className="w-full h-full my-10"
                  src={`https://www.fcbarcelona.com/photo-resources/2025/07/23/46bfa46b-a72b-4035-b2bb-21ccfdead47b/16x9_TRANSFER_RASHFORD_2025.png?width=1280&height=800`}
                  alt=""
               />

               <h3 className="text-2xl font-semibold text-[#004e92]">
                  27 July first game
               </h3>
               <p>
                  The tour starts on Friday 25 July with the flight to Japan. On
                  Sunday 27 July the blaugranes meet Vissel Kobe in the Noevir
                  Kobe Stadium, kick off 7pm local time, 12pm CEST. On Thursday
                  31 July the team face FC Seoul, the first of two games in
                  South Korea with the second against Daegu FC on 4 August.
               </p>

               <div className="flex gap-5 items-center mt-10">
                  <hr className="w-full h-[0.5px] border-none bg-[#004e92]" />
                  <Image src={"/logo.png"} width={50} height={50} alt="logo" />
                  <hr className="w-full h-[0.5px] border-none bg-[#004e92]" />
               </div>
            </div>
         </div>
         <div className="bg-[#0f2145]">
            <div className="custom-container pt-10">
               <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-russo text-center text-white">
                  Related to this article
               </h2>
               <div className="mt-10 max-md:mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 max-lg:gap-x-2 max-sm:gap-x-0 gap-y-16 max-md:gap-y-10 max-sm:gap-y-7">
                  {Array.from({ length: 2 }, (_, index) => (
                     <NewCard key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
