import React from 'react'


const Card = () => {
    return (
        <>

        <div class='flex flex-wrap lg:-mx-2 bg-yellow-50 justify-center'>
            
            <p className="w-full text-3xl leading-tight text-red-400 py-10 text-center">Explore. Learn Create.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-20 my-20 mx-10">

            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center">
                <img class="w-full md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="board.svg" alt="" />
                <div class="p-4 flex flex-col justify-between leading-normal">
                    <h5 class="text-gray-900 font-semibold  text-2xl tracking-tight mb-2">Remote Learning</h5>
                    <p class="font-normal text-gray-700 mb-3">Great for education. Teachers, mentors, tutors, and students can interact with each other in a safe, private environment. Expand your thought process!</p>
                </div>
            </div>

                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center">
                <img class="w-full h-96 md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="bluecircle.svg" alt="" />
                <div class="p-4 flex flex-col justify-between leading-normal">
                    <h5 class="text-gray-900 font-semibold text-2xl tracking-tight mb-2">Easy to Use</h5>
                    <p class="font-normal text-gray-700 mb-3">Our tools are accessible and easy to use. Giving you the power to quick access to the whiteboard. Just start your own canvas and create!</p>
                </div>
            </div>
                
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center">
                <img class="w-full h-96 md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="collabdrawing.svg" alt="" />
                <div class="p-4 flex flex-col justify-between leading-normal">
                    <h5 class="text-gray-900 font-semibold  text-2xl tracking-tight mb-2">Realtime</h5>
                    <p class="font-normal text-gray-700 mb-3">Get Visual Feedback! When it comes to productivity, a realtime online whiteboard allows teams to collaborate and communicate better.</p>
                </div>
            </div>

                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center">
                <img class="w-full h-96 md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="questions.svg" alt="" />
                <div class="p-4 flex flex-col justify-between leading-normal">
                    <h5 class="text-gray-900 font-semibold  text-2xl tracking-tight mb-2">New Features</h5>
                    <p class="font-normal text-gray-700 mb-3">We’re continuously adding new features and improving our app to give users a better experience.</p>
                </div>
            </div>

              </div>
        </div>

        </>
    )
}

export default Card