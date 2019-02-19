import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => (
  <header className='header'>
    <Link to={`/`}>
      <h1 className="logo">RICK AND MORTY</h1>  
    </Link>
  </header>
);

export default Header;
