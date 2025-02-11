import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useRef } from "react";

const CardText = ({ Title, Description, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-7"
      key={id || 1}
      ref={ref}>
      <div className="flex flex-col gap-2 w-full h-full justify-center">
        <AnimatePresence mode="wait">
          {isInView && (
            <motion.h2
              key={id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="font-light text-xl md:text-2xl text-gray-400">
              {Title}
            </motion.h2>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isInView && (
            <motion.p
              key={id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 text-base md:text-md max-w-2xl">
              {Description}
              <hr className="text-gray-800" />
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardText;
