import React from 'react'
import video from "../assets/video.mp4"
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { BiArrowBack } from "react-icons/bi";




const HeroBanner = () => {

  return (
<Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <video src={video2} muted autoPlay loop  className='w-[100vw] h-full object-cover' alt="Slider 1" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Escape Treasure Island</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Can you escape Treasure Island? Find the planks, rebuild the ship,! </p>
  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Play Now</button>
</div>
      </div>
      <div>
        <video src={video1} muted autoPlay loop className='w-[100vw] h-full object-cover' alt="Slider 2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Escape Treasure Island</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Can you escape Treasure Island? Find the planks, rebuild the ship,! </p>
  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Play Now</button>
</div>
      </div>
      <div>
        <video src={video} muted autoPlay loop  className='w-[100vw] h-full object-cover' alt="Slider 3" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Escape Treasure Island</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Can you escape Treasure Island? Find the planks, rebuild the ship,! </p>
  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Play Now</button>
</div>
      </div>
    </Carousel>
    
   
  
  )
}

export default HeroBanner