import React from 'react'
import Cards from './Cards';

const Content = () => {
    return (
        <>
        <div className='container mx-auto flex flex-wrap p-10 justify-center'>
                <p className="w-full my-2 text-3xl font-bold leading-tight text-red-400 text-center">Simple to use. A remote tool for anyone. </p>
            <img className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink' src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='video of the whiteboard demostration'></img>
        </div>
        
        <Cards />
        
        <div className='flex flex-wrap md:h-screen justify-center items-center p-10'>
            <div class="w-full overflow-hidden md:w-1/4">
                <img src='https://images.unsplash.com/photo-1637517626826-a2e2ac630622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='first demostration of the whiteboard' />
            </div>
            
            <div class="w-full overflow-hidden md:w-1/4">
                <img src='https://images.unsplash.com/photo-1636955890525-84c5fa482c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='second demostration of the whiteboard' />
            </div>
            
            <div class="w-full overflow-hidden md:w-1/4">
                <img src='https://images.unsplash.com/photo-1637441511291-d5994ea09a6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt='third demostration of the whiteboard' />
            </div>
            
            <div class="w-full overflow-hidden md:w-1/4">
                <img src='https://images.unsplash.com/photo-1637481108969-836f76676413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80' alt='fourth demostration of the whiteboard' />
            </div>
        </div>
        
        <div className='flex flex-wrap md:h-screen justify-center md:justify-end content-center p-10 gap-4 bg-yellow-50'>
                <div class="w-full md:w-64 rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                </div>
            
            
            
	           <div class="w-full md:w-64 rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                </div>
            
	           <div class="w-full md:w-64 rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                </div>
        </div>
        
        
        
        
        
        </>
    )
}

export default Content
