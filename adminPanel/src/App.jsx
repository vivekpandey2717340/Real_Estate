import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import Login from './pages/Login/Login'
import {BrowserRouter, Routes, Route,useLocation} from 'react-router-dom'
import TopNav from './component/TopNav/TopNav'
import './App.css'
import Banner from './pages/Banner/Banner'
import Blogs from './pages/Blogs/Blogs'
import BlogAdd from './pages/BlogAdd/BlogAdd'
import UserList from './pages/UserList/UserList'
import Experts from './pages/Experts/Experts'
import AddExperts from './pages/AddExperts/AddExperts'
import EditExperts from './pages/EditExperts/EditExperts'

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
          <Route path='/blogs' element={<Blogs/>}/>             
          <Route path='/addblogs' element={<BlogAdd/>}/>             
          <Route path='/userList' element={<UserList/>}/>             
          <Route path='/userList' element={<UserList/>}/>  
          <Route path='/expertList' element={<Experts/>}/>
          <Route path='/addExpert' element={<AddExperts/>}/>
          <Route path='/editExpert' element={<EditExperts/>}/>
        </Routes>
      </div> 
    </div>
  )
}

export default App