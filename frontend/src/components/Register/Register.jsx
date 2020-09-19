import React from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import './Register.styles.sass';
import { register } from '../../flux/actions/authActions';
import { connect } from 'react-redux';
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
        name: values.values.name,
        password: values.values.password,
        email: values.values.email,
      };

      const { register } = props;

      register(user);
    },
  });

  return (
    <div className="register-body">
      <div className="register_title">Foxticket</div>
      <div className="register_container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={values.email}
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            required
            onChange={handleChange}
            value={values.name}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={values.password}
          />
          <input
            type="password"
            name="confirm"
            id="confirm"
            placeholder="Confirm password"
            required
            onChange={handleChange}
            value={values.confirm}
          />
          <button className="register_btn">Register</button>
        </form>
      </div>
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
