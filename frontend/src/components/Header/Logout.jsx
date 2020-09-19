import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../flux/actions/authActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Logout(props) {
  const { logout } = props;
  return (
    <>
      <Link to="/" className="nav-links" onClick={logout}>
        Logout
      </Link>
    </>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);
