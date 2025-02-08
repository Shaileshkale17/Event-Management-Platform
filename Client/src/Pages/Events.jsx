import React, { useState } from "react";
import images from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import searchIcon from "../assets/find.png";
import { Link } from "react-router-dom";
const eventsData = [
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image: "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },
  {
    title: "Classic Ballroom Wedding",
    description:
      "An elegant wedding in a grand ballroom with luxurious decorations and top-notch services.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Indoor", "Elegant", "Luxury"],
    date: "2025-09-10",
    price: 8000,
  },
  {
    title: "Romantic Beach Wedding",
    description:
      "A picturesque beach wedding with a serene ocean backdrop, perfect for couples seeking a tranquil and romantic ceremony.",
    image:
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Beach", "Romantic", "Outdoor"],
    date: "2025-06-15",
    price: 5000,
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        features: ["Venue decoration", "Photography", "Bridal bouquet"],
      },
      {
        name: "Premium Package",
        price: 10000,
        features: [
          "Venue decoration",
          "Photography & Videography",
          "Bridal bouquet",
          "Catering for 50 guests",
        ],
      },
    ],
  },

  // Add more events here...
];

const Events = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Filter events based on the search query
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination indices
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className="min-h-screen">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">Events</h1>
      </div>
      <div className="p-6 text-center">
        <div className="relative mt-5">
          <img
            src={searchIcon}
            alt="search"
            className="w-8 h-8 absolute top-2 left-[37.5%]"
          />
          <input
            type="search"
            name="search"
            id="search"
            className="w-[30rem] pl-12  border border-solid border-black py-3 rounded-2xl"
            placeholder="Search for events..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <p className="mt-4 text-gray-700">
          {currentEvents.length == 0 ? `Searching for: ${search}` : ""}
        </p>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event, index) => (
            <Link to={`/event/${index}`}>
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 object-cover rounded-md"
                />
                <h2 className="mt-4 text-xl font-bold">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {currentEvents.length > 0 ? (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50">
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Events;
