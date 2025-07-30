import Image from "next/image";
import React from "react";

// const Page = ({ params }: { params: { id: string } }) => {
//    return (
//       <div className="bg-[#0f2145]">
//          <div className="custom-container py-20">
//             <div className="">
//                <p className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
//                   FC Dinamo
//                </p>
//                <Image
//                   className=""
//                   src="/logo.png"
//                   width={60}
//                   height={60}
//                   alt="img"
//                />
//             </div>
//          </div>
//       </div>
//    );
// };
const Page = (props: any) => {
   const id = props?.params?.id;

   return (
      <div className="bg-[#0f2145]">
         <div className="custom-container py-20">
            <div>
               <p className="text-3xl max-md:text-2xl font-bold font-russo italic uppercase">
                  FC Dinamo — ID: {id}
               </p>
               <Image src="/logo.png" width={60} height={60} alt="img" />
            </div>
         </div>
      </div>
   );
};


export default Page;
