import React, { useEffect, useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';

const BlogPost = ({ setCategory }) => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const Lifestyle = blogList.filter((item) => setCategory === 'Lifestyle' || item.category === 'Property');
  const shuffledLifestyleNews = shuffleArray([...Lifestyle]);

  const Finance = blogList.filter((item) => setCategory === 'Finance' || item.category === 'Finance');
  const shuffledFinanceNews = shuffleArray([...Finance]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
                shotContent={item.shotContent}
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
                shotContent={item.shotContent}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </section>

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
                shotContent={item.shotContent}
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
                shotContent={item.shotContent}
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
