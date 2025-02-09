import React, { useState } from "react";
import images from "../assets/handshake-4002834_1280.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

const AddEvents = () => {
  const { user } = useSelector((state) => state.auth);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YThjMDFlZjE4N2ZmYmU3MWJmM2ZkYSIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTczOTEyNTkzOH0.lIeEdff_yvB5rXoC8lM2dWBh-aLJPpMxwzGFkxMjLn8";

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    tags: [], // Initialize tags as an array
    date: "",
    price: "",
    packages: [
      { name: "", price: "", features: [""] },
      { name: "", price: "", features: [""] },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...eventData.packages];
    updatedPackages[index][field] = value;
    setEventData({ ...eventData, packages: updatedPackages });
  };

  const handleFeatureChange = (index, featureIndex, value) => {
    const updatedPackages = [...eventData.packages];
    updatedPackages[index].features[featureIndex] = value;
    setEventData({ ...eventData, packages: updatedPackages });
  };

  const addEvent = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !eventData.title ||
      !eventData.description ||
      !eventData.date ||
      !eventData.price
    ) {
      return toast.error("Please fill out all required fields.");
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/events`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Event added successfully!");
      console.log("Event response:", response.data);

      // Reset form fields
      setEventData({
        title: "",
        description: "",
        tags: [],
        date: "",
        price: "",
        packages: [
          { name: "", price: "", features: [""] },
          { name: "", price: "", features: [""] },
        ],
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
      console.error("Event error:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images})` }}>
        <h1 className="text-4xl font-bold text-white shadow-md">Add Event</h1>
      </div>

      <div className="mx-auto py-12 px-16">
        <form className="space-y-6" onSubmit={addEvent}>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            className="border border-gray-300 p-2 rounded-lg w-full"
            onChange={handleInputChange}
            value={eventData.title}
          />

          <textarea
            name="description"
            placeholder="Event Description"
            rows="4"
            className="border border-gray-300 p-2 rounded-lg w-full"
            onChange={handleInputChange}
            value={eventData.description}
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            className="border border-gray-300 p-2 rounded-lg w-full"
            onChange={(e) =>
              setEventData({ ...eventData, tags: e.target.value.split(",") })
            }
            value={eventData.tags.join(",")} // Safely join tags into a comma-separated string
          />

          <input
            type="date"
            name="date"
            className="border border-gray-300 p-2 rounded-lg w-full"
            onChange={handleInputChange}
            value={eventData.date}
          />

          <input
            type="number"
            name="price"
            placeholder="Event Price"
            className="border border-gray-300 p-2 rounded-lg w-full"
            onChange={handleInputChange}
            value={eventData.price}
          />

          {eventData.packages.map((pkg, index) => (
            <div key={index} className="space-y-4">
              <input
                type="text"
                placeholder={`Package ${index + 1} Name`}
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) =>
                  handlePackageChange(index, "name", e.target.value)
                }
                value={pkg.name}
              />

              <input
                type="number"
                placeholder={`Package ${index + 1} Price`}
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) =>
                  handlePackageChange(index, "price", e.target.value)
                }
                value={pkg.price}
              />

              {pkg.features.map((feature, featureIndex) => (
                <input
                  key={featureIndex}
                  type="text"
                  placeholder={`Feature ${featureIndex + 1}`}
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) =>
                    handleFeatureChange(index, featureIndex, e.target.value)
                  }
                  value={feature}
                />
              ))}

              <button
                type="button"
                onClick={() =>
                  handlePackageChange(index, "features", [...pkg.features, ""])
                }
                className="bg-blue-500 text-white py-1 px-4 rounded">
                Add Feature
              </button>
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
