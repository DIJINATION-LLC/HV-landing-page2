import React, { useState } from 'react'
import { faq } from '../constants'
import styles from '../style'
import { upArro,downArroww } from '../assets';

const FAQItem = ({ title, description, isOpen, toggleItem }) => {
    return (
        <div className=''>
            <div className=''>
                <h5 className={`${styles.heading5} text-black`}>{title}</h5>
                <img className={`faq-icon ${isOpen ? 'open': ''}`}
                src={isOpen ? downArrow : upArrow}
                alt="Dropdown Icon"/>
            </div>
        </div>
    );
};

export const FAQ = () => (
    <div>

    </div>
)

export default FAQ