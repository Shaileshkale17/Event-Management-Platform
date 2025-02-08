import React from "react";
import Landing_Card_Lift from "./Landing_Card_Lift";
import Landing_Card_RIgth from "./Landing_Card_RIgth";

const Card = () => {
  return (
    <div className="px-16 mt-3">
      <h1 className="text-center font-extralight my-3 text-3xl"> Events </h1>
      <Landing_Card_Lift />
      <Landing_Card_RIgth />
      <Landing_Card_Lift />
      <Landing_Card_RIgth />
    </div>
  );
};

export default Card;
