import React, { useState } from 'react'
import { faq } from '../constants'
import styles from '../style'
import { upArrow, downArrow } from '../assets';

const FAQItem = ({ title, description, isOpen, toggleItem }) => {
    return (
        <div className=''>
            <div className=''>
                <h5 className={`${styles.heading5} text-black`}>{title}</h5>
                <img className={`faq-icon ${isOpen ? 'open' : ''}`}
                    src={isOpen ? downArrow : upArrow}
                    alt="Dropdown Icon" />
            </div>
            <div className={`faq-description ${isOpen ? 'open' : ''}`} style={{ maxHeight: isOpen ? '1000px' : '0' }}>
                <p className={`${styles.paragraph} p-2 text-black`}>{description}</p>
            </div>
        </div>
    );
};

export const FAQ = () => (
    <div>

    </div>
)

export default FAQ