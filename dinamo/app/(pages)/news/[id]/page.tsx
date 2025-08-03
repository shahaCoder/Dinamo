import NewCard from "@/components/children/NewCard";
import Image from "next/image";
import React from "react";

const Page = () => {
   return (
      <div className="">
         <img
            className="w-full md:h-[70vh] max-md:aspect-[3/2] sticky -z-10 top-[108px] object-cover"
            src={`/new.jpg`}
            alt="news"
         />
         <div className="w-8 h-80 max-md:w-3 max-md:h-32 fixed -z-10 left-0 top-1/5 bg-[#154284]" />
         <div className="w-8 h-80 max-md:w-3 max-md:h-32 fixed -z-10 right-0 top-1/2 max-md:top-1/3 bg-[#fdc52c]" />
         <div className="bg-white rounded-t-2xl mt-auto px-4">
            <div className="max-w-2xl mx-auto py-10">
               <h2 className="text-4xl max-md:text-3xl max-md:leading-8 font-russo italic bg-gradient-to-r from-[#000428] to-[#004e92] bg-clip-text text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing. Далеко-далеко за
                  словесными горами в стране.
               </h2>
               <p className="text-lg max-md:text-base max-sm:text-sm font-light mt-4">
                  The English striker comes to the blaugranes on loan until 30
                  June 2026
               </p>

               <p className="mt-10 font-light first-letter:pr-1 first-letter:text-8xl first-letter:float-left first-letter:font-black font- first-letter:text-[#004e92]">
                  FC Dinamo Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cupiditate eaque fugiat obcaecati nam fugit doloribus
                  laborum architecto rem necessitatibus rerum magnam modi iste
                  alias, laboriosam minima maxime voluptates dolor. Maiores
                  laboriosam assumenda vero accusamus quae neque nam aspernatur
                  quam debitis repellendus necessitatibus tempora, unde aut
                  accusantium eveniet voluptate aliquam placeat. Molestias neque
                  non hic! Odit, earum deleniti aspernatur nisi magnam inventore
                  nulla sint deserunt facilis nostrum enim, voluptatem maiores
                  harum modi pariatur distinctio commodi id? Qui, explicabo. Eum
                  sunt tempora quibusdam soluta veniam eius aspernatur
                  accusamus, optio voluptatem maiores quaerat assumenda nulla
                  repudiandae sed alias tempore recusandae deleniti amet
                  nostrum.
               </p>

               <img className="w-full h-full my-10" src={`/new.jpg`} alt="" />

               <h3 className="text-2xl font-semibold text-[#004e92]">
                  27 July first game
               </h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  porro explicabo rem in quo atque, laborum repellat, ab placeat
                  vel officiis suscipit minima provident! Aperiam ducimus earum
                  cupiditate porro ipsum, voluptatibus quasi, pariatur ex
                  aliquam voluptatem, qui voluptate? Similique quidem cum dolore
                  unde itaque velit fuga rem culpa? Sit, nam!
               </p>

               <div className="flex gap-5 items-center mt-10">
                  <hr className="w-full h-[0.5px] border-none bg-[#004e92]" />
                  <Image src={"/logo.png"} width={50} height={50} alt="logo" />
                  <hr className="w-full h-[0.5px] border-none bg-[#004e92]" />
               </div>
            </div>
         </div>
         <div className="bg-[#0f2145]">
            <div className="custom-container py-10">
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
