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
  // const [arrSlides, setArrslides] = useState([]);
  const [arrPalns, setArrPalns] = useState([]);

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

  return (
    <div className="min-h-screen">
      <ImageSlider />
      <Marquee imagesarr={arrPalns} />
      <Offerings />
      <Testimonials />
    </div>
  );
};

export default Landing;
