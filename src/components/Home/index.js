import React, { useContext, useEffect } from "react";
import { About, Footer, Hero, Skills, Work } from "../../container";
import { NavbarContext } from "../../Context/NavbarContext";
import './index.scss';


function Home () {

    const {setAppNavbar} = useContext(NavbarContext)

    useEffect(()=>{
        setAppNavbar('app__navbar')
    // eslint-disable-next-line
    },[])



    return (
        <div className=" overflow-x-hidden ml-[35px] app__home">
            <Hero />
            <About />
            <Work />
            <Skills />
            {/* <Testimonial /> */}
            <Footer />

            
            
            
        </div>
    )
}

export default Home