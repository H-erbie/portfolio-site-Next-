'use client'
import React, { Suspense } from 'react'
import profileImg from '@/public/mee.jpg'
import Image from 'next/image'

const Header = () => {
  return (
    <section id='home' className='flex p-0 lg:flex-row flex-col-reverse  justify-center gap-7 items-center'>
       <div className="flex flex-col lg:items-start items-center gap-4 lg:w-[650px]">
        <p className="text-xl text-lime-300">Hi, I'm</p>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl txt text-center lg:text-start lg:leading-[90px]">Herbert Ansong Koranteng</h1>
        <p className="text-xl text-lime-300">and I'm a</p>
        <h2 className="md:text-3xl sm:text-2xl text-xl  lg:text-4xl font-bold txt">Frontend Developer</h2>
      </div>
      <Suspense fallback={<div>loading...</div>}>
      <div className="home-right">
        <div className="overflow-hidden hover:animate-pulse border-white w-[260px] md:w-[300px] h-[260px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full ">
          <Image  src={profileImg} alt="Herbert Ansong Koranteng" width={370} height={370}/>
        </div>
      </div>
      </Suspense>
    </section>
  )
}

export default Header