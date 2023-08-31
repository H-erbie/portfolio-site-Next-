import React from "react";
import img from '@/public/me2.jpg'
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className='flex gap-7 flex-col justify-center'>
      {" "}
      <h2 className="text-center font-bold  text-xl lg:text-2xl ">About me</h2>
      <article className="flex flex-col h-[450px] lg:flex-row justify-center items-center">
        <div className="w-1/2 min-w-[220px] h-full flex items-center justify-center">
          <div className="w-[240px] h-[240px] overflow-hidden lg:w-[300px] lg:h-[300px] hover:animate-pulse rounded-md">
            <Image width={300} height={300} src={img} alt="Herbert Ansong Koranteng" className=" transition-all"/>
          </div>
        </div>
        <div className="lg:w-1/2 h-full justify-center lg:gap-9 gap-5 flex flex-col w-3/4 text-base lg:text-lg">
          <p className="w-full max-w-[500px] lg:m-0 mx-auto lg:w-4/5 ">
            I'm a self-taught frontend developer and currently a sophomore,
            studying computer science at the university of Energy and Natural
            Resources (UENR).
          </p>
          <div>
            <h4 className="text-lg lg:text-xl text-center lg:text-start mb-3 font-bold">My Hobbies</h4>
            <ul className="grid grid-cols-2 gap-3 place-items-center hob lg:place-items-start  justify-center">
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
