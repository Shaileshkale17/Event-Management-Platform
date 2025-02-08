import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io("http://localhost:8080"); // Replace with your server URL

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Listen for "new_employee" event
    socket.on("new_employee", (data) => {
      console.log("New Employee Added:", data);
      // Update the employees state
      setEmployees((prevEmployees) => [...prevEmployees, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul id="employee-list">
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} ({employee.email}) - {employee.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
