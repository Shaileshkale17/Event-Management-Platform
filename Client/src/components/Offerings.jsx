import React, { useEffect, useState } from "react";
import CardText from "./CardText";

const Offerings = () => {
  const [CardInfo, setCardInfo] = useState([]);
  const offerings = [
    {
      id: 1,
      title: "Event Planning",
      description:
        "We offer exceptional event planning services to make your special occasion unforgettable. From concept to execution, we ensure every detail is perfectly organized.",
    },
    {
      id: 2,
      title: "Catering Services",
      description:
        "Our premium catering services provide a diverse range of delicious dishes tailored to your event's theme and preferences, ensuring every guest leaves satisfied.",
    },
    {
      id: 3,
      title: "Venue Decoration",
      description:
        "We specialize in transforming venues into stunning spaces that perfectly capture the spirit of your event, blending creativity with elegance.",
    },
    {
      id: 4,
      title: "Photography & Videography",
      description:
        "Capture your event's special moments with our professional photography and videography services, ensuring every memory is preserved beautifully.",
    },
    {
      id: 5,
      title: "Entertainment Management",
      description:
        "From live music to engaging performances, we bring your event to life with tailored entertainment options that suit your style and audience.",
    },
  ];

  useEffect(() => {
    setCardInfo(offerings);
  }, []);

  return (
    <div className="px-4 lg:px-16 py-10 bg-black text-white">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-xl md:text-3xl font-light text-gray-300">
          Offering to your Event
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CardInfo.map((item) => (
          <div
            key={item.id}
            className=" p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <CardText Title={item.title} Description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
