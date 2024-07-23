// PropertyDetails.jsx
import React from 'react';
import Details from '../../Components/Details/Details';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';

const PropertyDetails = () => {

  return (
    <div>
      <ImageGallery/>
      <Details path="/propertyDetails/:id"/>
    </div>
  );
};

export default PropertyDetails;
