import React from "react";
import css from "@/public/assests/css.png";
import html from "@/public/assests/html.png";
import javascript from "@/public/assests/javascript.png";
import git from "@/public/assests/git.png";
import node from "@/public/assests/node.png";
import sass from "@/public/assests/sass.png";
import typescript from "@/public/assests/typescript.png";
import react from "@/public/assests/react.png";
import tailwind from "@/public/assests/tailwind.png";
import express from "@/public/assests/express.png";
import firebase from "@/public/assests/firebase.png";
import mongo from "@/public/assests/mongo.png";
import next from "@/public/assests/next.png";

import Image from "next/image";
const Skills = () => {
  const langs = [
    {
      id: 1,
      name: "HTML",
      image: html,
      level: "experienced",
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      level: "experienced",
    },
    {
      id: 3,
      name: "JavaScript",
      image: javascript,
      level: "experienced",
    },
    {
      id: 4,
      name: "typescript",
      image: typescript,
      level: "intermediate",
    },
    {
      id: 5,
      name: "sass",
      image: sass,
      level: "experienced",
    },
    {
      id: 6,

      name: "tailwind",
      image: tailwind,
      level: "experienced",
    },
    {
      id: 7,
      name: "react",
      image: react,
      level: "experienced",
    },
    {
      id: 8,
      name: "next",
      image: next,

      level: "experienced",
    },
    {
      id: 9,
      image: git,
      name: "git",
      level: "experienced",
    },
    {
      id: 10,
      name: "node",
      image: node,
      level: "intermediate",
    },
    {
      id: 11,
      name: "express",
      image: express,
      level: "intermediate",
    },
    {
      id: 12,
      name: "mongo",
      image: mongo,
      level: "intermediate",
    },
    {
      id: 13,
      name: "firebase",
      image: firebase,
      level: "intermediate",
    },
  ];
  return (
    <section id="skills">
      <h2 className="text-center font-bold  text-xl lg:text-2xl">Skills</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto w-3/4 gap-[5%] items-center justify-center">
        {langs.map((item) => {
          const { id, image, level, name } = item;
          return (
            <article key={id} className="items-center rounded-md py-3 justify-center flex flex-col sm:flex-row items-center fap-2 sm:gap-5 hover:bg-gray-100 hover:text-black">
              <div className="flex flex-col gap-y-3">
              <Image
                width={60}
                height={60}
                src={image}
                alt="programming language"
              />
              <span className="hidden sm:block text-center">{name}</span>
              </div>
              <span className="level">{level}</span>
              
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
