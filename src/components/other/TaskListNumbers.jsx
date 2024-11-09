/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

const TaskListNumbers = ({data}) => {
  
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4">
      {/* Task Card 1 */}
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105 py-8 bg-red-500 text-white">
        <h2 className="text-5xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-lg font-medium mt-2">New Tasks</h3>
      </div>
      {/* Task Card 2 */}
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105 py-8 bg-blue-500 text-white">
        <h2 className="text-5xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-lg font-medium mt-2">Complete Task</h3>
      </div>
      {/* Task Card 3 */}
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105 py-8 bg-green-500 text-white">
        <h2 className="text-5xl font-bold">{data.taskCount.active}</h2>
        <h3 className="text-lg font-medium mt-2">Accepted Task</h3>
      </div>
      {/* Task Card 4 */}
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform transform hover:scale-105 py-8 bg-yellow-500 text-white">
        <h2 className="text-5xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-lg font-medium mt-2">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
