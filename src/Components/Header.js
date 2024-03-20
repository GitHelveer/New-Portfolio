import React, { useState } from 'react';
import './Header.css';
import littlelemon from './littlelemon.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className='headerhead'>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
          <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Orde Online</a></li>
          <li><Link to="/Booking">Reservations</Link></li>
        </ul>
        <ul>
          <li><img src={littlelemon} alt="logo of the website"/></li>
          <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
          <li className="hideOnMobile"><Link to="/">Home</Link></li>
          <li className="hideOnMobile"><a href="#">About</a></li>
          <li className="hideOnMobile"><a href="#">Menu</a></li>
          <li className="hideOnMobile"><a className="menu-link" href="#">Order-Online</a></li>
          <li className="hideOnMobile"><Link to="/Booking">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;