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
      <img src={FoxticketLogo} alt="navigation bar logo" />
      <h3 className="nav-text">Foxticket</h3>
      <ul className="nav-menu">
        {isAdmin && (
          <Link to="/admin" className="nav-links">
            Admin
          </Link>
        )}

        {userName ? (
          <Link to={'shop'} className="nav-links">
            Shop
          </Link>
        ) : (
          <>
            <Link to={'/login'} className="nav-links">
              Login
            </Link>
            <Link to={'/register'} className="nav-links">
              Register
            </Link>
          </>
        )}

        {userName && (
          <>
            <li className="nav-links">{userName}</li>
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
