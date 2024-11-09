/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider'; // Adjust the import path as necessary

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext); // Access userData and setUserData from AuthContext

  // Single state object to manage all form fields
  const [taskData, setTaskData] = useState({
    taskTitle: '',
    taskDescription: '',
    taskDate: '',
    assignTo: '',
    category: '',
  });

  // Load user data from local storage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [setUserData]);

  // General change handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const taskDetails = {
      taskTitle: taskData.taskTitle,
      taskDate: taskData.taskDate,
      category: taskData.category,
      taskDescription: taskData.taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Ensure userData is an array before proceeding
    const data = Array.isArray(userData) ? userData : [];

    // Check if the employee exists
    const employeeIndex = data.findIndex((employee) => employee.firstName === taskData.assignTo);
    if (employeeIndex === -1) {
      alert('Employee not found!'); // Error handling if employee does not exist
      return;
    }

    // Add the task to the employee's task list
    const employee = data[employeeIndex];
    if (!employee.tasks) employee.tasks = []; // Ensure tasks array exists
    employee.tasks.push(taskDetails); // Add new task to employee's task list
    employee.taskCount = {
      ...employee.taskCount,
      newTask: (employee.taskCount.newTask || 0) + 1, // Increment newTask count
    };

    // Update the AuthContext state with the modified data
    const updatedUserData = [...data];
    setUserData(updatedUserData); // Spread the array to trigger re-render

    // Save updated user data to local storage
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    // Reset the form
    setTaskData({
      taskTitle: '',
      taskDescription: '',
      taskDate: '',
      assignTo: '',
      category: '',
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded shadow-lg">
      <form onSubmit={submitHandler} className="flex flex-col sm:flex-row items-start justify-between">
        {/* Left Column */}
        <div className="flex-1">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            name="taskTitle"
            value={taskData.taskTitle}
            onChange={handleChange}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mt-2"
            type="text"
            placeholder="Make a UI design"
          />

          <h3 className="text-sm text-gray-300 mb-0.5 mt-4">Date</h3>
          <input
            name="taskDate"
            value={taskData.taskDate}
            onChange={handleChange}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            type="date"
          />

          <h3 className="text-sm text-gray-300 mb-0.5 mt-4">Assign to</h3>
          <input
            name="assignTo"
            value={taskData.assignTo}
            onChange={handleChange}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            type="text"
            placeholder="Employee Name"
          />

          <h3 className="text-sm text-gray-300 mb-0.5 mt-4">Category</h3>
          <input
            name="category"
            value={taskData.category}
            onChange={handleChange}
            className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="taskDescription"
            value={taskData.taskDescription}
            onChange={handleChange}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            placeholder="Describe the task..."
          />
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
