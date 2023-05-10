import React from 'react'

const Support = () => {
  return (
    <div>
      <div class="relative">
  <video src="https://dd2cgqlmnwvp5.cloudfront.net/support/hero-video-v2.webm" muted autoplay loop class="w-full h-auto object-cover" alt="Slider 1"></video>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h2 class="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 ">Escape Treasure Island</h2>
    
    <div class="flex flex-col sm:flex-row">
    <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
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
  </div>
    </div>
  )
}

export default Support