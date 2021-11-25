import React from "react";
import Cards from "./Cards";
import naomy from "../images/naomy.svg";
import dare from "../images/dare.svg";
import zahra from "../images/zahra.svg";

const Content = () => {

  return (
    <>
      <div className="container mx-auto flex flex-wrap p-10 justify-center">
        <p className="w-full my-2 text-3xl leading-tight text-red-400 text-center">
          Simple to use. A remote tool for anyone.{" "}
        </p>
        <img
          className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
          src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="video of the whiteboard demostration"
        ></img>
      </div>

      <Cards />

      <div className="flex flex-wrap md:h-screen justify-center items-center p-10">
        <div class="w-full overflow-hidden md:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1637517626826-a2e2ac630622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="first demostration of the whiteboard"
          />
{/* =======
    return (
        <>
        <div className='container mx-auto flex flex-wrap p-10 justify-center'>
                <p className="w-full my-2 text-3xl leading-tight text-red-400 text-center">Simple to use. A remote tool for anyone. </p>
            <img className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink' src="whiteboard.png" alt='video of the whiteboard demostration'></img>
>>>>>>> d78912c05dcfd5b9298d235a631c75bd24e8eb03 */}
        </div>

        <div class="w-full overflow-hidden md:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1636955890525-84c5fa482c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="second demostration of the whiteboard"
          />
        </div>

        <div class="w-full overflow-hidden md:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1637441511291-d5994ea09a6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="third demostration of the whiteboard"
          />
        </div>

        <div class="w-full overflow-hidden md:w-1/4">
          <img
            src="https://images.unsplash.com/photo-1637481108969-836f76676413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80"
            alt="fourth demostration of the whiteboard"
          />
        </div>
      </div>

      <div className="bg-yellow-50 py-10">
        <h2 className="text-center text-6xl font-bold py-10">Meet the Team</h2>
        <div className="flex flex-wrap justify-center content-center gap-6">
          <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
            <img
              class="object-cover object-scale-down mx-auto py-2 rounded-full"
              src={naomy}
              alt="Mountain"
            />
            <div class="px-6 py-4 leading-tight text-center">
              <div class="font-bold text-xl">Mountain</div>
              <div class="text-sm font-extrabold text-red-400 mb-2">
                Web Developer
              </div>
              <p class="text-gray-700 text-sm">
                A self-taught UX/UI Designer and Android developer. The root of
                her passion in code and UX started with animation. Tinkering
                with expressions in Adobe. Diving into different ways creative
                solutions can be reached with code and design. Naomy sought to
                learn Java, Android SDK, Kotlin, application architecture and
                UX/UI fundamentals. Naomy enjoys diy crafts, drawing and
                creating!
              </p>

              <p class="text-blue-600 text-xs">
                LinkedIn -
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/in/naomyportillo/"
                >
                  https://www.linkedin.com/in/naomyportillo/
                </a>
              </p>

              <p class="text-blue-600 text-xs">
                Portfolio -
                <a target="_blank" rel="noreferrer" href="https://naomyportillo.me/">
                  https://naomyportillo.me/
                </a>
              </p>

              <p class="text-blue-600 text-xs">
                GitHub -
                <a target="_blank" rel="noreferrer" href="https://github.com/rosannaNaomy">
                  https://github.com/rosannaNaomy
                </a>
              </p>

              <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                <div class="w-1/4 h-full">
                  <img
                    class="h-full rounded-lg"
                    src="https://via.placeholder.com/42x42"
                    alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42"
                    alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
            <img
              class="object-cover object-scale-down mx-auto py-2 rounded-full"
              src={dare}
              alt="Mountain"
            />
            <div class="px-6 py-4 leading-tight text-center">
              <div class="font-bold text-xl">
                Dare Oloruntoba - Frontend Developer
              </div>
              <div class="text-sm font-extrabold text-red-400 mb-2">
                Web Developer
              </div>
              <p class="text-gray-700 text-sm">
                Dare has demonstrated works in software development. Building
                web applications using technologies such as JavaScript, React,
                PHP, SQL, Yii framework and few others. Dare is well focused to
                provide good communication, problem solving, multi-tasking and
                also a good team professional well-defined on achieving project
                aims with swift and accuracy .
              </p>

              <p class="text-blue-600 text-xs">
                LinkedIn -
                <a
                  target="_blank" rel="noreferrer"
                  href="http://linkedin.com/in/dare-oloruntoba-54a909210"
                >
                  http://linkedin.com/in/dare-oloruntoba-54a909210
                </a>
              </p>

              <p class="text-blue-600 text-xs">
                GitHub -
                <a target="_blank" rel="noreferrer" href="https://github.com/dretoba91">
                  https://github.com/dretoba91
                </a>
              </p>

              <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                <div class="w-1/4 h-full">
                  <img
                    class="h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-64 rounded overflow-hidden bg-white shadow-lg">
            <img
              class="object-cover object-scale-down mx-auto py-2 rounded-full"
              src={zahra}
              alt="Mountain"
            />
            <div class="px-6 py-4 leading-tight text-center">
              <div class="font-bold text-xl">
                Zahra Khan - Frontend Developer
              </div>
              <div class="text-sm font-extrabold text-red-400 mb-2">
                Web Developer
              </div>
              <p class="text-gray-700 text-sm">
                Zahra has a B.S. in Information Communications Technology. Zahra
                launches her frontend development career, with experience
                working with content management, email marketing, and web
                development. Built a WordPress website for a non-profit
                organization and a PHP-based website for the research project.
              </p>
              <p class="text-gray-600 text-sm">
                Zahra is learning React.js and other technologies. Zahra also
                enjoys making jewellery, knitting, and playing the keyboard!
              </p>
              <p class="text-blue-600 text-xs">
                LinkedIn -
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/in/zahrakhan-2021/"
                >
                  https://www.linkedin.com/in/zahrakhan-2021/
                </a>
              </p>

              <p class="text-blue-600 text-xs">
                Portfolio -
                <a target="_blank" rel="noreferrer" href="https://zahrakhan.netlify.app/">
                  https://zahrakhan.netlify.app/
                </a>
              </p>

              <p class="text-blue-600 text-xs">
                GitHub -
                <a target="_blank" rel="noreferrer" href="https://github.com/zkh224">
                  https://github.com/zkh224
                </a>
              </p>

              <div class="inline-flex justify-center items-center space-x-5 my-4 ">
                <div class="w-1/4 h-full">
                  <img
                    class="h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
                <div class="w-1/4 h-full">
                  <img
                    class="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/42x42" alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
