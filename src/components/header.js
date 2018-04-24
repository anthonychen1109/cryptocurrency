import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link className='text' to='/'>WTFCOIN</Link></li>
        <li><Link className='text' to='/markets'>Markets</Link></li>
        <li><Link className='text' to='/search'>Search Coin</Link></li>
      </ul>
      <ul>
        <li>Log In</li>
        <li><a className='text' href='http://127.0.0.1:8000/signup/'>Sign Up</a></li>
      </ul>
    </div>
  )
}

export default Header;
