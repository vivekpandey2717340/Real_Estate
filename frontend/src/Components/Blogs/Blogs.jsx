import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogItem from '../BlogItem/BlogItem'
import './Blogs.css'

const Blogs = ({setCategory}) => {
  const [blogList, setBlogList] = useState([]);  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blogs/list');
        if (response.data.success) {
          setBlogList(response.data.blogs);
        }
      } catch (error) {
        console.error('Error fetching Blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
   // Filter the news based on the "Property" category
   const Lifestyle = blogList.filter(item => 
    setCategory === "Property" || item.category === "Property" 
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
                    return <BlogItem key={index} id={item._id} image={`http://localhost:4000/images/${item.image}`} title={item.title} time={item.time}/>
                })}
            </div>
        </section>
        {/* <!-- End Blogs -->  */}
    </div>
  )
}

export default Blogs