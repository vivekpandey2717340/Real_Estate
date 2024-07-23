import React,{useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'; 
import BlogItem from '../BlogItem/BlogItem'
import './Blogs.css'

const Blogs = ({setCategory}) => {
  const {blogList} = useContext(StoreContext)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
   // Filter the news based on the "Property" category
   const Lifestyle = blogList.filter(item => 
    setCategory === "Lifestyle" || item.category === "Property" 
    );
    const shuffledLifestyleNews = shuffleArray([...Lifestyle]);
  return (
    <div>
        {/* <!-- Blogs --> */}
        <section className="container">
            <div className="properties_title" style={{margin:'50px 0'}}>
                <div><h1 >Blogs</h1></div>
                <Link to='/blogs' >
                  <div  className="button"><a  >View All</a></div>
                </Link>
            </div>
            <div className="blogs_grid">
                {shuffledLifestyleNews.map((item,index)=>{
                    return <BlogItem key={index} id={item._id} image={item.image} shotContent={item.shotContent} time={item.time}/>
                })}
            </div>
        </section>
        {/* <!-- End Blogs -->  */}
    </div>
  )
}

export default Blogs