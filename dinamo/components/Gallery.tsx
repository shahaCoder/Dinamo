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
         src: "/photo-1.jpg",
      },
      {
         src: "/photo-2.jpg",
      },
      {
         src: "/photo-3.jpg",
      },
      {
         src: "/photo-4.jpg",
      },
      {
         src: "/photo-5.jpg",
      },
      {
         src: "/photo-6.jpg",
      },
      {
         src: "/photo-7.jpg",
      },
      {
         src: "/photo-1.jpg",
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
