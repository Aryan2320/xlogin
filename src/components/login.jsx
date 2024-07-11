import React, { useState } from "react";

const LoginCheck = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (username === 'username' && password === 'password') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            placeholder="username"
            onChange={handleUsernameChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit" onClick={handleClick}>Submit</button>
        </form>
        {login !== null && (
          login ? <h3>Welcome, User!</h3> : <h3>Invalid username or password</h3>
        )}
      </div>
    </>
  );
};

export default LoginCheck;
