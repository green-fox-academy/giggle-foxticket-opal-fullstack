import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import './Register.styles.sass';
import Button from '../Button/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { register } from '../../flux/actions/authActions';
import { clearErrors } from '../../flux/actions/errorActions';

const initialValues = {
  email: '',
  name: '',
  password: '',
  confirm: '',
};

const Register = props => {
  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: values => {
      const user = {
        username: values.values.name,
        password: values.values.password,
        email: values.values.email,
      };

      const { register } = props;

      register(user);
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
            name="name"
            onChange={handleChange}
            value={values.name}
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, {
  register,
  clearErrors,
})(Register);
