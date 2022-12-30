import React from 'react'

function NavBar() {
  return (
    <nav class="backdrop-blur-md">
      <div class=" py-7 text-green-600 bg-transparent ">
        <div class="flex justify-between m-auto">
          <div>
            <a href="#top" className=' group text-5xl  md:mb-3 '>
              <span class="material-symbols-outlined  text-4xl md:text-6xl">forest</span>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-green-600 "></span>
            </a>        
          </div>
          <div class=" flex items-center space-x-10 text-md md:text-xl">
            <div>
              <a href="https://github.com/krishi-saripalli" className=' group md:mb-3 '>
                <span class="">GitHub</span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-green-600 "></span>
              </a>        
            </div>
            <div>
              <a href="https://www.linkedin.com/in/krishi-saripalli-8b48a4142/" className=' group md:mb-3 '>
                <span class="">LinkedIn</span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-green-600 "></span>
              </a>        
            </div>
            <div>
              <a href="https://twitter.com/krishi_sa" className=' group md:mb-3 '>
                <span class="">Twitter</span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-green-600 "></span>
              </a>        
            </div>
            
            
          </div>
        </div>
      </div>
    </nav>
    
    
  )
}

export default NavBar