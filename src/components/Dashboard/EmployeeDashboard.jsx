/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const [employee, setEmployee] = useState(props.data);

  useEffect(() => {
    try {
      // Retrieve userData from localStorage
      const storedData = JSON.parse(localStorage.getItem('userData'));
      
      // Find the specific employee using `props.data.id`
      const storedEmployee = storedData?.find(emp => emp.id === props.data.id);

      // If the employee is found in localStorage, update the state
      if (storedEmployee) {
        setEmployee(storedEmployee);
      }
    } catch (error) {
      console.log('Error retrieving employee data from localStorage:', error);
    }
  }, [props.data.id]);

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={employee} />
      <TaskListNumbers data={employee} />
      <TaskList data={employee} />
    </div>
  );
};

EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default EmployeeDashboard;
