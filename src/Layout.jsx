import React from 'react'
import Sidebar from './Components/Leftside/Sidebar'
import Right from './Components/Rightside/Right'
import { Outlet } from 'react-router-dom'
import './App.css';

const Layout = () => {
  return (
    
    <>
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                <Outlet />
                <Right />
            </div>
        </div>
    </>
  )
}

export default Layout