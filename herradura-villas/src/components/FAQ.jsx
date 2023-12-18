import React, { useState } from 'react';
import { faq } from '../constants';
import styles from '../style';
import { upArrow, downArrow } from '../assets';
import { faqImage } from '../assets';

const FAQItem = ({ title, description, isOpen, toggleItem }) => {
  return (
    <div className={`${styles.flexCenter} w-full py-2`}>
      <div className={`${styles.boxWidth} ${isOpen ? 'gap-3' : ''} flex flex-col w-1/2 bg-gradient-box rounded-[10px] shadow sm:py-6 py-3 sm:px-9 px-4`}>
        <div className='flex flex-row justify-between items-center gap-1' onClick={toggleItem}>
          <h5 className={`${styles.heading5} text-black`}>{title}</h5>
          <img
            className={`faq-icon ${isOpen ? 'open' : ''} bg-yaleblue rounded-full sm:h-10 sm:w-10 h-7 w-7 cursor-pointer`}
            src={isOpen ? upArrow : downArrow}
            alt="Dropdown Icon"
          />
        </div>
        <div className={`${isOpen ? '' : 'invisible'} border-black border-t-[1px]`}></div>
        <div className={`faq-description ${isOpen ? '' : 'invisible'}`} style={{ maxHeight: isOpen ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}>
          <p className={`${styles.paragraph} text-black bg-gradient-box`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={`${styles.flexCenter} w-full py-[50px]`}>

      <div className={`${styles.boxWidth} flex xs:flex-row flex-col gap-[20px]`}>
        <div className='flex flex-col gap-[30px] xs:w-1/2 w-full'>
          <h2 className={`${styles.heading2} text-yaleblue`}>Frequently Asked Questions</h2>
          <div className="">
            {faq.map((faqItem, index) => (
              <FAQItem
                key={index}
                title={faqItem.title}
                description={faqItem.description}
                isOpen={index === activeIndex}
                toggleItem={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
        <div className='flex xs:w-1/2 h-full w-full'>
          <img src={faqImage} className=' aspect-square max-h-[684px] w-full' alt=''/>
        </div>
      </div>

    </section>
  );
};

export default FAQ;
