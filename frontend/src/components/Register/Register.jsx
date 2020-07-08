import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import './Register.styles.sass';
import Button from '../Button/Button';
import axios from 'axios';

const initialValues = {
  email: '',
  username: '',
  password: '',
  confirm: '',
};

const Register = () => {
  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: values => {
      values.values.password === values.values.confirm
        ? axios({
            method: 'post',
            baseURL: 'http://localhost:3000/',
            url: '/api/users',
            data: {
              name: values.values.username,
              email: values.values.email,
              password: values.values.password,
            },
          })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        : console.log(`Passwords don't match!`);
    },
  });
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <fieldset>
          <h1>Foxticket</h1>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="E-mail..."
            autoComplete="off"
            required={true}
          />

          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="User Name..."
            autoComplete="off"
            required={true}
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Password..."
            autoComplete="off"
            required={true}
          />

          <input
            type="password"
            name="confirm"
            onChange={handleChange}
            value={values.confirm}
            placeholder="Confirm password..."
            autoComplete="off"
            required={true}
          />

          <Button type="submit" buttonSize="btn--medium">
            Sign Up
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
