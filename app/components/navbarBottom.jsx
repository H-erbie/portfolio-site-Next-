import React from "react";
import {
    FaHome,
    FaUser,
    FaTools,
    FaBriefcase,

  } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";

  const Navbar = () => {
     const navLinks = [
        {
          id: 1,
          url: "home",
          icon: <FaHome />,
        },
        {
          id: 2,
          url: "about",
          icon: <FaUser />,
        },
        {
          id: 3,
          url: "skills",
      
          icon: <FaTools />,
        },
        {
          id: 4,
          url: "projects",
      
          icon: <FaBriefcase />,
        },
        {
          id: 5,
          url: "contact",
      
          icon: <AiFillMail />,
        },
      ];
      
  return (
    <div className="nav bottom-0 justify-center">
 <div className="nav-items">
        {navLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <a href={`#${url}`} key={id} className="link">
              <span
                className=''
                
              >
                {icon}
              </span>
            </a>
          );
        })}
      </div>    </div>
  );
};

export default Navbar;
