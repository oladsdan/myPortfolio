import React from 'react'
import { AppWrap , MotionWrap } from '../../wrapper';
import {Link} from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <div className="app__footer">
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <Link to="/contact">
        <div className="app__footer-btn">
          <button> contact me</button>
        </div>
      
      </Link>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app_about' ),
  'contact', 
  'app__primarybg', 
);