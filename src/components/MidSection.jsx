import React from 'react'

function MidSection() {
    return (
        <div className='    '>
            <h1 className='text-5xl md:text-6xl py-7'>Krishi Saripalli</h1>
            <div  className=" drop-shadow-lg justify-center grid grid-row-2 md:grid-cols-2 gap-9">
                <div  className="md:hover:scale-105 md:transition md:duration-300 md:ease-out bg-opacity-5 bg-white  rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div  className="text-4xl md:text-5xl py-7">About Me</div>
                    <div  className="text-lg md:text-2xl leading-snug">
                    
                    I'm a junior at Brown University broadly interested
                    in computer graphics and machine learning.
                     I spend a fair amount of time
                     outside of school woodworking, cooking, and following  
                     <a href="https://www.npr.org/2022/11/25/1139190186/soccer-or-football-the-discussion-over-the-name-of-the-sport-is-highly-charged" className=''>
                <span class="link link-underline link-underline-black font-bold"> <em>actual</em> </span></a> football.
                    </div>
                </div>
                <div  className=" md:hover:scale-105 md:transition md:duration-300 md:ease-out bg-opacity-5 bg-white  drop-shadow-lg  rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div className="text-4xl md:text-5xl py-7">Work</div>
                    <div className="text-lg md:text-2xl leading-snug">
                    During the school year,
                    I'm a teaching assistant in the department
                    of computer science. Outside of school, I've worked
                    as an engineering intern at<a href="https://www.olo.com/" className=''>
                <span class="link link-underline link-underline-black font-bold"> Olo </span></a>on the data infrastructure team.
                    </div>
                </div>
               
                <div  className=" md:hover:scale-105 md:transition md:duration-300 md:ease-out drop-shadow-lg bg-opacity-5 bg-white  rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div className="text-4xl md:text-5xl py-7">Writing</div>
                    <div className="text-lg md:text-2xl leading-snug">
                    If I ever get back into writing, you can find me on <a href="https://medium.com/@saripallikrishi" className=''>
                <span class="link link-underline link-underline-black font-bold"> Medium</span></a>.
                    
                    </div>
                </div>
                <div  className=" md:hover:scale-105 md:transition md:duration-300 md:ease-out drop-shadow-lg bg-opacity-5 bg-white rounded-lg p-5 md:p-7 row-span-1 md:col-span-1">
                    <div className="text-4xl md:text-5xl py-7">Contact</div>
                    <div className="text-lg md:text-2xl leading-snug">
                    Send me an email at	ksaripal@cs.brown.edu, or message me on <a href="https://twitter.com/krishi_sa" className=''>
                <span class="link link-underline link-underline-black font-bold"> Twitter</span></a>.
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidSection