import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Slide_One from "../assets/Events_image.jpg";
import Slide_Two from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import Slide_Three from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import Slide_four from "../assets/pexels-asadphoto-169211.jpg";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import Offerings from "../components/Offerings";
import axios, { Axios } from "axios";

const Landing = () => {
  const [arrSlides, setArrslides] = useState([]);
  const [arrPalns, setArrPalns] = useState([]);
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

  const allevents = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/events`);
      setArrPalns(res.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Signup error:", error);
    }
  };
  useEffect(() => {
    allevents();
  }, []);

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
      <Marquee imagesarr={arrPalns} />
      <Offerings />
      <Testimonials />
    </div>
  );
};

export default Landing;
