import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser,  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
  return (
    <div className="app__sidebar">
      {/* <Link className="logo" to='/'>
        <img src={""} alt="logo" />
      </Link> */}

      <div className="block text-center absolute h-[210px] top-[50%] mt-[-120px] w-[100%] app__sidebar-links">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#0e0ec7" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#0e0ec7" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#0e0ec7" />
        </NavLink>

      </div>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' 
            href="https://www.linkedin.com/in/olaide-sanusi-727573194">
              <FontAwesomeIcon icon= {faLinkedin} color="#0e0ec7" /> 
          </a>
        </li>
                
        <li>
          <a target="_blank" rel='noreferrer' 
            href="https://www.github.com/oladsdan">
              <FontAwesomeIcon icon= {faGithub} color="#0e0ec7" /> 
          </a>
        </li>
      </ul>
      
    </div>
  )
}

export default Sidebar