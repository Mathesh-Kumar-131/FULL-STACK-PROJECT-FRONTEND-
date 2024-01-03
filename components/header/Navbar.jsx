// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header/Navbar.css'; // Import the CSS file for styling
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  function handleClick() {
    window.location.href = '/LoginPage';
  }
  const { loginWithRedirect, logout, isAuthenticated, user, } = useAuth0();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu" className="navbar-link">Menu</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">Cart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/orders" className="navbar-link">Orders</Link>
        </li>
        <li className="navbar-item">
          <Link to="/account" className="navbar-link">Profile</Link>
        </li>

        <div className='user-auth'>
          
        
                {/* <button className="btn-auth" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> */}
           
                <button className="btn-auth"  onClick={handleClick}>Log In</button>
            
          
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
