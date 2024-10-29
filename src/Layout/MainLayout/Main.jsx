import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
     return (
          <div>
               <Navbar></Navbar>
               <div className='pt-16'>
               <Outlet></Outlet>
               </div>
          </div>
     )
}
