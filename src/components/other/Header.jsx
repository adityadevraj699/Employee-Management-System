/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Header = ({ data }) => {
  // console.log('Header Data:', data); // Log the incoming data to debug
  const username = data ? data.firstName : 'Admin'; // Use optional chaining to set username, defaulting to 'Admin'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ''); 
   
    // Clear the logged-in user from localStorage
    window.location.reload(); // Refresh the page after logging out
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">
          Hello, <br />
          <span className="text-3xl font-semibold">{username}👋</span>
        </h1>
      </div>
      {/* Pass the reference to the logOutUser function */}
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium px-5 py-2 rounded-md hover:bg-red-700 transition duration-200"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
