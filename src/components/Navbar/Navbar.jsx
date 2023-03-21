import React, {useContext, useState} from 'react'
import './navbar.scss';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import { images } from '../../assets';
import { NavbarContext } from '../../Context/NavbarContext';

const Navbar = () => {

  const {appNavbar} = useContext(NavbarContext)

  const [toggle, setToggle] = useState(false);


  return (
    <div className={`w-[100%] flex justify-between items-center bg-black-col px-[2rem] py-[1rem] ${appNavbar}`}>
      <div className="flex justify-start items-center app__navbar-logo">
        <img src={images.logo2} alt="logo" />
      </div>
      {/* we map through the list of the links */}
      <ul className="flex justify-center items-center list-none  app__navbar-links">
        {['home', 'about', 'work', 'skills','contact'].map((item)=>(
          <li className=" cursor-pointer font-bold flex-col app__flex p-text" key={`link-${item}`}> 
            <div />

            {/* {item==="home"? 
              <Link to="/">{item}</Link> : <a href={`#${item}`}>{item}</a>
            } */} 

            <a href={`#${item}`}>{item}</a>
            
          </li>

        ))}
      </ul>

      {/* we code the navbar for the menu ones */}
      <div className="w-[100px] h-[35px] rounded-[50%] relative right-4 flex justify-center items-center app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true )} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{ duration: 0.85, ease: 'easeOut'}} >
              <HiX onClick={() => setToggle(false)} className="absolute left-1" />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    {/* adding the onClick properties on the anchor tag makes the navbar closes anytime an item is clicked */}
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
              ))}
            </ul>

          </motion.div>
        )}

      </div>


    </div>
  )
}

export default Navbar