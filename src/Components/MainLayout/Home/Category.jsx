import React, { useEffect, useState, useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Gamepad2, Headphones, Laptop, Monitor, Smartphone, Speaker } from 'lucide-react';
import { CgGames } from 'react-icons/cg';
import { BiLaptop } from 'react-icons/bi';
const categories = [
     {
          id: 1,
          title: "Laptop",
          icon: <Laptop size={30}></Laptop>

     },
     {
          id: 2,
          title:'Games',
          icon: <Gamepad2 size={30}></Gamepad2>

     },
     {
          id: 3,
          title:'Television',
          icon: <Monitor size={30}></Monitor>

     },
     {
          id: 4,
          title:'Speakers',
          icon: <Speaker size={30}></Speaker>

     },
     {
          id: 5,
          title:'Headphones',
          icon: <Headphones size={30}></Headphones>

     },
     {
          id: 6,
          title:'SmartPhone',
          icon: <Smartphone size={30}></Smartphone>

     },
     {
          id: 7,
          title: "Laptop",
          icon: <Laptop size={30}></Laptop>

     },
     {
          id: 8,
          title:'Games',
          icon: <Gamepad2 size={30}></Gamepad2>

     },
     {
          id: 9,
          title:'Television',
          icon: <Monitor size={30}></Monitor>

     },
     {
          id: 10,
          title:'Speakers',
          icon: <Speaker size={30}></Speaker>

     },
     {
          id: 11,
          title:'Headphones',
          icon: <Headphones size={30}></Headphones>

     },
     {
          id: 12,
          title:'SmartPhone',
          icon: <Smartphone size={30}></Smartphone>

     },
    
]
const Category = () => {
     const swiperRef = useRef(null);
     return ( 
          <div>
               <div className='mt-6 relative'>
                    {categories.length > 0 && (
                         <Swiper
                              ref={swiperRef}
                              modules={[Navigation, Pagination,Autoplay]}
                              autoplay={{delay:3000}}
                              spaceBetween={20}

                              pagination={{ clickable: true, type: 'custom' }}
                              navigation={false}
                             
                              initialSlide={0}
                              breakpoints={{
                                   640: {
                                        slidesPerView: 1,
                                   },
                                   768: {
                                        slidesPerView: 2,   
                                   },
                                   1024: {
                                        slidesPerView: 6,
                                   },
                              }}
                         >
                              {categories.map((category, index) => (
                                   <SwiperSlide className='' key={category.id}>
                                      <div className=' bg-white shadow-2xl p-9 rounded-xl '>
                                        <div className='flex justify-center items-center gap-3'>
                                             <h1 className=''> {category.icon} </h1>
                                              <h1 className='text-lg font-semibold'> {category.title} </h1>
                                        </div>

                                      </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    )}
             
                 
               </div>
          </div>
     );
};

export default Category;