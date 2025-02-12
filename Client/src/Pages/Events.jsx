import React, { useEffect, useState } from "react";
import images from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import searchIcon from "../assets/find.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import NotImageFond from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import { io } from "socket.io-client";
import EventCard from "../components/EventCard";
import EventCard2 from "../components/EventCard2";

const Events = () => {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  // const data = useSelector((state) => state.auth);
  // console.log(data?.user?.token);

  // Filter events based on the search query
  const filteredEvents = events.filter((event) =>
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

  const allevents = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/events`);

      // dispatch(login(info));
      // console.log("events");
      setEvents(res.data.data);
      // console.log("Signup response:", res.data.data);
      // console.log(events);
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
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io(`${import.meta.env.VITE_BACKEND_URL}/events`); // Replace with your server URL

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Listen for "new_employee" event
    socket.on("new_Event", (data) => {
      console.log("New Employee Added:", data);
      // Update the employees state
      // setEmployees((prevEmployees) => [...prevEmployees, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">Events</h1>
      </div>
      <div className="p-6 text-center">
        <div className="w-full flex justify-center">
          <div className="flex flex-col flex-wrap gap-1 relative">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full lg:w-[30rem] pl-12 text-gray-300  border border-solid border-gray-400 py-3 rounded-2xl"
              placeholder="Search for events..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <img
              src={searchIcon}
              alt="search"
              className="absolute -left-1 -top-1 w-15 h-auto "
            />
          </div>
        </div>
        <p className="mt-4 ">
          {currentEvents.length == 0 ? `Searching for: ${search}` : ""}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event, index) => (
            <EventCard2
              Title={event.title}
              description={event.description}
              image={event.image || NotImageFond}
              linkURL={`/event/${event._id}`}
              id={event._id}
              key={event._id}
            />
          ))}
        </div>
      </div>
      {currentEvents.length > 0 ? (
        <div className=" flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md text-gray-300 hover:text-gray-400 disabled:opacity-50">
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === i + 1
                  ? "text-gray-300"
                  : "bg-gray-300 hover:text-gray-400"
              }`}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md text-gray-300 hover:text-gray-400 disabled:opacity-50">
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
