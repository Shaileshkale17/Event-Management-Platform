import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import EventCard from "./EventCard";
import { AnimatePresence, useInView } from "framer-motion";
const ImageMarquee = ({ imagesarr = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="overflow-hidden w-full bg-black  pb-5  "
      ref={ref}
      key={imagesarr.id || 1}>
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
                  image={image.image}
                  id={image.id}
                  linkURL={`event-Plan/${image.id}`}
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
