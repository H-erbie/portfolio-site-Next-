'use client'
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  const activeOnScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home' 
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        if(window.scrollY >= (section.offsetTop - (section.clientHeight / 3))){
          currentSection = section.id;
          setActiveLink(currentSection)
        }
        //console.log('unleash the odlder 3')
      });
      
    })
  }
  
  useEffect(() => {
    activeOnScroll();
  }, [activeLink]);
  return (
    <AppContext.Provider
      value={{
        activeLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };