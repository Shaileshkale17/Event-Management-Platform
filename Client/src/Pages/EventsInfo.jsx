import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import NotImageFound from "../assets/awesome-sauce-creative-uRWekN5S39g-unsplash.jpg";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import Marquee from "../components/Marquee";

const EventsInfo = () => {
  const data = useSelector((state) => state.auth);
  const [API_data, setAPI_Data] = useState({});
  const [arrPalns, setArrPalns] = useState([]);
  const { id } = useParams();

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${data.user.token}`,
          },
        }
      );
      setAPI_Data(res.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Error fetching event details:", error);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  useEffect(() => {
    const socket = io(`${import.meta.env.VITE_BACKEND_URL}`);
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("new_Event", (data) => {
      console.log("New Event Added:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInterest = async () => {
    console.log("userId", { userId: data.user.user.id, eventId: API_data._id });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/addEvent`,
        { userId: data.user.user.id, eventId: API_data._id },
        {
          headers: {
            Authorization: `Bearer ${data.user.token}`,
          },
        }
      );
      console.log(res);
      toast.success("Thank you for showing interest!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Error fetching event details:", error);
    }
    // You can add additional functionality here, like making a POST request.
  };
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

  return (
    <div className="min-h-screen px-8 lg:px-16 pt-20 bg-black">
      <div className="flex flex-row flex-wrap items-center justify-around ">
        <img
          src={API_data.imageUrl || NotImageFound}
          alt={API_data.title || "Event Image"}
          className="h-96 w-auto object-cover rounded-2xl shadow-lg"
        />

        {/* Event Details */}
        <div className=" flex flex-col gap-4 justify-center ">
          <h1 className="text-3xl font-bold text-gray-300">{API_data.title}</h1>
          <p className="text-gray-400 text-lg">{API_data.description}</p>
          {API_data.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {API_data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-solid border-amber-300 text-gray-400 text-sm font-medium rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Event Price */}
          <p className="text-xl font-semibold text-gray-300">
            Price: ₹{API_data.price}
          </p>

          {/* Event Date */}
          <p className="text-md text-gray-500">
            Date:{" "}
            {new Date(API_data.date).toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* "I am Interested" Button */}
          <button
            onClick={handleInterest}
            className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">
            I am Interested
          </button>
        </div>
      </div>

      <hr className="text-gray-400 mt-10 mb-2" />
      <div>
        <Marquee imagesarr={arrPalns} />
      </div>
    </div>
  );
};

export default EventsInfo;
