import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import './Register.styles.sass';
import Button from '../Button/Button';

const initialValues = {
  email: '',
  username: '',
  password: '',
  confirm: '',
};

const Register = () => {
  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: values => console.log({ values }),
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
          />

          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="User Name..."
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Password..."
            autoComplete="off"
          />

          <input
            type="password"
            name="confirm"
            onChange={handleChange}
            value={values.confirm}
            placeholder="Confirm password..."
            autoComplete="off"
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
