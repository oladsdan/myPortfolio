import React, {useState, createContext} from 'react';

//const [appNavbar, setAppNavbar] = useState('')

export const NavbarContext = createContext();

export const NavbarContextProvider =({children}) => {
    const [appNavbar, setAppNavbar] = useState('app__navbar')

    return (
        <NavbarContext.Provider value={{appNavbar, setAppNavbar}}>
            {children}
        </NavbarContext.Provider>
    )

}