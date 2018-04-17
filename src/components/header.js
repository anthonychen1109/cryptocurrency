import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link to='/'>WTFCOIN</Link></li>
        <li><Link to='/markets'>Markets</Link></li>
      </ul>
      <ul>
        <li>Log In</li>
        <li><a href='http://127.0.0.1:8000/signup/'>Sign Up</a></li>
      </ul>
    </div>
  )
}

export default Header;
