import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Details.css';
import Slides from '../Slides/Slides';
import ImageGallery from '../ImageGallery/ImageGallery';
import PropertyItem from '../PropertyItem/PropertyItem'; 

const Details = ({ setIsSliderShow }) => {
  const { id } = useParams(); // Get ID from URL params
  const { propertyList } = useContext(StoreContext); // Access property list from context
  const [property, setProperty] = useState(null); // State to hold property details

  useEffect(() => {
    // Fetch property details based on ID
    const foundProperty = propertyList.find(item => item._id === id);
    setProperty(foundProperty); // Set property state with fetched data
  }, [id, propertyList]); // Dependencies: ID (from URL), propertyList (context data)

  if (!property) return <div>Loading...</div>; 
  // Extract category of the current property
  const { category } = property;

   // Utility function to shuffle array
   const shuffleArray = (array) => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Filter similar properties based on the category and shuffle the array
  const similarProperties = shuffleArray(
    propertyList.filter(item => item.category === category && item._id !== id)
  ).slice(0, 4); // Limit to 4 random similar properties

  // import image for  all images and videos for slider
  const media = [
    { type: 'image', src: property.image },
    { type: 'image', src: property.image2 },
    { type: 'image', src: property.image3 },
    { type: 'image', src: property.image4 },
    { type: 'image', src: property.image5 },
    { type: 'image', src: property.image6 },
    { type: 'image', src: property.image7 },
  ].filter(item => item.src); // Filter out any items with empty src

    // Function to toggle the SliderShow state and compare btn
    const toggleSliderShow = () => {
      console.log('Slider show toggled');
      setIsSliderShow(prevState => !prevState);
    };
    

  

  return (
    
    <div className="container">
      <div className="property_detail_grid">
        {/* Image and details Section */}
        <div className="property_detail_main">
          <div className='details_box'>
            <div className='details_box_title'>
              <div>
                <h1>{property.title}</h1>
                <p>{property.city +", " +property.state}</p>
              </div>
              <div >
                <h3>{property.price}</h3>
              </div>
            </div>
            {/* image Slider box*/}
            <div className='image_slide_grid'>

              {/* image  sliders*/}
              <div className='image_slide_box'>
                <Slides media={media}/>
              </div>
              {/* image slider end */}

              {/* image gallery box */}
              <div className='image_stock' onClick={(e) => { e.preventDefault(); toggleSliderShow(); }}>
                <div className='image_stock_box'>
                  <img src={property.image} alt="" />
                  <div className='image_stock_box_overlay'>
                      <p>+ See All</p>
                  </div>
                </div>
              </div>
              

            </div>
            {/*end Image slider box*/}
          </div>
          <div className='details_box_list'>
            <div><a href="#overview">Overview</a></div>
            <div><a href="#description">Description</a></div>
            <div><a href="#map">Maps</a></div>
            
          </div>
          <hr />

          {/* OverView Section */}
          <div className='overview' id='overview'>
            <div >
              <h1>Overview</h1>
            </div>
            <div className='overview_grid'>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/area.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Built Area</p>
                  <h4>{property.area}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/kitchen.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>No. of Kitchen</p>
                  <h4>{property.kitchen}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/bedroom.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>No. of Bedroom</p>
                  <h4>{property.bedroom}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/bathroom.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>No. of Bathroom</p>
                  <h4>{property.bathroom}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/floor.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Floor</p>
                  <h4>{property.floor}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/compass.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Direction</p>
                  <h4>{property.direction}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/hall.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>No. of Hall</p>
                  <h4>{property.hall}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/furnished.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Status</p>
                  <h4>{property.propertyStatus}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/road.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Road Access</p>
                  <h4>{property.roadAccess}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/totalfloor.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Total FLoor</p>
                  <h4>{property.totalFloor}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/car.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Parking</p>
                  <h4>{property.Parking}</h4>
                </div>
              </div>
              <div className="overview_grid_box">
                <div  className="overview_grid_box_logo">
                  <img src="../src/assets/image/calender.png" alt="" />
                </div>
                <div  className="overview_grid_box_content">
                  <p>Build year</p>
                  <h4>{property.builtYear}</h4>
                </div>
              </div>
            </div>
          </div>
          {/* End overview Section */}

          {/* Description Section */}
          <div className='description' id='description'>
            <div >
              <h1>Description</h1>
              <div  dangerouslySetInnerHTML={{ __html: property.description }} />
            </div>
          </div>
          {/*End  Description Section */}

        </div>
         {/*End Image and details Section */}

        {/* Form */}
        <div className='inqueryForm inquer_flex' >
            <div className='form' style={{background:'var(--p)',color:'var(--w)'}}>
                <form action="" method='post'>
                    <h1>Send Us A Message</h1>
                    <label htmlFor="name">Full Name</label><br />
                    <input type="text" name='name' required /><br />
                    <label htmlFor="number">Phone Number</label><br />
                    <input type="number" name='number' required /><br />
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name='email' required /><br />
                    <label htmlFor="Inqueryfor">Inquery For</label><br />
                    <select name="inqueryFor" id="inqueryFor">
                        <option value="">Select</option>
                        <option value="Sale">Sale Properties</option>
                        <option value="Rent">Rent Properties</option>
                        <option value="Buy">Buy Properties</option>
                    </select><br />
                    <label htmlFor="mssage">Message</label><br />
                    <textarea name="messaage" id="message" cols={50} rows={5}></textarea><br />
                    <input type="submit"  value="Submit" className='submit_btn'  name='inquery_message'/>
                    
                </form>
            </div>
            <div className='map' id='map'>
              <div  dangerouslySetInnerHTML={{ __html: property.map }} />
            </div>
        </div>
        {/* Form End*/}
      </div>

      {/* Similar Properties */}
      <div className="similar-properties">
        <h2>Similar Properties</h2>
        <div id="specific_hot-section-container">
          {similarProperties.map(item => (
            <PropertyItem
              key={item._id}
              id={item._id}
              name={item.title}
              price={"Rs." +item.price +" /-"}
              location={item.city +", " +item.state}
              content={item.content}
              area={item.area}
              mainImage={item.mainImage}
              saleImage={item.saleImage}
            />
          ))}
        </div>
      </div>
      {/* End Similar Properties */}

    </div>
    
  );
};

export default Details;
