import React from "react";
import ImageSlider from "../components/ImageSlider";
import Slide_One from "../assets/Events_image.jpg";
import Slide_Two from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import Slide_Three from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import Slide_four from "../assets/pexels-asadphoto-169211.jpg";
import logo_adobe from "../assets/adobe.svg";
import logo_apple from "../assets/apple.svg";
import logo_slack from "../assets/slack 1.svg";
import logo_spotify from "../assets/spotify 1.svg";
import Marquee from "../components/Marquee";
import Card from "../components/Card";

const Landing = () => {
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

  const images = [
    { Logo: logo_adobe, title: "Adobe" },
    { Logo: logo_apple, title: "Apple" },
    { Logo: logo_slack, title: "slack" },
    { Logo: logo_spotify, title: "spotify" },
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

  return (
    <div className="min-h-screen">
      <ImageSlider slides={slides} />
      <Marquee imagesarr={images} />
      <Card />
    </div>
  );
};

export default Landing;
