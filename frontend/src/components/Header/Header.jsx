import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import './Header.styles.sass'
import { Link } from "react-router-dom";
import Logout from './Logout';
import { connect } from 'react-redux';

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
        <li className="nav-links">{props.user}</li>
          <Logout />
        </ul>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  return {
    user: state.auth.user
  }
}

export default connect (mapStateToProps)(Header)
