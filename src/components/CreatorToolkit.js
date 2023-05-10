import React from 'react'
import video2 from "../assets/video2.mp4"

const CreatorToolkit = () => {
  return (
    <div>
<div class="relative">
  <video src={video2} muted autoplay loop class="w-full h-auto object-cover" alt="Slider 1"></video>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h2 class="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 ">Escape Treasure Island</h2>
    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Can you escape Treasure Island? Find the planks, rebuild the ship!</p>
    <p class="block sm:hidden text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Escape Treasure Island</p>
    <div class="flex flex-col sm:flex-row">
      <input type="email" class="w-full sm:w-1/2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3 sm:mr-2" placeholder="Enter your email" />
      <button class="w-full h-[40px] sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Get Started</button>
    </div>
  </div>
</div>


      
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] px-4">
        <div className="lg:text-4xl md:text-2xl mb-6 font-bold leading-tight">Spatial Creator Toolkit</div>
        <p className="text-sm md:text-lg mb-4">
        Build interactive, engaging worlds and share them instantly to Web, iOS, Android, and Meta Quest.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-full md:w-auto">GET STARTED</button>
      </div>

      <div class="flex flex-wrap justify-center border-2">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 my-2">
    <div class="relative">
      <img src="https://realgaming101.es/wp-content/uploads/2022/06/GTA-Online-Todo-lo-que-sabemos-de-la-actualizaci%C3%B3n-del-2-de-junio-de-2022.jpg" alt=""/>
      <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-80 transition duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h3 class="text-white text-lg font-bold mb-2">Bring your wildest imaginations to life</h3>
          <p class="text-white text-sm"> Customize stunning 3D environments to explore with your friends & community.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 my-2">
    <div class="relative">
      <img src="https://wallpapers.com/images/hd/gta-5-main-characters-e4rzrndhs77vx1ro.jpg" class="w-full h-auto rounded-lg shadow-md" alt=""/>
      <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-80 transition duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h3 class="text-white text-lg font-bold mb-2">Customize stunning 3D environments to explore with your friends & community.</h3>
          <p class="text-white text-sm">From escape rooms to puzzles, craft quests that guide visitors through your spaces.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 my-2">
    <div class="relative">
      <img src="https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2013/3/28/1364465236263/GTA-5-screen-010.jpg?width=700&quality=85&auto=format&fit=max&s=8c19b70d394f7ccd09950bfd4582862b" class="w-full h-auto rounded-lg shadow-md" alt=""/>
      <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-80 transition duration-300">
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h3 class="text-white text-lg font-bold mb-2">Express more with custom avatars</h3>
          <p class="text-white text-sm ">Import custom rigged avatars, and inhabit them anywhere within Spatial..</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="max-w-lg mx-auto">
  <h2 class="text-2xl font-bold text-center m-12">Frequently Asked Questions</h2>
  <div class="border rounded-lg overflow-hidden">
  </div>
</div>


<div id="accordion" className=''>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Who can use the Creator Toolkit?
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      Anyone can start using the Toolkit right now. Check out
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do I need to know how to code?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      Nope! No coding required. We highly recommend becoming familiar with Unity3D first - check out their incredible Tutorial Series, starting with the
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What game engines are supported? Will other engines be supported in the future?
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      The Creator Toolkit is built on Unity, which offers an incredible balance of diverse platform support, accessibility and visual quality. We do not have plans to support additional engines (Unreal, Godot, etc.) at this time.
      </div>
    </div>
  </div>
  <div class="relative">
  <video src={video2} muted autoplay loop class="w-full h-auto object-cover" alt="Slider 1"></video>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h2 class="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 ">Escape Treasure Island</h2>
    <p class="hidden sm:block text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Can you escape Treasure Island? Find the planks, rebuild the ship!</p>
    <p class="block sm:hidden text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Escape Treasure Island</p>
    <div class="flex flex-col sm:flex-row">
      <input type="email" class="w-full sm:w-1/2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-3 sm:mr-2" placeholder="Enter your email" />
      <button class="w-full h-[40px] sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Get Started</button>
    </div>
  </div>
</div>
</div>
<hr className='m-3' />


    </div>

    
  )
}

export default CreatorToolkit
