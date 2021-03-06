import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Footer.css'
import logo from './treehuggerlogo.jpg'

function Footer () {

   return (
    
      
      <footer class="footer">
        <div className="footer-container">
          <NavLink className="footer-logo" to='/'>
            <img src={logo} height='50' />
          </NavLink>
          <ul className="footer-nav-list">
            <li className='footer-nav-item'>
             <a target="_blank" href="https://github.com/davisstacked" className='footer-nav-link'>GitHub</a>
            </li>
            <li className='footer-nav-item'>
              <a target="_blank" href="https://www.linkedin.com/in/leahdavis25624/" className='footer-nav-link'>LinkedIn</a>
            </li>
          </ul>
          </div>
      </footer>
    );
  }

export default Footer;