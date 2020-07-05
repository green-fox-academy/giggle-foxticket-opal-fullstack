import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './login.css';

import { FaExclamationTriangle } from 'react-icons/fa';

const Login = () => {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [isValid, setisValid] = useState(true);

  const handleNameChange = e => {
    setname(  e.target.value );
  };
  const handlePasswordChange = e => {
    setpassword(e.target.value );
  };

  const warningMsg = {
    color: isValid ? 'green' : 'red',
  }; 

  const postHandler = e => {
    e.preventDefault();
    if (name.length <= 3 || password.length <= 3  ) {
      setisValid(false)
    }
    const user = { name, password };
  
    console.log(user);
    fetch('http://localhost:3000/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };


  return (
    <BrowserRouter>
      <Route>
        <h1>Foxticket</h1>
        <div className="container">
          <form onSubmit={postHandler}>
            <input
              className={"input-" + warningMsg.color}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              onChange={handleNameChange}
            />
            <input
              className={"input-" + warningMsg.color}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
            <p style={warningMsg} className={` ${isValid ? 'isValid' : ''}`}>
              Username or Password is incorrect   
              <FaExclamationTriangle color="red" size="1.5em" />
            </p>

            <i className="fas fa-exclamation-triangle"></i>

            <NavLink className="register" to="/register" exact>
              REGISTER
            </NavLink>
            <button className="login">Login</button>
          </form>
        </div>
      </Route>
    </BrowserRouter>
  );
};

export default Login;