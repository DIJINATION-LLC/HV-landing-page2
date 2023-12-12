import React from 'react';
import { opportunity } from '../assets';
import styles from '../style';
const Opportunity = () => (
    <div className={`${styles.boxWidth} flex-row items-center`}>
        <div className='flex flex-col'>
            <h2 className={`${styles.heading2} text-yaleblue`}>
                Unlock Success: Seize this Prime CRE Opportunity Today
            </h2>
            <p className={`${styles.paragraph} flex items-center`}>
                Herradura Villas is located in the heart of Midtown Phoenix making it an attractive option
                for smart and strategic real estate investors looking for cash flow through rental properties.
                This attractive investment opportunity is surrounded by new developments and residential remodel
                projects, making it a prime location for investment. It is also conveniently located just a mile
                from the nearest freeway on-ramp and a short drive to Downtown Phoenix.
            </p>
        </div>
        <div className='flex items-center justify-center'>
            <img src={opportunity} className='h-[400px] sm:h-[631px] w-[303.75px] sm:w-[607.5px]' alt='Opportunity' />
        </div>
    </div>
);

export default Opportunity;
