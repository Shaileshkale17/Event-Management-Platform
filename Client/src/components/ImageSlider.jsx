import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change slides every 8000ms

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="relative w-full overflow-hidden h-[49rem]  "
      style={{
        backgroundImage: `url(${slides[currentIndex]?.image})`,
      }}>
      <div
        className="absolute inset-0  bg-opacity-50 bg-cover bg-no-repeat bg-left opacity-75"
        style={{
          backgroundImage: `url(${slides[currentIndex]?.image})`,
        }}></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4 ">
            {slides[currentIndex]?.title}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`${currentIndex}-text`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl">
            {slides[currentIndex]?.text}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={`${currentIndex}-text`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl">
            {
              <Link to="/contact">
                <button className="cursor-pointer mt-3 py-2 px-6 border border-solid border-white hover:border-[#28475cac] rounded-2xl bg-[#28475cac] hover:bg-gray-800  text-white ">
                  Contact us
                </button>
              </Link>
            }
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
