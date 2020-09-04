import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import Logout from './Logout';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './Header.styles.sass'

function Header({userName, isAdmin}) {
  return (
    <>
    { localStorage.getItem('token') &&
      <nav className="NavbarItems" >
        <img src={FoxticketLogo} alt='navigation bar logo'></img>
        <h3 className="nav-text">Foxticket</h3>
        <ul className="nav-menu">
        { 
          isAdmin &&
          <Link to="/admin" className="nav-links" >Admin</Link>
        }
          <li className="nav-links">{userName}</li>
          <Logout />
        </ul>
      </nav>
    }
    </>
  )
}

const mapStateToProps = (state) => {
    if(state.user){
      return{
        userName: state.user.name,
        isAdmin: state.user.isAdmin
      }
    }else{
      return{
        userName: null,
        isAdmin: false
      }
   }
}

export default connect (mapStateToProps)(Header)
