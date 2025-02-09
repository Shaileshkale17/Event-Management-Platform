import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import placeholderImage from "../assets/handshake-4002834_1280.jpg";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const data = useSelector((state) => state.auth);

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
    <div className="min-h-screen">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${placeholderImage})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">
          User Dashboard
        </h1>
      </div>

      <div className="container mx-auto py-12 px-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {userData ? (
            <>
              <h2 className="text-2xl font-bold mb-6">User Information</h2>
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Field
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
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
                    <td className="border border-gray-300 px-4 py-2">Email</td>
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
                    <td className="border border-gray-300 px-4 py-2">
                      {userData.totalMessages}
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-bold mt-8 mb-4">Event Details</h3>
              {userData.EventDetails.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Event Title
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Description
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Date
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.EventDetails.map((event) => (
                      <tr key={event._id}>
                        <td className="border border-gray-300 px-4 py-2">
                          {event.title}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {event.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {new Date(event.date).toLocaleDateString()}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {event.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No events available</p>
              )}
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
