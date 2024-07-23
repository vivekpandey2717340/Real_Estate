import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import BlogItem from '../BlogItem/BlogItem'
import PropertyItem from '../PropertyItem/PropertyItem';
import { Link } from 'react-router-dom'

import './BlogPost.css'

const BlogPost = ({setCategory,propertiesCategory}) => {
    const {blogList} = useContext(StoreContext)
    const { propertyList } = useContext(StoreContext);

    // shuffle function
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      // Filter the news based on the "News" category
    const News = blogList.filter(item => 
        setCategory === "News" || item.category === "News" 
      );

      const shuffledNews = shuffleArray([...News]); 
      // Filter the news based on the "Property" category
    const Property = blogList.filter(item => 
        setCategory === "Property" || item.category === "Property" 
      );
      const shuffledPropertyNews = shuffleArray([...Property]); 

      // Filter the properties based on the "Featured" category
    const FeaturedProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "Featured"
      );
    
      
      
      // Assuming FeaturedProperties is your array of properties
      const shuffledFeaturedProperties = shuffleArray([...FeaturedProperties]); // Spread operator to create a copy before shuffling
      const limitedFeaturedProperties = shuffledFeaturedProperties.slice(0, 4);

        // Filter the news based on the "Property" category
        const Lifestyle = blogList.filter(item => 
            setCategory === "Lifestyle" || item.category === "Property" 
        );
        const shuffledLifestyleNews = shuffleArray([...Lifestyle]); 

        // Filter the news based on the "Property" category
        const Finance = blogList.filter(item => 
            setCategory === "Finance" || item.category === "Finance" 
        );
        const shuffledFinanceNews = shuffleArray([...Finance]); 

  return (
    <div>
         <section className="container">
            {/* news on news catgroy */}
            <div>
                <div className="properties_title" style={{margin:'150px 0 20px 0'}}>
                    <div><h1 >News</h1></div>
                </div>

                <div className="blogs_grid">
                    {shuffledNews.map((item,index)=>{
                        return <BlogItem key={index} id={item._id} image={item.image} shotContent={item.shotContent} time={item.time}/>
                    })}
                    
                </div>
            </div>
            {/* news on news catgroy */}

            {/* news on property catgroy */}
            <div>
                <div className="properties_title" style={{margin:'50px 0 20px 0'}}>
                    <div><h1 >Property</h1></div>
                </div>

                <div className="blogs_grid">
                    {shuffledPropertyNews.map((item,index)=>{
                        return <BlogItem key={index} id={item._id} image={item.image} shotContent={item.shotContent} time={item.time}/>
                    })}
                    
                </div>
            </div>
            {/*End of news on property catgroy */}


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
                                <PropertyItem key={index} id={item._id} name={item.name} price={item.price} location={item.location} content={item.content} area={item.area} mainImage={item.mainImage} saleImage={item.saleImage} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Featured Property */}


        <section className="container">
            {/* news on LifeStyle catgroy */}
            <div>
                <div className="properties_title" style={{margin:'50px 0 20px 0'}}>
                    <div><h1 >LifeStyle</h1></div>
                </div>

                <div className="blogs_grid">
                    {shuffledLifestyleNews.map((item,index)=>{
                        return <BlogItem key={index} id={item._id} image={item.image} shotContent={item.shotContent} time={item.time}/>
                    })}
                    
                </div>
            </div>
            {/*End of news on LifeStyle catgroy */}

            {/* news on LifeStyle catgroy */}
            <div>
                <div className="properties_title" style={{margin:'50px 0 20px 0'}}>
                    <div><h1 >Finance</h1></div>
                </div>

                <div className="blogs_grid">
                    {shuffledFinanceNews.map((item,index)=>{
                        return <BlogItem key={index} id={item._id} image={item.image} shotContent={item.shotContent} time={item.time}/>
                    })}
                    
                </div>
            </div>
            {/*End of news on LifeStyle catgroy */}

            
        </section>

    </div>
  )
}

export default BlogPost