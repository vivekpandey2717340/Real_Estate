import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import Login from './pages/Login/Login'
import {BrowserRouter, Routes, Route,useLocation} from 'react-router-dom'
import TopNav from './component/TopNav/TopNav'
import './App.css'
import Banner from './pages/Banner/Banner'

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'
  return (
    <div className='body_grid'>
          {showNavbar && <Navbar/>}
          <div>
            <TopNav/>
            <Routes>
              
              <Route path='/'element={<Login/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/banner' element={<Banner/>}/>


            </Routes>
          </div> 
    </div>
  )
}

export default App