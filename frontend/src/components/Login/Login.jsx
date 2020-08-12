import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.sass';

import { FaExclamationTriangle } from 'react-icons/fa';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const warningMsg = {
    color: isValid ? 'green' : 'red',
  };

  const postHandler = e => {
    e.preventDefault();
    if (name.length <= 3 || password.length <= 3) {
      setIsValid(false);
    }
    const user = { name, password };

    fetch('http://localhost:3000/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div className="login-body">
      <div className="login_title">Foxticket</div>
      <div className="login_container">
        <form onSubmit={postHandler}>
          <input
            className={'input-' + warningMsg.color}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            onChange={handleNameChange}
          />
          <input
            className={'input-' + warningMsg.color}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
          />
          <p
            style={warningMsg}
            className={` ${isValid ? 'isValid' : 'notValid'}`}
          >
            Username or Password is incorrect
            <FaExclamationTriangle color="red" size="1.5em" />
          </p>

          <i className="fas fa-exclamation-triangle" />

          <Link className="login_register" to="/register" exact>
            REGISTER
          </Link>
          <button className="login_btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
