import React, { useEffect } from "react";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { Outlet } from "react-router-dom";
import './abouts.scss';
import Copyrightz from "../Copyright/Copyright";
import { NavbarContext } from '../../Context/NavbarContext';





function About () {
    const [letterClass, setLetterClass] = useState('text-animate')

    const {setAppNavbar} = useContext(NavbarContext)

    useEffect(() => {
      setAppNavbar('app__navbar-none')
        // eslint-disable-next-line
    },[])
    

    useEffect(()=> {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

    },[])


    return (
        <div className="flex fixed ml-15">
            <div className="containers">
                {/* <span className="tags top-tags">&lt;body&gt;</span> */}
                <div className="text-zone">
                    <Outlet /> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15} />
                    </h1>
                    <p>
                        Sanusi Olaide is a very ambitious developer, with the ability to adapt and learn new technologies of various kind,
                            having  a major in Chemical Engineering. I am a Tech enthusiast also a problem solver 
                    with a profound Knowledge of several computer languages from, Python, C# and Javascript
                    Also having Knowledge in DataScience, MachineLearning in which i have solved different projects  ranging from Webapps, frontend
                    Housing Prices, Image Classification, Numbers Identification,  e.t.c with the use of different Machine Learning Algorithms such
                    as Linear-Logistic Regression, PCA, Artifical Neural Networks and Deep-Learning coupled with some Data Analysis using python libraries such as
                    Pandas, Numpy and Matplotlib.
                    </p> <br/>

                    <p>
                    looking forward to working, collaborating, learning to become an expert when giving an opportunity to work with the 
                    latest technologies on challenging and diverse projects.
                    </p> <br/>
                    <p>
                        I'm quietly confident, naturally curious, and pepetually working an improving my skills one design problem at a time.
                    </p> <br/>
                    <p>
                        if i need to define myself in one sentense that would be a family person, a sports fanatic, and tech-obsessed!!!
                    </p> 
                    
                    {/* <span  className="bottom-tags">
                        &lt;/body&gt;
                        <br />
                        <span className="bottom-tag-html">&lt;/html&gt;</span>
                            
                    </span>
                     */}
                </div>


                <div className="stage-cube-cont">
                    
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon  icon={faPython} color="#DD0031"/> 
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon  icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon  icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon  icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon  icon={faJsSquare} color="#EFD81D "/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon  icon={faGitAlt} color="#EC4D28"/>
                        </div>
                        
                    </div>
                </div>


            </div>
            <div className="copyrite">
                <p className="p-text"><Copyrightz /></p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>

    )

}
export default About