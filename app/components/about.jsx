import React from "react";
import img from '@/public/me2.jpg'
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      {" "}
      <h2 className="text-center font-bold text-2xl mb-5">About me</h2>
      <article className="flex flex-col h-[450px] lg:flex-row justify-center items-center">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="rounded-md">
            <Image width={300} height={300} src={img} alt="Herbert Ansong Koranteng" className="rounded-lg rotate-12 transition-all hover:brightness-100 brightness-75 hover:rotate-0"/>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 text-lg">
          <p className="about-info w-4/5 ">
            I'm a self-taught frontend developer and currently a sophomore,
            studying computer science at the university of Energy and Natural
            Resources (UENR).
          </p>
          <div>
            <h4 className="text-xl mb-3 font-bold">My Hobbies</h4>
            <ul className="grid grid-cols-2 gap-3">
              <li>Coding💻</li>
              <li>Animating👾</li>
              <li>Video games🎮</li>
              <li>Anime👽</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
