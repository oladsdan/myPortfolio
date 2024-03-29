import React, { useState, useEffect } from 'react';
import './hero.scss';
import { motion } from 'framer-motion';
import { images } from '../../assets';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { AppWrap } from '../../wrapper';



const Hero = () => {
  


  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray =['S', 'a', 'n', 'u','s','i', ]
  



  useEffect(() =>{
    setTimeout(() => {setLetterClass("text-animate-hover")}, 4000)

  },[])

  return (
    
    <div  className="app__header app__container app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition = {{ duration: 0.5}}
        className= "app__header-info"
      
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text"><AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/></h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer | </p>
            <p className="p-text">ML Engineer | </p>
            <p className="p-text">Data Scientist</p>
          </div>

        </div>

      </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* the persons profile */}
      <img src={images.profile3} alt="profile_bg" /> 
    <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.python, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

    </div>
  )
}

export default AppWrap(Hero, 'home')