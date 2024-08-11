import React, { useContext,useEffect, useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import PropertyItem from '../PropertyItem/PropertyItem';
import './BlogPost.css';

const BlogPost = ({ setCategory, propertiesCategory }) => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { propertyList } = useContext(StoreContext);

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

  const News = blogList.filter((item) => setCategory === 'News' || item.category === 'News');
  const shuffledNews = shuffleArray([...News]);

  const Property = blogList.filter((item) => setCategory === 'Property' || item.category === 'Property');
  const shuffledPropertyNews = shuffleArray([...Property]);

  const Lifestyle = blogList.filter((item) => setCategory === 'Lifestyle' || item.category === 'Lifestyle');
  const shuffledLifestyleNews = shuffleArray([...Lifestyle]);

  const Finance = blogList.filter((item) => setCategory === 'Finance' || item.category === 'Finance');
  const shuffledFinanceNews = shuffleArray([...Finance]);

  if (loading) {
    return <div>Loading...</div>;
  }
   // Filter the properties based on the "Featured" category
   const FeaturedProperties = propertyList.filter(item => 
    propertiesCategory === "All" && item.category === "Featured"
  );

  
  
  // Assuming FeaturedProperties is your array of properties
  const shuffledFeaturedProperties = shuffleArray([...FeaturedProperties]); // Spread operator to create a copy before shuffling
  const limitedFeaturedProperties = shuffledFeaturedProperties.slice(0, 4);

  return (
    <div>
      <section className="container">
        {/* News Category */}
        <div>
          <div className="properties_title" style={{ margin: '150px 0 20px 0' }}>
            <div><h1>News</h1></div>
          </div>
          <div className="blogs_grid">
            {shuffledNews.map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                image={`http://localhost:4000/images/${item.image}`}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>

        {/* Property Category */}
        <div>
          <div className="properties_title" style={{ margin: '50px 0 20px 0' }}>
            <div><h1>Property</h1></div>
          </div>
          <div className="blogs_grid">
            {shuffledPropertyNews.map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                image={`http://localhost:4000/images/${item.image}`}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <div className='blog_featured_bg'>
        <div className='container'>
            <div className="properties_title blogs_property" >
                <div><h1 style={{color:'var(--w)'}}>Featured Proeprties</h1></div>
                <Link to="/properties" style={{textDecoration:'none'}}>
                    <div className="button">
                        <a style={{color:'var(--w)'}}>
                            View All
                        </a>
                    </div>
                </Link>
            </div>
            
            <div className="new_properties_grid" style={{ paddingBottom: '50px' }}>
                <div id="specific_hot-section-container">
                    {limitedFeaturedProperties.map((item, index) => (
                        <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess}/>
                    ))}
                </div>
            </div>
        </div>
      </div>
            {/* End Featured Property */}

      <section className="container">
        {/* Lifestyle Category */}
        <div>
          <div className="properties_title" style={{ margin: '50px 0 20px 0' }}>
            <div><h1>LifeStyle</h1></div>
          </div>
          <div className="blogs_grid">
            {shuffledLifestyleNews.map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                image={`http://localhost:4000/images/${item.image}`}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>

        {/* Finance Category */}
        <div>
          <div className="properties_title" style={{ margin: '50px 0 20px 0' }}>
            <div><h1>Finance</h1></div>
          </div>
          <div className="blogs_grid">
            {shuffledFinanceNews.map((item, index) => (
              <BlogItem
                key={index}
                id={item._id}
                image={`http://localhost:4000/images/${item.image}`}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
