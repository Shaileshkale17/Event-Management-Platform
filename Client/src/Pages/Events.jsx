import React, { useEffect, useState } from "react";
import images from "../assets/awesome-sauce-creative-lvZN2e4LPvg-unsplash.jpg";
import searchIcon from "../assets/find.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import NotImageFond from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import { io } from "socket.io-client";

const Events = () => {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const data = useSelector((state) => state.auth);
  console.log(data.user.token);

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
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/events`,
        {
          headers: {
            Authorization: `Bearer ${data.user.token}`, // Pass the token here
          },
        }
      );

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
            <Link to={`/event/${event._id}`}>
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-lg shadow-md">
                <img
                  src={event.image || NotImageFond}
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
