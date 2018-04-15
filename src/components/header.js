import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><p>WTFCOIN</p></li>
        <li>Home</li>
        <li>Markets</li>
      </ul>
      <ul>
        <li>Log In</li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Header;
