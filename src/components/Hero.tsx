import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/Profile.jpg)] bg-cover'
    style={{backgroundSize: "30%", backgroundPosition: "left 170px top 170px "}}>
      
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[90px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="fade-left">I'm</p>
            <p data-aos="fade-left">Soofia</p>
            <p data-aos="fade-left">Aleem</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
