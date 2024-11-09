/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Set localStorage only once when the component mounts
    setLocalStorage(); // This will populate localStorage with employees and admin
    const {employees,task} = getLocalStorage(); // Retrieve the data from localStorage
    setUserData(employees,task); // Store the retrieved data in state
    //console.log(data); // Check if the data is retrieved correctly
  }, []); // Empty dependency array to run only on mount

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;