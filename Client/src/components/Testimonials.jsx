import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import EventCard from "./EventCard";
const Testimonials = () => {
  const [Testimonial, setTestimonial] = useState([]);
  const testimonialsarr = [
    {
      id: 1,
      name: "Emily Johnson",
      title: "Bride",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
      starRating: 5,
      feedback:
        "The wedding planning team made my special day unforgettable. Everything was perfect, from the decor to the food!",
    },
    {
      id: 2,
      name: "Mark Davis",
      title: "Corporate Manager",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
      starRating: 4,
      feedback:
        "Their corporate event services were professional and seamless. Would highly recommend for conferences and seminars.",
    },
    {
      id: 3,
      name: "Sophia Lee",
      title: "Birthday Host",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
      starRating: 5,
      feedback:
        "The team went above and beyond to make my birthday party amazing! Everyone loved the theme and decorations.",
    },
    {
      id: 4,
      name: "James Carter",
      title: "Community Organizer",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
      starRating: 4,
      feedback:
        "They helped organize our social gathering with creativity and precision. It was a big hit among attendees.",
    },
    {
      id: 5,
      name: "Olivia Brown",
      title: "Festival Coordinator",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
      starRating: 5,
      feedback:
        "The festival was a huge success thanks to their event management. Everything was executed flawlessly!",
    },
  ];
  useEffect(() => {
    setTestimonial(testimonialsarr);
  }, []);
  return (
    <div className="overflow-hidden w-full bg-black  pb-5  ">
      <h1 className="text-center font-extralight my-3 text-3xl text-gray-300">
        What Our Clients Say
      </h1>
      <Marquee>
        {Testimonial.map((image, index) => (
          <EventCard
            Title={image.title}
            image={image.image}
            id={image.id}
            starRating={image.starRating}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
