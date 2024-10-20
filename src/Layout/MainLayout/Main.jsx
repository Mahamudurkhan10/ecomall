import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
          </div>
     )
}
