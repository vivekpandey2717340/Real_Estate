// ListingPage.jsx
import React, { useContext } from 'react';
import './ListingPage.css';
import { StoreContext } from '../../context/StoreContext';
import PropertyItem from '../PropertyItem/PropertyItem';
import { Link } from 'react-router-dom'; 

const ListingPage = ({ propertiesCategory }) => {
  const { propertyList } = useContext(StoreContext);

  
    // Filter the properties based on the selected category
    const HotProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "Hot Selling"
      );
    
      // Limit the Hot properties to the first 4 items
      const limitedHotProperties = HotProperties.slice(0, 4);


    // Filter the properties based on the selected category
    const NewProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "New Properties"
      );
    
      // Limit the Hot properties to the first 4 items
      const limitedNewProperties = NewProperties.slice(0, 4);


    // Filter the properties based on the selected category
    const PremiumProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "Premium Properties"
      );
    
      // Limit the Hot properties to the first 4 items
      const limitedPremiumProperties = PremiumProperties.slice(0, 4);
      
      const FeaturedProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "Featured"
      );
    
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      
      // Assuming FeaturedProperties is your array of properties
      const shuffledFeaturedProperties = shuffleArray([...FeaturedProperties]); // Spread operator to create a copy before shuffling
      const limitedFeaturedProperties = shuffledFeaturedProperties.slice(0, 4);

  return (
    <div>
        {/* Hot selling section */}
      <section className="hot_selling">
        <div className="container">
            <div className="properties_title" style={{ margin: '50px 0', paddingTop: '50px' }}>
                <div><h1 style={{color:'var(--w)'}}>Hot Selling</h1></div>
                <Link to="/properties">
                    <div className="button">
                        <a  style={{color:'var(--w)'}}>
                            View All
                        </a>
                    </div>
                </Link>
            </div>
          <div className="new_properties_grid" style={{ paddingBottom: '50px' }}>
            <div id="specific_hot-section-container">
                {limitedHotProperties.map((item, index) => (
                    <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess} status={item.status}/>
                ))}
            </div>
          </div>
        
        </div>
      </section>
       {/* End Hot selling section */}

       {/* New Properties */}
        <section className="container"  style={{marginTop:'50px'}}>
            <div className="new_properties">
                <div className="properties_title">
                    <div><h1>New Properties</h1></div>
                    <Link to="/properties" style={{textDecoration:'none'}}>
                        <div className="button">
                            <a style={{textDecoration:'none'}}>
                                View All
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="new_properties_grid">
                <div id="specific_hot-section-container">
                    {limitedNewProperties.map((item, index) => (
                        <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess} status={item.status}/>
                    ))}
                </div> 
                </div>
            </div>
        </section>
      {/*End New Properties */}

      {/* Premium Properties */}
        <section className="container">    
            <div className="properties_title" style={{ margin: '50px 0', paddingTop: '50px' }}>
                <div><h1>Premium Properties</h1></div>
                <Link to="/properties" style={{textDecoration:'none'}}>
                        <div className="button">
                            <a style={{textDecoration:'none'}}>
                                View All
                            </a>
                        </div>
                    </Link>           
                 </div>
            <div className="new_properties_grid" style={{ paddingBottom: '70px' }}>
                <div id="specific_hot-section-container">
                    {limitedPremiumProperties.map((item, index) => (
                        <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess} status={item.status}/>
                    ))}
                </div>
            </div>
        </section>
      {/*End Premium Properties */}

      {/*  Featured properties*/}
        <section>
            <div className="featured"></div>
            <div className="container">
                <div style={{marginTop:'-500px'}}>
                    <div className="properties_title" style={{ margin: '50px 0', paddingTop: '50px' }}>
                        <div><h1 style={{color:'var(--w)'}}>Featured Properties</h1></div>
                        <Link to="/properties">
                            <div className="button">
                                <a  style={{color:'var(--w)'}}>
                                    View All
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className="new_properties_grid" style={{ paddingBottom: '70px' }}>
                    <div id="specific_hot-section-container">
                        {limitedFeaturedProperties.map((item, index) => (
                            <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess} status={item.status}/>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </section>
      {/*End  Featured properties*/}


    </div>
  );
};

export default ListingPage;
