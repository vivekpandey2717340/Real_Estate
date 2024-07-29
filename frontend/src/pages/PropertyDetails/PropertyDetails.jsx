// PropertyDetails.jsx
import React, { useState } from 'react';
import Details from '../../Components/Details/Details';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';

const PropertyDetails = () => {
  const [isSliderShow, setIsSliderShow] = useState(false);

  return (
    <div>
      <ImageGallery isSliderShow={isSliderShow} setIsSliderShow={setIsSliderShow} />
      <Details path="/propertyDetails/:id" setIsSliderShow={setIsSliderShow} />
    </div>
  );
};

export default PropertyDetails;
