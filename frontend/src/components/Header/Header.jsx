import React from 'react';
import FoxticketLogo from '../../assets/images/logos/Foxticket.png';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.styles.sass';
import PropTypes from 'prop-types';

function Header({ userName, isAdmin }) {
  return (
    <nav className="NavbarItems">
      <Link to="/">
        {' '}
        <img src={FoxticketLogo} alt="navigation bar logo" />
      </Link>
      <h3 className="navbar-brand ml-3 mt-1 " id="fox-brand">
        Foxticket
      </h3>
      <ul className="nav-menu">
        {isAdmin && (
          <Link to="/admin" className="nav-links mt-1">
            Admin
          </Link>
        )}

        {userName ? (
          <Link to={'shop'} className="nav-links mt-1">
            Shop
          </Link>
        ) : (
          <>
            <Link to={'/login'} className="nav-links mt-1">
              Login
            </Link>
            <Link to={'/register'} className="nav-links mt-1">
              Register
            </Link>
          </>
        )}

        {userName && (
          <>
            <li className="nav-links mt-1">{userName}</li>
            <Logout />
          </>
        )}
      </ul>
    </nav>
  );
}

const mapStateToProps = state => {
  if (state.auth.user) {
    return {
      userName: state.auth.user,
      isAdmin: state.auth.isAdmin,
      error: state.error,
    };
  } else {
    return {
      userName: null,
      isAdmin: false,
    };
  }
};

Header.propTypes = {
  userName: PropTypes.string,
  isAdmin: PropTypes.any,
};

export default connect(mapStateToProps)(Header);
