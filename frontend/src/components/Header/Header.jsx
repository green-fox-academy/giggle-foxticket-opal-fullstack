import React from 'react'
import FoxticketLogo from '../../assets/images/logos/Foxticket.png'
import './Header.styles.sass'

export default function Header(props) {


  return (  
    <nav className="NavbarItems" >
      <img src={FoxticketLogo} alt='navigation bar logo'></img>
      <h3 className="nav-text">Foxticket</h3>
        <ul className="nav-menu">
        { 
          props.type ==='admin' &&
          <li className="nav-links">Admin</li>
        }
          <li className="nav-links">Username</li>
          <li className="nav-links">Logout</li>
        </ul>
    </nav>
  )
}
