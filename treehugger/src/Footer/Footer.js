import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink className="logo" to='/'>
          <h1>TreeHugger</h1>
        </NavLink>
        <ul className="nav-list">
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/about'>About</NavLink>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;