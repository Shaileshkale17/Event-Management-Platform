import React from "react";
import imgs from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
const Landing_Card_RIgth = () => {
  return (
    <div className="flex flex-row gap-7 ">
      <img src={imgs} alt="h2" className="w-xl rounded-2xl" />
      <div className="flex flex-col flex-wrap w-3xl gap-2 ">
        <h2 className="font-extralight  text-3xl">
          Lorem ipsum dolor sit amet.
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In tempore
          ratione pariatur saepe veritatis excepturi sunt maiores voluptates.
          Fugiat commodi nulla perferendis sapiente voluptatem perspiciatis est
          vero consequuntur reiciendis! Eaque?
        </p>
      </div>
    </div>
  );
};

export default Landing_Card_RIgth;
