import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGOUT_SUCCESS } from '../../flux/actions/types';

function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/"
        className="nav-links"
        onClick={() => {
          dispatch({ type: LOGOUT_SUCCESS });
        }}
      >
        Logout
      </Link>
    </>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
