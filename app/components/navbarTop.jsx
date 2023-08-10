"use client";
import React, { useEffect, useState } from "react";
import resume from "../../public/resume.pdf";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useGlobalContext } from "@/context/context";
import { useTheme } from "next-themes";
const NavbarTop = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    window.onload = window.addEventListener("scroll", () => {
      const topbar = document.querySelector(".topbar");
      topbar.classList.toggle("blur-top", window.scrollY > 0);
    });
  }, []);
  return (
    <nav className="nav top-0 justify-between p-3 px-7 transition-all topbar">
      <div className="text-2xl">
        her<span className=" text-lime-400">β</span>ie
      </div>
      <div className="flex items-center gap-7">
        <a
          href={resume}
          download="resume"
          className="p-2 py-1 rounded-md border border-lime-500 before:content-[''] relative overflow-hidden hover:before:left-0 before:transition-all before:-z-[1] hover:text-slate-900 before:absolute before:w-full before:h-full before:-left-full before:top-0 before:rounded-md before:bg-lime-500"
        >
          <button className="text-sm">Download resume</button>
        </a>
        <button className="text-4xl ">
          {theme == "dark" ? (
            <FaToggleOn onClick={handleClick} />
          ) : (
            <FaToggleOff onClick={handleClick} />
          )}
        </button>
      </div>
    </nav>
  );
};
export default NavbarTop;
