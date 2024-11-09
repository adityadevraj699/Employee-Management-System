/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';


const NewTask = ({data}) => {
  console.log("data : ", data)
  return (
    <div className="relative w-full min-w-[280px] md:min-w-[350px] h-auto transition-transform transform hover:scale-105">
      {/* Task Container */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:border-transparent overflow-hidden">
        
        {/* Content Layer */}
        <div className="relative z-10">
          
          {/* Task Priority Label */}
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold px-3 py-1 text-xs md:text-sm rounded-lg uppercase tracking-wide shadow-lg">
          {data.taskCategory || data.category
          }
          </span>

          {/* Task Title */}
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-blue-800 leading-tight tracking-tighter">
          { data.taskTitle}
          </h2>

          {/* Task Description */}
          <p className="mt-3 text-sm md:text-base text-blue-600 leading-relaxed">
          {data.taskDescription}
          </p>
        </div>

        {/* Due Date */}
        <div className="mt-5 text-sm md:text-base text-gray-500">
          <strong>Due:</strong> {data.taskDate}
        </div>

        {/* Buttons Inside Decorative Box */}
        <div className="relative mt-6 py-4 px-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-lg">
          <div className="flex justify-between items-center space-x-4">
            
            {/* Mark as Completed Button */}
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 md:px-4 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <FaCheck className="mr-2" /> Accepted Task
            </button>
          </div>
        </div>

        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 opacity-20 rounded-2xl pointer-events-none" />
      </div>
    </div>
  )
}

export default NewTask
