import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../flux/actions/authActions';
import { clearErrors } from '../../flux/actions/errorActions';
import useCustomForm from '../../hooks/useCustomForm';
import './Login.sass';

const initialValues = {
  name: '',
  password: '',
};

const Login = props => {
  const { values, handleChange, handleSubmit } = useCustomForm({
    initialValues,
    onSubmit: values => {
      props.login(values);
    },
  });

  return (
    <div className="login-body">
      <div className="login_title">Foxticket</div>
      <div className="login_container">
        <form onSubmit={handleSubmit}>
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
          <button className="login_btn">Login</button>
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
  login,
  clearErrors,
})(Login);
