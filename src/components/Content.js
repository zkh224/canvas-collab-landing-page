import React from 'react'
import Cards from './Cards';

const Content = () => {
    return (
        <>
        <div className='container mx-auto flex flex-wrap p-10 justify-center'>
                <p className="w-full my-2 text-3xl leading-tight text-red-400 text-center">Simple to use. A remote tool for anyone. </p>
            <img className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink' src="whiteboard.png" alt='video of the whiteboard demostration'></img>
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
        
        <div className='bg-yellow-50 py-10'>
            <h2 className="text-center text-6xl font-bold py-10">Meet the Team</h2>
            <div className="flex flex-wrap justify-center content-center gap-6">
                <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
                    <img class="object-cover object-scale-down mx-auto py-2 rounded-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 leading-tight text-center">
                        <div class="font-bold text-xl">Mountain</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">Web Developer</div>
                        <p class="text-gray-700 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                          
                          
                          <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                            <div class="w-1/4 h-full">
                                <img class="h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
        
                        </div>
                          
                      </div>                  
                </div>
            
            
            
	           <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
                    <img class="object-cover object-scale-down mx-auto py-2 rounded-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 leading-tight text-center">
                        <div class="font-bold text-xl">Mountain</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">Web Developer</div>
                        <p class="text-gray-700 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                          
                          
                          <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                            <div class="w-1/4 h-full">
                                <img class="h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
        
                        </div>
                          
                      </div>                  
                </div>
            
	           <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
                    <img class="object-cover object-scale-down mx-auto py-2 rounded-full" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mountain" />
                      <div class="px-6 py-4 leading-tight text-center">
                        <div class="font-bold text-xl">Mountain</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">Web Developer</div>
                        <p class="text-gray-700 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                          
                          
                          <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                            <div class="w-1/4 h-full">
                                <img class="h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
                            <div class="w-1/4 h-full">
                                <img class="flex-1 h-full rounded-lg" src="https://via.placeholder.com/42x42"/>
                            </div>
        
                        </div>
                          
                      </div>                  
                </div>
            </div>
        </div>
        
        
        
        
        
        </>
    )
}

export default Content
