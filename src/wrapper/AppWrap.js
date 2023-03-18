import React from 'react'
import NavigationDots from '../components/NavigationDots'
import Copyrightz from '../components/Copyright/Copyright'





const AppWrap = (Component, idName, classNames) => function HOC() {
  
    return (
    <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
            <Component />
            

            <div className="copyright">
                <p className="p-text"><Copyrightz /></p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active ={idName} />
    </div>
  )
}

export default AppWrap