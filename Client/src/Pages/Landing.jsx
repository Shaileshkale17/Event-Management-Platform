import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Slide_One from "../assets/Events_image.jpg";
import Slide_Two from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import Slide_Three from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import Slide_four from "../assets/pexels-asadphoto-169211.jpg";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import Offerings from "../components/Offerings";

const Landing = () => {
  const [arrSlides, setArrslides] = useState([]);
  const slides = [
    {
      id: 1,
      image: Slide_One,
      title: "Live Events",
      text: "Experience unforgettable live events with seamless management and coordination.",
    },
    {
      id: 2,
      image: Slide_Two,
      title: "Engagement Events",
      text: "Celebrate love and commitment with beautifully organized engagement ceremonies.",
    },
    {
      id: 3,
      image: Slide_Three,
      title: "Haldi Events",
      text: "Bring traditions to life with vibrant Haldi celebrations tailored to perfection.",
    },
    {
      id: 4,
      image: Slide_four,
      title: "Destination Weddings",
      text: "Turn your dream destination wedding into reality with our expert planning.",
    },
  ];

  const popularEventPlans = [
    {
      id: 1,
      title: "Wedding Planning",
      description:
        "Our wedding planning services ensure your big day is stress-free and magical, from venue selection to managing vendors and timelines.",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
    },
    {
      id: 2,
      title: "Corporate Events",
      description:
        "We specialize in planning professional corporate events, including conferences, seminars, product launches, and team-building activities.",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
    },
    {
      id: 3,
      title: "Birthday Parties",
      description:
        "Make birthdays unforgettable with personalized themes, decorations, and entertainment, tailored to any age group.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783", // Unsplash image URL
    },
    {
      id: 4,
      title: "Social Gatherings",
      description:
        "From family reunions to community events, we create memorable social gatherings with creative planning and seamless execution.",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
    },
    {
      id: 5,
      title: "Festivals & Celebrations",
      description:
        "Celebrate festivals with grandeur by letting us handle the decor, catering, and event flow for a joyous experience.",
      image:
        "https://cdn0.weddingwire.in/article/0698/original/1280/jpg/118960-knotsbyamp-maharashtrianweddings1.webp", // Unsplash image URL
    },
  ];

  const Crad = [
    {
      imgs: Slide_One,
      title: "Lorem ipsum dolor sit amet.",
      contect: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
    tempore ratione pariatur saepe veritatis excepturi sunt maiores
    voluptates. Fugiat commodi nulla perferendis sapiente voluptatem
    perspiciatis est vero consequuntur reiciendis! Eaque?`,
    },
    {
      imgs: Slide_Two,
      title: "Lorem ipsum dolor sit amet.",
      contect: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
    tempore ratione pariatur saepe veritatis excepturi sunt maiores
    voluptates. Fugiat commodi nulla perferendis sapiente voluptatem
    perspiciatis est vero consequuntur reiciendis! Eaque?`,
    },
    {
      imgs: Slide_Three,
      title: "Lorem ipsum dolor sit amet.",
      contect: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
    tempore ratione pariatur saepe veritatis excepturi sunt maiores
    voluptates. Fugiat commodi nulla perferendis sapiente voluptatem
    perspiciatis est vero consequuntur reiciendis! Eaque?`,
    },
    {
      imgs: Slide_four,
      title: "Lorem ipsum dolor sit amet.",
      contect: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
    tempore ratione pariatur saepe veritatis excepturi sunt maiores
    voluptates. Fugiat commodi nulla perferendis sapiente voluptatem
    perspiciatis est vero consequuntur reiciendis! Eaque?`,
    },
  ];

  useEffect(() => {
    setArrslides(slides);
  }, []);

  return (
    <div className="min-h-screen">
      <ImageSlider slides={arrSlides} />
      <Marquee imagesarr={popularEventPlans} />
      <Offerings />
      <Testimonials />
    </div>
  );
};

export default Landing;
