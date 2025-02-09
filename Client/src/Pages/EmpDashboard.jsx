import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import placeholderImage from "../assets/handshake-4002834_1280.jpg";

const EmpDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [events, setEvents] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YThjMDFlZjE4N2ZmYmU3MWJmM2ZkYSIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTczOTEyNTkzOH0.lIeEdff_yvB5rXoC8lM2dWBh-aLJPpMxwzGFkxMjLn8";

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/employees/67a7725704afcbbdc5824f58`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserData(response.data.data);
      toast.success("User data fetched successfully!");
    } catch (error) {
      toast.error("Error fetching user data.");
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/info/message`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(response.data);
    } catch (error) {
      toast.error("Error fetching messages.");
    }
  };

  const fetchEventInquiries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/info/events`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.users);
      setInquiries(response.data.users);
      console.log(
        "response.data.users.EventsBook",
        response.data.users[0].EventsBook
      );
      // setEvents(response.data.users.packages);
    } catch (error) {
      toast.error("Error fetching event inquiries.");
    }
  };

  // const fetchEventPackages = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_BACKEND_URL}/events/packages`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     setEvents(response.data.events);
  //   } catch (error) {
  //     toast.error("Error fetching event packages.");
  //   }
  // };

  useEffect(() => {
    fetchUserData();
    fetchMessages();
    fetchEventInquiries();
    // fetchEventPackages();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${placeholderImage})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">
          Employee Dashboard
        </h1>
      </div>

      <div className="container mx-auto py-12 px-8">
        {/* User Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {userData ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Employee Information</h2>
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
                      {userData?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Email</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {userData?.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Role</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {userData?.role}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Salary</td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₹{userData?.salary?.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <p>Loading employee data...</p>
          )}
        </div>

        {/* Messages */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">User Messages</h2>
          {messages.length > 0 ? (
            <ul className="space-y-4">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className="border border-gray-300 p-4 rounded-md">
                  <p>
                    <strong>Enquiry:</strong> {message?.enquiry}
                  </p>
                  <p>
                    <strong>Message:</strong> {message?.Messages || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {message?.Email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {message?.Phone}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No messages found.</p>
          )}
        </div>

        {/* Event Inquiries */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">Event Inquiries</h2>
          {inquiries?.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Phone</th>
                  <th className="border border-gray-300 px-4 py-2">Inquiry</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {inquiry?.FullName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {inquiry?.Email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {inquiry?.phone}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {inquiry?.inquiry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No inquiries found.</p>
          )}
        </div>

        {/* Event Packages - EventsBook */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">Event Bookings</h2>
          {inquiries.length > 0 ? (
            inquiries.map((inquiry, inquiryIndex) => (
              <div key={inquiryIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Bookings for {inquiry.FullName} ({inquiry.Email})
                </h3>
                {inquiry.EventsBook && inquiry.EventsBook.length > 0 ? (
                  inquiry.EventsBook.map((event, eventIndex) => (
                    <div key={eventIndex} className="mb-8">
                      <h4 className="text-lg font-bold mb-2">
                        {eventIndex + 1}. {event.title}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        <strong>Description:</strong> {event.description}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <strong>Tags:</strong> {event.tags?.join(", ") || "N/A"}
                      </p>
                      <p className="text-gray-600 mb-4">
                        <strong>Price:</strong> ₹
                        {event.price?.toLocaleString() || "N/A"}
                      </p>
                      {event.packages && event.packages.length > 0 ? (
                        <table className="table-auto w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="border border-gray-300 px-4 py-2">
                                Package Name
                              </th>
                              <th className="border border-gray-300 px-4 py-2">
                                Price
                              </th>
                              <th className="border border-gray-300 px-4 py-2">
                                Features
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {event.packages.map((pkg, pkgIndex) => (
                              <tr key={pkgIndex}>
                                <td className="border border-gray-300 px-4 py-2">
                                  {pkg.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  ₹{pkg.price?.toLocaleString() || "N/A"}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  {pkg.features?.join(", ") ||
                                    "No features listed"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No packages available for this event.</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No events booked yet for {inquiry.FullName}.</p>
                )}
              </div>
            ))
          ) : (
            <p>No inquiries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
