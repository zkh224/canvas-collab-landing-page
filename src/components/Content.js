import React from 'react'
import Cards from './Cards';

const Content = () => {
    return (
        <>
        <div className='container mx-auto flex flex-wrap p-10 justify-center'>
                <p className="w-full my-2 text-3xl leading-tight text-red-400 text-center">Simple to use. A remote tool for anyone. </p>
            <img className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink' src="whiteboard.png" alt='snapshot of the whiteboard demostration'></img>
        </div>
        
        <Cards />
        
        <div className='md:h-screen flex flex-row justify-center items-center p-10 gap-20' style={{ backgroundImage: "url(/linesbg.svg)", backgroundSize: 'contain' }}>
            <div class="w-full md:w-2/5">
                <img src='simple.png' alt='This whiteboard is simple to use!' />
            </div>
            
            <div class="w-full md:w-2/5">
                <img src='getcreative.png' alt='second demostration of the whiteboard' />
            </div>
            
        </div>
        
        <div className='bg-yellow-50 py-10'>
            <h2 className="text-center text-6xl font-bold py-10">Meet the Team</h2>
            <div className="flex flex-wrap justify-center content-center gap-6">
                
                <div class="w-full md:w-80 md:max-h-full rounded-3xl overflow-hidden bg-white shadow-lg text-center">
                    <img class="object-cover md:w-48 mx-auto py-2 rounded-full" src="/zahra.png" alt="Zahra Khan, a frontend developer who created the user interface with her coding and design knowledge." />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl">Zahra Khan</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">Frontend Developer</div>
                        <p class="text-gray-700 md:text-sm leading-relaxed">
                          Zahra has a B.S. in Information Communications Technology. Zahra
                launches her frontend development career, with experience
                working with WordPress, email marketing, and web
                development. Zahra is learning React.js and other technologies. Zahra also
                enjoys making jewellery, knitting, and playing the keyboard!
                        </p>       
                      </div>
                    
                        <div class="inline-flex justify-center text-center space-x-5 mt-10 px-6 py-4">
                            <div class="w-8 h-8">
                                <a href="https://github.com/zkh224" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">GitHub</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
                            <div class="w-8 h-8">
                                <a href="https://www.linkedin.com/in/zahrakhan-2021/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
                            <div class="w-8 h-8">
                                <a href="https://zahrakhan.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">Portfolio</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
        
                        </div>
                </div>
            
            
            
	           <div class="w-full md:w-80 md:max-h-full rounded-3xl overflow-hidden bg-white shadow-lg text-center">
                    <img class="object-cover md:w-48 mx-auto py-2 rounded-full" src="/naomy.png" alt="Naomy Portillo, a UX developer who designed the landing page and the canvas app." />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl">Naomy Portillo</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">UX/UI Designer</div>
                        <p class="text-gray-700 md:text-sm leading-relaxed">
                          A self-taught UX/UI Designer and Android developer. The root of
                her passion in code and UX started with animation. Tinkering
                with expressions in Adobe. Diving into different ways creative
                solutions can be reached with code and design. Naomy sought to
                learn Java, Android SDK, Kotlin, application architecture and
                UX/UI fundamentals. Naomy enjoys diy crafts, drawing and
                creating!
                        </p>
                    </div>
                          
                          
                          <div class="inline-flex justify-center text-center space-x-5 px-6 py-4">
                            <div class="w-8 h-8">
                                <a href="https://github.com/rosannaNaomy" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">GitHub</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
                            <div class="w-8 h-8">
                                <a href="https://www.linkedin.com/in/naomyportillo/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
                            <div class="w-8 h-8">
                                <a href="https://naomyportillo.me/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">Portfolio</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
        
                        </div>
                          
                                        
                </div>
            
	           <div class="w-full md:w-80 md:max-h-full rounded-3xl overflow-hidden bg-white shadow-lg text-center">
                    <img class="object-cover md:w-48 mx-auto py-2 rounded-full" src="/dare.png" alt="Dare Oloruntoba, a full stack developer who who setup the multi-user functionality with this backend skills along with coding the interface of the canvas app." />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl">Dare Oloruntoba</div>
                          <div class="text-sm font-extrabold text-red-400 mb-2">Full Stack Developer</div>
                        <p class="text-gray-700 md:text-sm leading-relaxed">
                          Dare has demonstrated works in software development. Building
                web applications using technologies such as JavaScript, React,
                PHP, SQL, Yii framework and few others. Dare is well focused to
                provide good communication, problem solving, multi-tasking and
                also a good team professional well-defined on achieving project
                aims with swift and accuracy.
                        </p>
                    </div>
                          
                          <div class="inline-flex justify-center text-center space-x-5 px-6 py-4 mt-6">
                            <div class="w-8 h-8">
                                <a href="https://github.com/dretoba91" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">GitHub</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
                            <div class="w-8 h-8">
                                <a href="http://linkedin.com/in/dare-oloruntoba-54a909210" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-red-400">
                                <span class="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z" clip-rule="evenodd"></path>
                                </svg>
                                </a>
                            </div>
                              
        
                        </div>
                          
                                        
                </div>
                
                
            </div>
        </div>
        
        
        
        
        
        </>
    )
}

export default Content
