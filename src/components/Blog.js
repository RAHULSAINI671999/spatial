import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/6447d346cbeebbe85bb46237_mpm.jpeg" muted autoPlay loop  className='w-[100vw] h-full object-cover' alt="Slider 1" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Spatial Updates</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Embark on Epic Adventures with Quests on Spatial.io </p>
  
</div>
      </div>
      <div>
        <img src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/643da645c94f694293199432_Screenshot%202023-04-13%20at%204.59.57%20PM%20copy.png" muted autoPlay loop className='w-[100vw] h-full object-cover' alt="Slider 2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Escape Treasure Island</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">PULL UP: Introducing Drivable Vehicles in Spatial </p>
  
</div>
      </div>
      <div>
        <img src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/640a621e9a002c4cb06891bc_stilo%20world1-p-1600.jpeg" muted autoPlay loop  className='w-[100vw] h-full object-cover' alt="Slider 3" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 -mt-[0.02]">Community</h2>
  <p className="text-sm md:text-lg lg:text-xl text-white mb-2 sm:mb-3">Spatian Spotlight: Dope Stilo Music Club </p>
  
</div>
      </div>
    </Carousel>
    <div className="bg-gray-100 py-20" id="section-third">
  <h2 className="text-4xl font-bold mb-4 text-center">All Blogs Posts</h2>
</div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/6447d346cbeebbe85bb46237_mpm-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Spatial Updates</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Embark on Epic Ad</h2>
        
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/643da645c94f694293199432_Screenshot%202023-04-13%20at%204.59.57%20PM%20copy-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Spatial Updates</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">PULL UP: Introducing Drivable Vehicles in Spatial</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/640a621e9a002c4cb06891bc_stilo%20world1-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Spatian Spotlight: Dope Stilo Music Club</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/63f54aa6f7104f0ca588a6b8_umami%20show-p-500.jpg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Building Culture In the Metaverse: The Power of the Host</h2>
      
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/63e6c83a27389f7164a2b2ab_Ghost%20Jumps_v0.01%20on%202-8-23%20at%203.01%20PM%20(1)-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Experience Art, Culture, Games & More on Spatial: An Immersive Social Platform</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/63e55919869b9eb85bf59136_The%20Queens%20Garden-%20Let%27s%20Play%20Chess!%20on%2012-16-22%20at%2010.21%20AM-p-500.jpg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Spatian Spotlight: HICEECEE</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/63d17ba0fc395d86c34141c6_1500x500-p-500.jpg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">User Highlights</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Spatian Spotlight: Creative Owls</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/63cfdb4f7c152262bbd2d32f_SPATIAL%20ALPHA%20ROOM%202%20on%2012-13-22%20at%2010.47%20AM-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Migrate Your AltspaceVR Worlds & Communities to Spatial</h2>
        
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60df21be8267e68314f13fc8_selfie%20(42)-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">What are 3D NFTs and 4 Things You Can Do With Them!</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78f93fc0e6f726e6b4960_1_xEj-Qg9BpUccmsG20zw7lg%20(1)-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Introducing: The Spatial.io Creator Toolkit, Powered by Unity (Beta)</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78e964c740c63ebc0f5b6_1_uDpSrh3DfQmDoWh447rVYg-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78b7d38121da398b12226_ELYX_MUSEUM-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium"> 10 Examples of NFTs You Can Collect and Invest In</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78cae1264d645516ecee4_1_Hk9UB8nwXUw2NS_0nAXoOg-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78dc5f3064a6c2cab9280_Larvol1-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60aeac71986ec46e26c569e8_oc7-p-800.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78f93fc0e6f726e6b4960_1_xEj-Qg9BpUccmsG20zw7lg%20(1)-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Introducing: The Spatial.io Creator Toolkit, Powered by Unity (Beta)</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78e964c740c63ebc0f5b6_1_uDpSrh3DfQmDoWh447rVYg-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78b7d38121da398b12226_ELYX_MUSEUM-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium"> 10 Examples of NFTs You Can Collect and Invest In</h2>
         
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78cae1264d645516ecee4_1_Hk9UB8nwXUw2NS_0nAXoOg-p-500.png"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60c78dc5f3064a6c2cab9280_Larvol1-p-500.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
          
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.website-files.com/5ff63016e1c8fa9d64a74764/60aeac71986ec46e26c569e8_oc7-p-800.jpeg"/>
        </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Community</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">How to Promote Your NFTs? Four Effective Ways to Get Eyes on Your Art</h2>
         
        </div>
      </div>
    </div>
  </div>
</section>
   
  </div>
   
  )
}

export default Blog