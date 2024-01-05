import React, { useState } from 'react'

export default function Login_page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add logic here to handle the submission of admin login credentials
      console.log('Submitted username:', username);
      console.log('Submitted password:', password);
      // Add logic to authenticate admin credentials
    };
  
    return (
      <div className="container mt-5">
        <h1>Admin Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  };
  