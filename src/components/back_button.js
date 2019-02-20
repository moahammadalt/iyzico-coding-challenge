import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const BackButton = ({to}) => (

  <div className="back-btn-container col-md-1">
    <Link to={to ? to : '/'}>
      <img src={require('../assets/images/back.png')} alt="sorry, not available now" />
    </Link>
  </div>
  
);

export default BackButton;
