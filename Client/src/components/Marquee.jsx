import React from "react";
import Marquee from "react-fast-marquee";
const ImageMarquee = ({ imagesarr = [] }) => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 ">
      <h1 className="text-center font-extralight my-3 text-3xl">
        Our company organizes events for other companies
      </h1>
      <Marquee>
        {imagesarr.map((image, index) => (
          <img
            key={index}
            src={image.Logo}
            alt={image.title}
            className=" ml-15 object-cover rounded-lg shadow-lg"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
