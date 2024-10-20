import React from 'react';

const Navbar = () => {
     return (
          <div className='pt-5'>
               <div className="navbar container mx-auto bg-base-100">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   <li><a>Item 1</a></li>
                                   <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                             <li><a>Submenu 1</a></li>
                                             <li><a>Submenu 2</a></li>
                                        </ul>
                                   </li>
                                   <li><a>Item 3</a></li>
                              </ul>
                         </div>
                         <a className="  text-xl"> <img src="https://i.ibb.co.com/nz8rRCW/logo-2.png" className='w-44' alt="" /> </a>
                    </div>
                    <div className="navbar-center mr-12 hidden lg:flex">
                         <div className='border-2 border-[#0068c8]  rounded-s-md   w-full '>
                              <form className='flex '>
                                   <div class="relative bg-gray-100   inline-flex">
                                        <svg class="w-2 h-4 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                                        <select class="  border-gray-300  text-gray-600 h-12 pl-5  pr-10 bg-gray-100 hover:border-gray-400 focus:outline-none appearance-none">
                                             <option disabled selected>Choose a color</option>
                                             <option>Red</option>
                                             <option>Blue</option>
                                             <option>Yellow</option>
                                             <option>Black</option>
                                             <option>Orange</option>
                                             <option>Purple</option>
                                             <option>Gray</option>
                                             <option>White</option>
                                        </select>
                                   </div>
                                  
                                   <div class="  ">
                                        <div className="w-full rounded-lg bg-gray-300  ">
                                             <div class="flex ">
                                                  <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white ">
                                                      
                                                  </div>
                                                  <input type="text" class="w-full bg-gray-100 p-3 px-16  text-base font-semibold outline-0" placeholder="Search for Products" id="" />
                                                  
                                             </div>
                                        </div>
                                   </div>
                                   <button type='submit' className=' bg-[#0068c8] text-white px-5 uppercase '> search </button> 
                              </form>
                         </div>
                    </div>
                    <div className="navbar-end">
                         <a className="btn">Button</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;