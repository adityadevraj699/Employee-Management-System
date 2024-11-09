/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

// Function to get status class
const getStatusClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'accepted':
      return 'bg-blue-500 text-white';
    case 'failed':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};
import { FaCheck, FaTimes, FaCheckCircle } from 'react-icons/fa'; // Import the icons

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  console.log(userData)
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Ensure userData is an array, or fallback to an empty array
  const employees = Array.isArray(userData) ? userData : [];
  console.log(" :", employees)

  // Function to handle employee click and show modal
  const handleEmployeeClick = (employee) => {
    console.log("Employee clicked:", employee);
    setSelectedEmployee(employee);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48">
      {/* Task Header */}
      <div className="bg-red-400 mb-2 py-3 px-4 flex flex-col sm:flex-row sm:justify-between rounded items-start sm:items-center">
        <h2 className="text-lg font-bold">Employee Name</h2>
        <h3 className="text-sm sm:text-base mt-1 sm:mt-0">New Task</h3>
        <h5 className="text-xs sm:text-sm mt-1 sm:mt-0 font-semibold">Active Task</h5>
        <h5 className="text-xs sm:text-sm mt-1 sm:mt-0 font-semibold">Completed</h5>
        <h5 className="text-xs sm:text-sm mt-1 sm:mt-0 font-semibold">Failed</h5>
      </div>

      {/* Task List */}
      <div id="tasklist" className="h-[80%] overflow-y-auto">
        {employees.map((employee, index) => (
          <div
            onClick={() => handleEmployeeClick(employee)} 
            key={index}
            className="border-2 border-emerald-500 mb-2 py-3 px-4 flex flex-col sm:flex-row sm:justify-between rounded items-start sm:items-center cursor-pointer"
          >
            <h2 className="text-lg font-bold">
              {employee.firstName}
            </h2>
            <h3 className="text-sm sm:text-base mt-1 sm:mt-0 text-blue-400">{employee.taskCount?.newTask || 0}</h3>
            <h5 className="text-xs sm:text-sm mt-1 sm:mt-0 font-semibold text-yellow-400">{employee.taskCount?.active || 0}</h5>
            <h5 className="text-xs sm:text-sm mt-1 sm:mt-0 font-semibold text-green-800">{employee.taskCount?.completed || 0}</h5>
            <h5 className="text-red-800 text-xs sm:text-sm mt-1 sm:mt-0 font-semibold">{employee.taskCount?.failed || 0}</h5>
          </div>
        ))}
      </div>

      {/* Modal for Employee Details */}
      {selectedEmployee && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div
      id="tasklist"
      className="bg-gray-800 p-8 rounded-3xl w-[90vw] h-[90vh] overflow-auto text-center shadow-lg relative animate-fade-in border-2 border-emerald-500 flex flex-col gap-6"
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition-colors"
        onClick={closeModal}
      >
        X
      </button>

      {/* Employee Profile Section */}
      <div className="flex items-start justify-between space-x-8 mb-6">
        {/* Profile Info */}
        <div className="text-left w-1/3 bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2 text-red-400">{selectedEmployee.firstName}</h2>
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Email:</strong> {selectedEmployee.email || 'N/A'}
          </p>
          {/* Additional Profile Information */}
          <p className="text-gray-300 mb-2">
            <strong className="text-white">Position:</strong> {selectedEmployee.position || 'Developer'}
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Department:</strong> {selectedEmployee.department || 'IT'}
          </p>
        </div>

        {/* Task Statistics Section */}
        <div className="flex flex-col items-center w-2/3">
          <h3 className="text-xl font-bold text-neon-green mb-4">Task Statistics</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm text-neon-green">
            <div className="flex flex-col items-center">
              <span className="font-bold text-blue-500">{selectedEmployee.taskCount?.newTask || 0}</span>
              <span><strong className="text-white">New Tasks</strong></span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-yellow-500">{selectedEmployee.taskCount?.active || 0}</span>
              <span><strong className="text-white">Active Tasks</strong></span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-green-500">{selectedEmployee.taskCount?.completed || 0}</span>
              <span><strong className="text-white">Completed</strong></span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-red-500">{selectedEmployee.taskCount?.failed || 0}</span>
              <span><strong className="text-white">Failed</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Task Details Section */}
      <div id='tasklist' className="flex flex-wrap justify-center gap-6 overflow-y-auto h-full p-4 bg-gray-700 rounded-lg">
        {selectedEmployee.tasks.map((task, index) => (
          <div
            key={index}
            className="w-64 p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="text-center text-white">
              {/* Task Priority Label */}
              <span className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white font-bold px-2 py-1 text-xs rounded-md uppercase shadow-md mb-2">
                {task.taskCategory || task.category}
              </span>
              {/* Task Title */}
              <h2 className="text-lg font-semibold leading-tight mb-1">{task.taskTitle}</h2>
              {/* Due Date */}
              <p className="text-sm text-gray-400 mb-4">
                <strong>Due:</strong> {task.taskDate}
              </p>
              {/* Status Button */}
              <div className="flex justify-center">
                {task.completed && (
                  <button className="bg-green-500 text-white font-bold py-1 px-3 rounded-md transition hover:bg-green-600">
                    Completed
                  </button>
                )}
                {task.active && (
                  <button className="bg-yellow-500 text-white font-bold py-1 px-3 rounded-md transition hover:bg-yellow-600">
                    Active
                  </button>
                )}
                {task.failed && (
                  <button className="bg-red-500 text-white font-bold py-1 px-3 rounded-md transition hover:bg-red-600">
                    Failed
                  </button>
                )}
                 {task.newTask && (
                  <button className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md transition hover:bg-blue-600">
                    Newtask
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AllTask;
