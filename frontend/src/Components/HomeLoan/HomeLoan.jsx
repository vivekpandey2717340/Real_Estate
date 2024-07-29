import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FaqItem from '../FaqItem/FaqItem';
import './HomeLoan.css'

const HomeLoan = () => {
  const { FAQList } = useContext(StoreContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='home_loan'>
      <div style={{ textAlign: 'center' }}>
        <h1>Service is Coming Soon...</h1>
      </div>
      
      <div className='faq_width'>
      <div>
        <h2>FAQ's For Applying Home Loan</h2>
      </div>
        {FAQList.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeLoan;
