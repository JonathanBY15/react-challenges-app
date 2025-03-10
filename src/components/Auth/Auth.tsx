import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import icons from React Icons
import { FcGoogle } from "react-icons/fc";
import './Auth.css';
import GradientBlob from "../GradientBlob/GradientBlob";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);  // Track whether login or register form is shown
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with', { email, password });
    } else {
      if (password !== repeatPassword) {
        console.log('Passwords do not match!');
        return;
      }
      console.log('Registering with', { username, email, password });
    }
  };

  return (
    <div className="auth-container">
      <GradientBlob size={250} top="30%" left="40%" opacity={0.6} animationDelay="0s" colors={["#00bcd4", "#3498db", "#2c3e50"]} />
      <GradientBlob size={200} top="60%" right="10%" opacity={0.4} animationDelay="0.5s" colors={["#6a0dad", "#9b59b6", "#2c3e50"]} />
      <GradientBlob size={180} top="10%" left="70%" opacity={0.5} animationDelay="1s" colors={["#00bcd4", "#2980b9", "#2c3e50"]} />
      <GradientBlob size={220} top="20%" left="10%" opacity={0.7} animationDelay="1.5s" colors={["#3498db", "#2980b9", "#2c3e50"]} />
      <GradientBlob size={250} top="75%" left="50%" opacity={0.6} animationDelay="2s" colors={["#6a0dad", "#8e44ad", "#2c3e50"]} />
      <GradientBlob size={300} top="50%" right="5%" opacity={0.4} animationDelay="2.5s" colors={["#95a5a6", "#3498db", "#2c3e50"]} />
      <GradientBlob size={270} bottom="15%" left="15%" opacity={0.5} animationDelay="3s" colors={["#2980b9", "#00bcd4", "#2c3e50"]} />

      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {/* Show the username field only when the user is signing up */}
        {!isLogin && (
          <div className="form-group">
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                required
                className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              />
              {/* Floating label for the username input */}
              <label
                htmlFor="username"
                className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Username
              </label>
            </div>
          </div>
        )}

        {/* Email input field */}
        <div className="form-group">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            />
            {/* Floating label for the email input */}
            <label
              htmlFor="email"
              className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>
        </div>

        {/* Password input field */}
        <div className="form-group">
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            />
            {/* Floating label for the password input */}
            <label
              htmlFor="password"
              className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>
        </div>

        {/* Repeat password field, shown only for sign-up */}
        {!isLogin && (
          <div className="form-group">
            <div className="relative">
              <input
                type="password"
                id="repeatPassword"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder=" "
                required
                className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              />
              {/* Floating label for the repeat password input */}
              <label
                htmlFor="repeatPassword"
                className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Repeat Password
              </label>
            </div>
          </div>
        )}

        {/* Submit button, changes text based on login/signup mode */}
        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>


      {/* OAuth buttons for Google and GitHub */}
      
      <hr />

      <div className="oauth-buttons">
        <button className="oauth-btn google-btn">
          <FcGoogle size={20} /> {isLogin ? 'Log In with Google' : 'Sign Up with Google'}
        </button>
        <button className="oauth-btn github-btn">
          <FaGithub size={20} /> {isLogin ? 'Log In with GitHub' : 'Sign Up with GitHub'}
        </button>
      </div>

      <div className="toggle-link">
        {isLogin ? (
          <p className="text-gray-200">
            Not a member? <span onClick={() => setIsLogin(false)}>Sign up</span>
          </p>
        ) : (
          <p className="text-gray-200">
            Already a member? <span onClick={() => setIsLogin(true)}>Log in</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
