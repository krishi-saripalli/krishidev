import React from 'react'
import { HiLink } from 'react-icons/hi';
import { GrGithub, GrLinkedinOption} from 'react-icons/gr';
function ProjSection() {
    return (
        <div className='py-20'>
            <h1 className='text-center text-5xl md:text-6xl px-7 py-3 bg-opacity-10 bg-white rounded-lg col-span-1'>What I'm Working On</h1>
            <div  className=" drop-shadow-lg justify-center grid grid-rows-2 gap-9 py-7">

                <div  className=" grid grid-row-2 md:grid-cols-2 md:hover:scale-105 md:transition md:duration-300 md:ease-out bg-opacity-5 bg-white  rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div className=''>
                        <div  className="text-4xl md:text-5xl py-7">Desktop World</div>
                        <div  className="text-lg md:text-2xl leading-snug pb-7">
                            An interactive 3D scene with tons of fun features to play around with. Created as part of a group project for CSCI1230. Try turning the lamp off for a spooky surprise.
                        </div>
                        <div className="pb-7">
                            <ul className='flex gap-2'>
                                <a href="https://desktop-world.netlify.app" className='hover:opacity-50'><HiLink size="1.5rem"></HiLink></a>
                                <a href="https://github.com/krishi-saripalli/desktop-world" className='hover:opacity-50'><GrGithub size="1.5rem"></GrGithub></a>
                            </ul>
                        </div>
                    </div> 
                    <div className='flex justify-center place-items-center'>
                        <span className='material-symbols-outlined text-7xl md:text-[250px]'>Public</span>
                    </div>
                </div>

                <div  className=" grid grid-row-2 md:grid-cols-2 gap-9 md:hover:scale-105 md:transition md:duration-300 md:ease-out bg-opacity-5 bg-white  rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div className=''>
                        <div  className="text-4xl md:text-5xl py-7">krishidev</div>
                        <div  className="text-lg md:text-2xl leading-snug pb-7">
                            This website! Made with React, Tailwind, Vite.js and depending on how I'm feeling that month, react-three-fiber.
                        </div>
                        <div className="pb-7">
                            <ul className='flex gap-2'>
                                <a id='#top' href="" className='hover:opacity-50'><HiLink size="1.5rem"></HiLink></a>
                                <a href="https://github.com/krishi-saripalli/krishidev" className='hover:opacity-50'><GrGithub size="1.5rem"></GrGithub></a>
                            </ul>
                        </div>
                    </div> 
                    <div className='flex justify-center place-items-center'>
                        <span className='material-symbols-outlined text-7xl md:text-[250px]'>Forest</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjSection