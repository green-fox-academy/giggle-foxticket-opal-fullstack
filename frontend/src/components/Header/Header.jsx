import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import Logout from './Logout';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './Header.styles.sass'

function Header({userName, isAdmin}) {
  return (
      <nav className="NavbarItems" >
        <img src={FoxticketLogo} alt='navigation bar logo'></img>
        <h3 className="nav-text">Foxticket</h3>
        <ul className="nav-menu">
        {
          userName &&
          <>
          <li className="nav-links">{userName}</li>
          <Logout />
          </>
        }
        { 
          isAdmin &&
          <Link to="/admin" className="nav-links" >Admin</Link>
        }
        </ul>
      </nav>
  )
}

const mapStateToProps = (state) => {
   if(state.auth.user) {
      return {
        userName: state.auth.user,
        isAdmin: state.auth.isAdmin
      }
   } else {
      return {
        userName: null,
        isAdmin: false
      }
   }
}

export default connect (mapStateToProps)(Header)
