import React, { useState, useEffect } from 'react';
import './Experties.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import axios from 'axios';

const Experties = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/ourexpertise/all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching expertise data:', error);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div>
      <div className='experties'>
        <h1>Our Expertise</h1>
      </div>
      <div className='container'>
        <div className='expertiesContent'>
          <BsArrowLeftCircleFill className='arrow arrow_left' onClick={prevSlide} />
          {data.map((item, index) => (
            <div key={index} className={slide === index ? 'slide' : 'slide slide_hidden'}>
              <img src={`http://localhost:4000/images/${item.image}`} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.content}</p>
            </div>
          ))}
          <BsArrowRightCircleFill className='arrow arrow_right' onClick={nextSlide} />
          <span className='indicators'>
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={slide === index ? 'indicator' : 'indicator indicator_inactive'}
              ></button>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experties;
