import React, { useState } from "react";
import images from "../assets/handshake-4002834_1280.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

const Contact_us_ = () => {
  const eventTypes = [
    "--Select--",
    "Wedding",
    "Party",
    "Conference",
    "Birthday",
    "Other",
  ];
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [enquiry, setenquiry] = useState("");
  const [Messages, setMessages] = useState("");
  const data = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const ContectMessage = async (e) => {
    e.preventDefault();

    if (!(FirstName && LastName && Email && Phone && enquiry && Messages)) {
      return toast.error("Please fill out all required fields.");
    }

    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/messages`,
        {
          FirstName,
          LastName,
          Email,
          Phone,
          enquiry,
          Messages,
        }
      );
      if (isLoggedIn) {
        let usermessage = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/addEvent`,
          { userId: data.user.user.id, eventId: res.data.data._id },
          {
            headers: {
              Authorization: `Bearer ${data.user.token}`,
            },
          }
        );
        console.log("usermessage", usermessage);
        toast.success("Thank you for showing interest!");
      }

      // window.location.replace("/login");
      setFirstName("");
      setEmail("");
      setLastName("");
      setMessages("");
      setPhone("");
      setenquiry("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen  bg-black">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">Contact us</h1>
      </div>
      {/* Contact Form Section */}
      <div className=" mx-auto py-12 lg:px-16">
        <div className="flex flex-wrap  shadow-lg rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-black text-gray-300 p-8 space-y-6">
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
            <form className="space-y-6" onSubmit={ContectMessage}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border text-gray-300 border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={FirstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border text-gray-300 border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) => setLastName(e.target.value)}
                  value={LastName}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="border text-gray-300 border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border text-gray-300 border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                />
              </div>
              <div>
                <label
                  className="text-gray-300 block mb-2 font-medium"
                  htmlFor="select">
                  Select Subject
                </label>
                <select
                  name="select"
                  id="select"
                  onChange={(e) => setenquiry(e.target.value)}
                  value={enquiry}
                  className="border text-gray-300 border-gray-300 p-2  rounded-lg w-full ">
                  {eventTypes.map((item) => (
                    <option
                      value={item}
                      className="bg-black hover:bg-gray-300 ">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Write your message..."
                rows="5"
                onChange={(e) => setMessages(e.target.value)}
                value={Messages}
                className="border text-gray-300 border-gray-300 p-2 rounded-lg w-full"></textarea>
              <button
                type="submit"
                className="text-gray-400 hover:text-gray-200 py-2 px-6 rounded-lg border border-solid border-gray-400 hover:border-gray-200 ">
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
