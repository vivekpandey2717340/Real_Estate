import React, {useState} from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'
import ListingPage from '../../Components/ListingPage/ListingPage'
import Service from '../../Components/Service/Service'
import Tools from '../../Components/Tools/Tools'
import Blogs from '../../Components/Blogs/Blogs'
import BlogDetails from '../../Components/BlogDetails/BlogDetails'



const Home = () => {
  const [propertiesCategory,setPropertiesCategory]= useState("All")
  return (
    
    <div>
        <BlogDetails path="/blogDetails/:id"/>
        <Banner/>
        <Category/>
        <ListingPage propertiesCategory={propertiesCategory}/>
        <Service/>
        <Tools/>
        <Blogs/>
    </div>
  )
}

export default Home