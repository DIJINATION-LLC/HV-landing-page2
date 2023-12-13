import React, { useState } from 'react'
import { faq } from '../constants'
import styles from '../style'
import { upArrow, downArrow } from '../assets';
import { opportunity } from '../assets';

const FAQItem = ({ title, description, isOpen, toggleItem }) => {
    return (
        <div className={`${styles.flexCenter} w-full  py-[50px]`}>
            <div className={`${styles.boxWidth} flex flex-col gap-[30px] w-1/2`}>
                <div >
                    <h5 className={`${styles.heading5} text-black`}>{title}</h5>
                    <img className={`faq-icon ${isOpen ? 'open' : ''}`}
                        src={isOpen ? downArrow : upArrow}
                        alt="Dropdown Icon" />
                </div>
                <div className={`faq-description ${isOpen ? 'open' : ''}`} style={{ maxHeight: isOpen ? '1000px' : '0' }}>
                    <p className={`${styles.paragraph} p-2 text-black`}>{description}</p>
                </div>
            </div>
        </div>

    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => {
        setActiveIndex(index == activeIndex ? null : index);
    };
    return (
        <div className={`${styles.flexCenter} w-full flex-row py-[50px]`}>

            <div className={`${styles.boxWidth} flex flex-row`}>
                <div className='flex flex-col gap-[30px] w-1/2'>
                        <h2 className={`${styles.heading2}`}>Frequently Asked Questions</h2>
                    <div className="">
                        {faq.map((faq, index) => (
                            <FAQItem
                                key={index}
                                title={faq.title}
                                description={faq.description}
                                isOpen={index === activeIndex}
                                toggleItem={() => toggleItem(index)}
                            />
                        ))}
                    </div>
                </div>
                
                <div className='flex w-1/2'>
                    <img src={opportunity} className='aspect-square w-full' alt='' />
                </div>
            </div>
        </div>
    );
};
export default FAQ