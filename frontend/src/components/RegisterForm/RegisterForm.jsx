import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import './RegisterForm.styles.sass';

const initialValues = {
  email: '',
  username: '',
  password: '',
};

const RegisterForm = () => {
  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: values => console.log({ values }),
  });

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>E-mail</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />

      <label>User Name</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={values.username}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
