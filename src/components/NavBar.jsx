import React from 'react'

function NavBar() {
  return (
    <nav class="backdrop-blur-md">
      <div class=" py-5  bg-transparent ">
        <div class="px-20">

          <div class="  flex items-center justify-evenly lg:justify-between space-x-10 text-md md:text-xl">
            <div className=''>
              <a href="#top" className=' group md:mb-3 '>
                <span class="material-symbols-outlined text-md md:text-4xl">forest</span>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white "></span>
              </a>
            </div>
            <div className="inline-flex gap-10">
              <div>
                <a href="https://github.com/krishi-saripalli" className=' group md:mb-3 '>
                  <span class="">GitHub</span>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white "></span>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/krishi-saripalli-8b48a4142/" className=' group md:mb-3 '>
                  <span class="">LinkedIn</span>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white "></span>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/krishi_sa" className=' group md:mb-3 '>
                  <span class="">Twitter</span>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-white "></span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>


  )
}

export default NavBar