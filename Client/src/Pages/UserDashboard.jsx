import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import placeholderImage from "../assets/handshake-4002834_1280.jpg";
import LoadingScreen from "../components/LoadingScreen";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const data = useSelector((state) => state.auth);
  console.log(data);
  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/${data.user.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${data.user.token}`,
          },
        }
      );
      setUserData(res.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("user_retrieved", (data) => {
      console.log("User updated:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {userData ? (
        <div className="min-h-screen bg-black">
          <div
            className="h-96 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${placeholderImage})` }}>
            <h1 className="text-4xl font-bold text-white shadow-md">
              User Dashboard
            </h1>
          </div>

          <div className="container mx-auto py-12 px-3 md:px-8">
            <div className="text-gray-300 shadow-lg rounded-lg md:p-6">
              <>
                <h2 className="text-2xl font-bold mb-6">User Information</h2>
                <table className="table-auto w-full border-collapse border border-gray-300 text-xs md:text-lg ">
                  <thead>
                    <tr className="bg-black">
                      <th className="border border-gray-300 px-4 py-2 text-center md:text-left">
                        Field
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center md:text-left">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Full Name
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {userData.FullName}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Email
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {userData.Email}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Role</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {userData.role}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Total Events
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {userData.totalEvents}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Total Messages
                      </td>
                      <td className="border border-gray-300  px-4 py-2">
                        {userData.totalMessages}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-xl font-bold mt-8 mb-4">Event Details</h3>
                {userData.EventDetails.length > 0 ? (
                  <table className="table-auto w-full border-collapse border border-gray-300 text-xs md:text-lg ">
                    <thead>
                      <tr className="bg-black">
                        <th className="border border-gray-300 px-4 md:py-2 text-center  md:text-left">
                          Event Title
                        </th>
                        <th className="border border-gray-300 px-4 md:py-2 text-center md:text-left">
                          Description
                        </th>
                        <th className="border border-gray-300 px-4 md:py-2 text-center md:text-left">
                          Date
                        </th>
                        <th className="border border-gray-300 px-4 md:py-2 text-center md:text-left">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.EventDetails.map((event) => (
                        <tr key={event._id}>
                          <td className="border border-gray-300 md:px-4 py-2 text-center md:text-left">
                            {event.title}
                          </td>
                          <td className="border border-gray-300 md:px-4 py-2 text-center md:text-left">
                            {event.description}
                          </td>
                          <td className="border border-gray-300 md:px-4 py-2 text-center md:text-left">
                            {new Date(event.eventAddedAt).toLocaleDateString()}
                          </td>
                          <td className="border border-gray-300 md:px-4 py-2 text-center md:text-left">
                            {event.price}
                          </td>
                        </tr>
                      )).reverse()}
                    </tbody>
                  </table>
                ) : (
                  <p>No events available</p>
                )}
              </>
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default UserDashboard;
