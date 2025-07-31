"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);
   const arr = [
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/c3799087-8801-41a4-bbc0-1cf3908955b6/_MGA2505.jpg?width=862&height=1146",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/54d49aff-3797-4273-ba4e-586736c0f434/_MGA2560.jpg?width=862&height=1146",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/91d0b075-f879-4901-930e-1b1beac42fb4/_MGA2909.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/1581abbe-6fce-491f-a583-814c1c2b5c3d/_MGA2811.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/df4927bb-dde2-45dd-82aa-44e9a59a0f43/_MGA2566.jpg?width=862&height=1146",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/1581abbe-6fce-491f-a583-814c1c2b5c3d/_MGA2811.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/fe939366-938e-419e-84c3-9c542d4f9a29/_MGA2564.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/2c3e083e-c8f0-453f-988e-b2cdec3fc187/_MGA7974.jpg?width=431&height=573",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/20/49791382-a92a-4b20-b2ac-3b481ee2dc2b/_MGA2884.jpg?width=862&height=1146",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/e84e4085-0411-4b0a-aa70-cd3707c78b03/_MGA7749.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/02632dce-3d2e-4201-a6f2-de2fd2f067ff/_MGA7922.jpg?width=862&height=1146",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/d4f4a671-02c6-4a5f-8a91-209b5d762021/_GP12074.jpg?width=862&height=538",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/04f42892-aaa2-4049-99fc-a48e4c0bad70/_MGA7757.jpg?width=431&height=269",
      },
      {
         src: "https://www.fcbarcelona.com/photo-resources/2025/07/31/85da5ab4-86e8-4e9d-8f92-19a0c4cead5a/_MGA7991.jpg?width=431&height=573",
      },
   ];

   return (
      <>
         <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {arr.map((img, index) => (
               <img
                  key={index}
                  className="w-full mb-4 break-inside-avoid object-cover cursor-pointer"
                  src={img.src}
                  alt={`photo-${index}`}
                  onClick={() => {
                     setOpen(true);
                     setIndex(index);
                  }}
               />
            ))}
         </div>

         <Lightbox
            open={open}
            plugins={[Counter, Share, Thumbnails, Zoom]}
            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
            close={() => setOpen(false)}
            index={index}
            slides={arr}
         />
      </>
   );
};

export default Gallery;
