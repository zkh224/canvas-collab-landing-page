import React from 'react'
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className="flex flex-wrap flex-col lg:h-screen sm:flex-row items-center w-full">
            
            <div className="flex flex-col w-full p-8 md:w-2/5 pt-10 md:pt-0 justify-center items-center md:items-start text-center md:text-left">
                <p className="text-4xl md:text-6xl font-bold  pb-10">Whiteboard<br />Collaboration<br />Made Easy</p>

                <button className="rounded-sm px-8 py-4 text-xl bg-red-400 text-red-100 hover:bg-red-500 duration-300 shadow w-32">
                    <p className="text-sm font-bold text-white text-center">GET STARTED</p>
                </button>

            </div> 

            
            <div className="w-full md:w-3/5 text-center">
                <img src="hero_image.svg"  alt="" />
            </div>

        </div>
    )
}

export default Hero
