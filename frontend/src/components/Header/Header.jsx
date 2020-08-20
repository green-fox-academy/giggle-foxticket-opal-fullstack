import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import './Header.styles.sass'
import { Link } from "react-router-dom";
import Logout from './Logout';

export default function Header(props) {

// localStorage.removeItem('token');
// <li className="nav-links" onClick={logoutSession}>Logout</li>


  return (  
    <nav className="NavbarItems" >
      <img src={FoxticketLogo} alt='navigation bar logo'></img>
      <h3 className="nav-text">Foxticket</h3>
        <ul className="nav-menu">
        { 
          props.type ==='admin' &&
          <Link to="/admin" className="nav-links" >Admin</Link>
        }
          <li className="nav-links">Username</li>
          <Logout />
        </ul>
    </nav>
  )
}
