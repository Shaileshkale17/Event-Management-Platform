import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import EventCard from "./EventCard";
import { AnimatePresence, useInView } from "framer-motion";
const ImageMarquee = ({ imagesarr = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const inImageNotLoad =
    "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp";
  return (
    <div
      className="overflow-hidden w-full bg-black  pb-5  "
      ref={ref}
      key={imagesarr._id || 1}>
      <AnimatePresence mode="wait">
        {isInView && (
          <>
            <h1 className="text-center font-extralight my-3 text-3xl text-gray-300">
              Popular Event Plans
            </h1>
            <Marquee>
              {imagesarr.map((image, index) => (
                <EventCard
                  Title={image.title}
                  image={image.image || inImageNotLoad}
                  id={image._id}
                  linkURL={`event/${image._id}`}
                />
              ))}
            </Marquee>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageMarquee;
