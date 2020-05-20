// import React, { Component } from 'react';

import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <nav>
          <h2>Shopping Cart</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <span>0</span> Products in Cart
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
