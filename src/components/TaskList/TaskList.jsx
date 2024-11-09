/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  
  
  return (
    <div id="tasklist" className="mt-10 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.tasks.map((elem) => {
          // Ensure that id is defined before creating the key
          const taskId = elem.id ? elem.id : Math.random(); // Use a fallback if id is undefined
          
          if (elem.active) {
            return <AcceptTask key={`${taskId}-active`} data={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={`${taskId}-new`} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={`${taskId}-completed`} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={`${taskId}-failed`} data={elem} />;
          }
          return null; // Return null if no conditions match
        })}
      </div>
    </div>
  );
};

export default TaskList;
