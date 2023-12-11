import React, { useState } from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
  
  
  const [activeItem, setActiveItem] = useState('itemHome');

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    
    
    <>
    <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul id="menu-items" >
                  <li  className={activeItem === 'itemHome' ? 'active' : ''} onClick={() => handleClick('itemHome')}><a href="/">HOME</a></li>
                  <li  className={activeItem === 'itemproduct' ? 'active' : ''} onClick={() => handleClick('itemproduct')}><a href="/Product">PRODUCT</a></li>
                  <li  className={activeItem === 'itemContact' ? 'active' : ''} onClick={() => handleClick('itemContact')}><a href="/About">ABOUT US</a></li>
                  <li  className={activeItem === 'itemAbout' ? 'active' : ''} onClick={() => handleClick('itemAbout')}><a href="/Contact">CONTACT US</a></li>
            </ul>
            
            <span class="logo"><img src=''/></span>
        </div>
    </nav>

 
    </>
  )
}
