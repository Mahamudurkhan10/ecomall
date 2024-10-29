import { AlignJustify, Headset, Heart, ShoppingCart, TableOfContents, User2, Users } from 'lucide-react';
import React from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const navItems = <div className='flex flex-col lg:flex-row gap-2 lg:gap-5 text-lg lg:space-x-4 font-semibold'>
          <Link to={'/'}><li> Home </li></Link>
          <Link to={'/about'}><li> About </li></Link>
          <Link to={'/products'}><li> Products </li></Link>
          <Link to={'/contact'}><li> Contact </li></Link>
          <Link to={'/blogs'}><li> Blog </li></Link>

     </div>
     return (
          <div className='pt-3 '>


               <div className=''>
                    <div className='container mx-auto'>
                         <div className="navbar fixed z-10 container mx-auto   bg-base-100">
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
                                             {navItems}
                                        </ul>
                                   </div>
                                   <a className="  text-xl"> <img src="https://i.ibb.co.com/nz8rRCW/logo-2.png" className='w-44' alt="" /> </a>
                              </div>
                              <div className="navbar-center pr-16  hidden lg:flex">
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
                                                            <div class="flex  items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white ">

                                                            </div>
                                                            <input type="text" class="w-full bg-gray-100 p-3 px-12  text-base font-semibold outline-0" placeholder="Search for Products" id="" />

                                                       </div>
                                                  </div>
                                             </div>

                                             <button type='submit' className=' bg-[#0068c8] text-white px-7 uppercase '> search </button>
                                        </form>
                                   </div>
                              </div>
                              <div className="navbar-end  ">
                                   <div className='hidden lg:block'>
                                        <div className='flex gap-6   '>
                                             <div className='flex items-center gap-2'>
                                                  <Headset />
                                                  <div className='space-y-2'>
                                                       <h1 className='text-sm text-gray-500' >  Need Help ?? </h1>
                                                       <h1 className='text-sm font-bold text-primary '> +08 9229 8282 </h1>
                                                  </div>
                                             </div>
                                             <div className='flex items-center gap-2'>
                                                  <User2 />
                                                  <div className='space-y-2'>
                                                       <h1 className='text-sm text-gray-500' > My Account </h1>
                                                       <h1 className='text-sm font-bold text-primary '>Login</h1>
                                                  </div>
                                             </div>
                                             <div className='flex items-center gap-4'>
                                                  <div className='relative '>

                                                       <h1 className='absolute -top-4 -right-1 font-bold text-primary'> <span> 0</span> </h1>
                                                       <PiShoppingCartBold size={23} />
                                                  </div>


                                                  <div className='space-y-2'>
                                                       <h1 className='text-sm text-gray-500' > My Cart </h1>
                                                       <h1 className='text-sm font-bold text-primary '> $0.00 </h1>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                     <div className="h-0.5  bg-gray-300 fixed mt-[68px] w-full"></div>
                    <div className=''>
                    <div className='container mx-auto pt-[68px]'>
                         <div className="navbar hidden fixed z-10 border-t-2 border-gray-300  lg:flex container mx-auto bg-base-100">
                              <div className="navbar-start flex gap-12">
                                   <div className='flex items-center hover:text-primary '>
                                        <div>
                                             <AlignJustify className='font-bold' />
                                        </div>
                                        <div class="relative     inline-flex">
                                             <svg class="w-2 h-4 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                                             <select class="  border-gray-300    text-gray-600 h-12 pl-5  pr-10  hover:border-gray-400 focus:outline-none appearance-none">
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
                                   </div>
                                   <div className="border-l-2 border-primary px-5">
                                        <ul className="menu menu-horizontal px-1">

                                             {navItems}
                                        </ul>
                                   </div>
                              </div>
                              <div className='navbar-end'>
                                   <div className='flex gap-8 items-center'>
                                        <div className='relative   '>

                                             <h1 className='absolute -top-4 -right-1 font-bold text-primary'> <span> 0</span> </h1>
                                             <Heart size={26} />
                                        </div>
                                        <div className='border-l-2 pl-4 border-primary'>
                                             <button className='btn bg-primary text-white px-6 '> SignUp </button>
                                        </div>
                                   </div>
                              </div>


                         </div>
                    </div>
                    </div>
               </div>
          </div>


     );
};

export default Navbar;