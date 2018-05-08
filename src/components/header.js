import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link className='text' to='/'>Lambo to the Moon</Link></li>
        <li><Link className='text' to='/markets'>Markets</Link></li>
        <li><Link className='text' to='/search'>Search Coin</Link></li>
      </ul>
      <ul>
        <li><Link className='text' to='/login'>Log In</Link></li>
        <li><Link className='text' to='/signup'>Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Header;
