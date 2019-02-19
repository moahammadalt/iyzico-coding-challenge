import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const BackButton = ({to}) => (

  <div className="back-btn-container col-md-1">
    <Link to={to ? to : '/'}>
      <img src={require('../assets/images/back.png')} />
    </Link>
  </div>
  
);

export default BackButton;
