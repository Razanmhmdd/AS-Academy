import React from 'react'
import HeroImg from "../../assets/img/img1.png";
const Hero = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
    {/* Left Section: Text and Button */}
    <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
      <div className='text-center md:text-left py-14 space-y-6 lg:max-[400px]'>
        <h1 className='text-5xl lg:text-6xl font-bold text-secondary leading-relaxed xl:leading-loose'>
          මෑණුම් කලාව තුළින් සාර්ථක වෙන්න
        </h1>
        <h1 className='text-3xl lg:text-4xl font-bold leading-relaxed xl:leading-loose'>
          ඔබත් මෑණුම් කලාවෙන්
          <span className=''>මිලියනපතියෙක් වෙන්න</span>
        </h1>
        
        
        <div className='mt-6'>
          <button className='primary-btn bg-red-500 text-white px-6 py-3 rounded-full text-lg'>
          දැන්ම පාඨමාලාවට එකතු වෙන්න
          </button>
        </div>
      </div>
    </div>
  
    {/* Right Section: Empty or Image Placeholder */}
    <div className='flex justify-center items-center right-5'>
      <img src={HeroImg} alt='' className='w-[350px md:w-[550px] drop-shadow '/>
    </div>
  </section>
  
  )
}

export default Hero