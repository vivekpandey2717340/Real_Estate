import React, { useContext }  from 'react'
import './Featured.css'
import { StoreContext } from '../../context/StoreContext';
import PropertyItem from '../PropertyItem/PropertyItem';
import { Link } from 'react-router-dom';

const Featured = ({ propertiesCategory }) => {
    const { propertyList } = useContext(StoreContext);

     // Filter the properties based on the selected category
     const FeaturedProperties = propertyList.filter(item => 
        propertiesCategory === "All" && item.category === "Featured"
      );
    
      // Limit the Hot properties to the first 4 items
      const limitedFeaturedProperties = FeaturedProperties.slice(0, 4);
  return (
    <div>
        <section>
            <div className="container">
                <div>
                    <div className="properties_title" style={{ margin: '50px 0', paddingTop: '50px' }}>
                        <div><h1 >Featured Properties</h1></div>
                        <Link to="/properties" style={{textDecoration:'none'}}>
                            <div className="button">
                                <a >
                                    View All
                                </a>
                            </div>
                        </Link>                    </div>
                    <div className="new_properties_grid" style={{  paddingBottom: '50px' }}>
                        <div id="specific_hot-section-container">
                            {limitedFeaturedProperties.map((item, index) => (
                                <PropertyItem key={index} id={item._id} name={item.name} price={item.price} location={item.location} description={item.description} area={item.area} mainImage={item.mainImage} saleImage={item.saleImage} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Featured