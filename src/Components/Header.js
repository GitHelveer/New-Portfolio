import React, { useState } from 'react';
import './Header.css';
import littlelemon from './littlelemon.jpg';

function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
          <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul>
          <li><img src={littlelemon} alt="logo of the website"/></li>
          <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
          <li className="hideOnMobile"><a href="#">Blog</a></li>
          <li className="hideOnMobile"><a href="#">Products</a></li>
          <li className="hideOnMobile"><a href="#">About</a></li>
          <li className="hideOnMobile"><a href="#">Forum</a></li>
          <li className="hideOnMobile"><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;