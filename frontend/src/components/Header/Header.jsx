import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import Logout from './Logout';
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './Header.styles.sass'

function Header(props) {
  return (
    <nav className="NavbarItems" >
      <img src={FoxticketLogo} alt='navigation bar logo'></img>
      <h3 className="nav-text">Foxticket</h3>
      <ul className="nav-menu">
      { 
        props.type ==='admin' &&
         <Link to="/admin" className="nav-links" >Admin</Link>
      }
        <li className="nav-links">{props.userName}</li>
        <Logout />
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.name
  }
}

export default connect (mapStateToProps)(Header)
