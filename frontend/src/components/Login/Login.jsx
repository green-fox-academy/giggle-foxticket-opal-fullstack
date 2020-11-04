import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../flux/actions/authActions';
import './Login.sass';

const Login = ({ location, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector(state => state.auth);
  const { user } = userLogin;

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/shop';

  useEffect(() => {
    if (user) {
      history.push('/shop');
    }
  }, [history, user, redirect, dispatch]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login({ username: username, password: password }));
  };

  return (
    <div className="login-body">
      <div className="login_title">Foxticket</div>
      <div className="login_container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            required
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <button className="login_btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
