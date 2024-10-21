import React from 'react';

const Error = () => {
     return (
          <div>
               <div className="bg-gray-100 h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat  items-center" style={{ backgroundImage: "url('https://i.ibb.co.com/YN9s9w1/modern-stationary-collection-arrangement-1.jpg')" }}>

                    <div className="tracking-widest  text-center">
                         <span className="text-gray-200 text-9xl font-mono block">404</span>
                         <span className="text-3xl text-gray-200 font-mono ">Page not Found</span>
                         <span className="text-gray-200 text-xl">
                              Sorry but the page that you are looking for does not exist...
                         </span>
                    </div>

                    <div className="mt-6">
                         <a
                              href="/" className=""

                         >
                              <button
                                   className="relative  flex items-center  px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-md group"
                              >
                                   <span
                                        className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4"
                                   >
                                        <span
                                             className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                   </span>
                                   <span
                                        className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-white rounded group-hover:-ml-4 group-hover:-mb-4"
                                   >
                                        <span
                                             className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                        ></span>
                                   </span>
                                   <span
                                        className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-white rounded-md group-hover:translate-x-0"
                                   >

                                   </span>
                                   <span
                                        className="relative uppercase underline font-semibold w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-[#191919]"
                                   >
                                        Go Back To Home
                                   </span >

                              </button>
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default Error;