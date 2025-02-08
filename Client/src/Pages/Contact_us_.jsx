import React, { useState } from "react";
import images from "../assets/handshake-4002834_1280.jpg";
import searchIcon from "../assets/find.png";
import { Link } from "react-router-dom";
const Contact_us_ = () => {
  const eventTypes = [
    "--Select--",
    "Wedding",
    "Party",
    "Conference",
    "Birthday",
    "Other",
  ];

  return (
    <div className="min-h-screen ">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">Contact us</h1>
      </div>
      {/* Contact Form Section */}
      <div className=" mx-auto py-12  px-16">
        <div className="flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-black text-white p-8 space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <div className="space-y-4">
              <p>
                <i className="fas fa-phone-alt"></i> +1012 3456 789
              </p>
              <p>
                <i className="fas fa-envelope"></i> demo@gmail.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> 132 Dartmouth Street
                Boston, Massachusetts 02156 United States
              </p>
            </div>
            <div className="flex space-x-4 ">
              <i className="fab fa-twitter cursor-pointer"></i>
              <i className="fab fa-instagram cursor-pointer"></i>
              <i className="fab fa-discord cursor-pointer"></i>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="select">
                  Select Subject
                </label>
                <select
                  name="select"
                  id="select"
                  className="border border-gray-300 p-2 rounded-lg w-full">
                  {eventTypes.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="border border-gray-300 p-2 rounded-lg w-full"></textarea>
              <button
                type="submit"
                className="bg-[#28475cac] text-white py-2 px-6 rounded-lg hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us_;
