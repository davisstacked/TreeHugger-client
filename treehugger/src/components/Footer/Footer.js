import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Footer.css'
import logo from './treehuggerlogo.jpg'

function Footer() {
  return (
  
    
    <footer class="footer">
      <div className="footer-container">
        <NavLink className="footer-logo" to='/'>
          <img src={logo} height='50' />
        </NavLink>
        <ul className="footer-nav-list">
          <li className='footer-nav-item'>
           <Link className='footer-nav-link' to="https://github.com/davisstacked">GitHub</Link>
          </li>
          <li className='footer-nav-item'>
            <Link className='footer-nav-link' to="https://www.linkedin.com/in/leahdavis25624/">LinkedIn</Link>
          </li>
        </ul>
        </div>
    </footer>
  );
}

export default Footer;