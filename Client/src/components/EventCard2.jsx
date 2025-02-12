import React from "react";
import { Link } from "react-router-dom";

const EventCard2 = ({ image, Title, id, starRating, description, linkURL }) => {
  const starRatingArr = Array.from(
    { length: starRating },
    (_, index) => `Star${index}`
  );
  console.log(starRatingArr);
  return (
    <div
      className="flex flex-col border border-solid border-white bg-[#00000052] items-center text-white gap-4  rounded-2xl   cursor-none "
      key={id}>
      <Link to={linkURL} key={id}>
        <img
          src={image}
          alt={Title}
          className="w-xs h-56 object-cover object-bottom rounded-tl-2xl rounded-tr-2xl cursor-pointer"
        />
        <div className="flex flex-col items-center">
          <h1 className=" cursor-pointer text-gray-400 mt-2">{Title}</h1>
          <p className=" cursor-pointer text-gray-400 mt-3">{description}</p>
          <div className="flex flex-row items-center pb-6">
            {starRatingArr.map(() => (
              <span class="fa fa-star checked text-amber-400"></span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard2;
