import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../flux/actions/authActions'
import { Link, BrowserRouter } from "react-router-dom";

function Logout(props) {
  
  const {logout} = props
  return (
    <>
        <Link to="/" className="nav-links" onClick={logout}>Logout</Link>
    </>
  )
}

export default connect (null, {logout})(Logout)
