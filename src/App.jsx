/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData]= useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser"); // Use getItem instead of setItem
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);
      setUser(userData.role);
      setLoggedInUserData(userData.data); // Set additional data if necessary
    }
  }, [userData]); // Add authdata as a dependency if it can change

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' })); // Store admin data
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee })); // Store employee data
      } else {
        alert('Invalid Credentials!!');
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </>
  );
};

export default App;
