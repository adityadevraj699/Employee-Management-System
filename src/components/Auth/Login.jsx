/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Login = ({handleLogin}) => {

 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('email is ', email);
    // console.log('password is ', password);
    handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
      <div className='border-2 border-green-500 p-8 md:p-16 lg:p-20 rounded-xl shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/3 backdrop-blur-md bg-opacity-70'>
        <h1 className='text-4xl md:text-5xl text-center mb-5 text-green-500 font-mono'>
          LOGIN
        </h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className='flex flex-col items-center justify-center w-full'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full outline-none bg-transparent border-2 border-green-500 text-lg md:text-xl py-3 px-6 rounded-full font-mono placeholder:text-gray-400 transition duration-200 focus:border-green-600 focus:ring-2 focus:ring-green-500'
            type='email'
            placeholder='Enter your Email'
            aria-label='Email'
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full outline-none bg-transparent border-2 border-green-500 text-lg md:text-xl py-3 px-6 rounded-full mt-3 font-mono placeholder:text-gray-400 transition duration-200 focus:border-green-600 focus:ring-2 focus:ring-green-500'
            type='password'
            placeholder='Enter Password'
            aria-label='Password'
            required
          />
          <button
            type='submit'
            className='w-full text-white outline-none border-none hover:bg-green-600 bg-green-500 text-lg py-2 px-8 rounded-full mt-7 transition duration-200 transform hover:scale-105'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
