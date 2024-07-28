import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import CompareItem from '../CompareItem/CompareItem';
import './CompareList.css';

const Comparelist = () => {
  const { compareList, isCompareClicked, setIsCompareClicked,wishlist } = useContext(StoreContext);
  const [upCompare, setUpCompare] = useState(false);
  const [hideCompare, setHideCompare] = useState(false);

  const handleCompare = () => {
    setUpCompare(prevState => !prevState);
  };

  const handleHideCompare = () => {
    setHideCompare(true);
    setIsCompareClicked(false);
  };

  useEffect(() => {
    if (isCompareClicked) {
      setHideCompare(false);
    }
  }, [isCompareClicked]);

  const compareListLength = compareList.length;
  const mainBoxClass = compareListLength > 0 ? 'main_compare_box_show' : '';
  const clickShowClass = isCompareClicked ? 'click_show_compare' : '';

  return (
    <div className={`main_compare_box_hide ${mainBoxClass} ${hideCompare ? 'hide_compare_box' : ''} ${clickShowClass}`}>
      <div className={`compare_box ${upCompare ? 'up_compare_box' : ''}`}>
        <div className='container'>
          <div className='compare_bg'>
            <div className='compare_btn'>
              <button onClick={handleCompare}><i className="fa-solid fa-minus"></i></button>
              <button onClick={handleHideCompare}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div style={{ clear: 'both' }}>
              <table>
                <thead >
                  <tr >
                    <th>Image</th>
                    <th>Name</th>
                    
                    <th>Area</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {compareList.map(property => (
                    <CompareItem key={property.id} {...property} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparelist;
