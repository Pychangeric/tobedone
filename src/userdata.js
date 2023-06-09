import React, { useState } from 'react';

function UserData() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    // Perform sign-up logic here, e.g., saving user data to the backend
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the input fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic here, e.g., authentication with the backend
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the input fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>User Data</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default UserData;
