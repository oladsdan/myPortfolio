import React from 'react'
import NavigationDots from '../components/NavigationDots'


function Copyright () {
    var date = new Date()
    var present = date.getFullYear()

    return (
        <>@2022 - {present} Sanusi</>
        
        
    )
}



const AppWrap = (Component, idName, classNames) => function HOC() {
  
    return (
    <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
            <Component />

            <div className="copyright">
                <p className="p-text"><Copyright /></p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active ={idName} />
    </div>
  )
}

export default AppWrap