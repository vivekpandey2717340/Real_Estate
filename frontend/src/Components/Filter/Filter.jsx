import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext'
import SearchBox from '../SearchBox/SearchBox';
import ResultItem from '../ResultItem/ResultItem';
import './Filter.css';

const Filter = () => {
    const {propertyList} = useContext(StoreContext)
  return (
    <div>
        <section className="container">
            <div className="listing">
              <div>
                <SearchBox/>
              </div>
              <div className="listing_div">
                <div style={{border:'2px solid var(--p)', borderRadius:'20px', marginBottom:'20px'}}>
                    <h5 style={{padding:'20px', color:'var(--b)'}}>Add additional filters to get desire result</h5>
                </div> 
                {propertyList.map((item,index)=>{
                     return <ResultItem key={index} id={item._id} name={item.name} price={item.price} location={item.location} content={item.content} area={item.area} mainImage={item.mainImage} saleImage={item.saleImage} furnishedStatus={item.furnishedStatus} Parking={item.Parking} builtYear={item.builtYear}/>
                })}
              </div>
            </div>
        </section>
    </div>
  );
};

export default Filter;
