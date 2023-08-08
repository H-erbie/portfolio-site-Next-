'use client'
import React, { useEffect, useState } from "react";
import resume from '@/assets/resume.pdf'
import {FaToggleOff, FaToggleOn} from 'react-icons/fa'
const NavbarTop = () => {
    const [theme, setTheme] = useState(false)
  useEffect(()=>{
    window.onload = window.addEventListener("scroll", () => {
        const topbar = document.querySelector(".topbar");
        topbar.classList.toggle("blur-top", window.scrollY > 0);
      });
  },[])
  return (
    <nav className="nav top-0 justify-between px-9 transition-all topbar">
      <div className="text-2xl">
        her<span className=" text-lime-400">β</span>ie
      </div>
      <div className="flex items-center gap-5">
        <a href={resume} download className="p-2 rounded-md border border-lime-500">
          <button className="text-sm">Download resume</button>
        </a>
        <button className="text-4xl" >
          {theme ? <FaToggleOn /> : <FaToggleOff />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarTop;
