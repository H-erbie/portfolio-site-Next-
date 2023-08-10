"use client";
import React from "react";
import { FaHome, FaUser, FaTools, FaBriefcase } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useGlobalContext } from "@/context/context";

const Navbar = () => {
  const { activeLink } = useGlobalContext();
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
    <div className="nav bottom-0 sm:bottom-5 justify-center">
      <div className="flex gap-8 sm:rounded-full backdrop-blur-md backdrop-brightness-50 p-6 px-8 w-full  justify-evenly sm:w-max">
        {navLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <a href={`#${url}`} key={id} className="link">
              <span
                className={
                  activeLink === url ? "text-lime-500 text-3xl" : "text-3xl"
                }
              >
                {icon}
              </span>
            </a>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default Navbar;
