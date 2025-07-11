import Image from "next/image";

export default function Home() {
   return (
      <div className="">
         <div className="relative">
            <Image
               className="absolute -z-10 top-0 left-0 wfull h-full object-cover"
               src={"/hero.png"}
               // width={100}
               // height={100}
               fill
               alt="img"
               priority
            />
            <div className="custom-container py-48 text-white">
               <div className="">
                  <h1 className="text-6xl font-bold">Welcome to Dinamo</h1>
                  <p className="text-3xl mt-4">
                     The official website of Dinamo
                  </p>
                  <button className="py-2 px-8 text-lg mt-16 bg-[#0474D8]">
                     Get Started
                  </button>
               </div>
            </div>
         </div>

         <div className="custom-container mt-20">
            <h2 className="text-4xl font-bold text-center mb-10">
               Dinamo News
            </h2>
            <div className="grid grid-cols-3 gap-2">
               {[0, 1, 2, 3, 4, 5].map((item: number) => (
                  <div key={item} className="border border-[#efefef]">
                     <div className="">
                        <Image
                           className="w-full h-full"
                           src={`/hero.png`}
                           width={100}
                           height={100}
                           alt="img"
                           priority
                        />
                     </div>
                     <div className="p-2">
                        <h3 className="text-2xl font-semibold text-center mb-10">
                           A very blaugrana Euro 2025 begins
                        </h3>
                        <div className="flex items-center justify-between">
                           <p className="font-bold text-xs text-red-600">
                              CLUB
                           </p>
                           <p className=" text-xs">4 hrs ago</p>
                        </div>
                        {/* <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Suscipit et maiores ut repellat, culpa ad alias
                           voluptate dolores accusantium exercitationem modi
                           aspernatur facere deleniti, dolorem tempore itaque
                           nulla fugit vitae!
                        </p> */}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="custom-container mt-20"></div>
      </div>
   );
}
