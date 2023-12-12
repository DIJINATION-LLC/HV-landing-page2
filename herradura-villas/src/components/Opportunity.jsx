import React from 'react';
import { opportunity } from '../assets';
import styles from '../style';
const Opportunity = () => (
    <div className={`${styles.boxWidth} ${styles.flexCenter} py-[50px] `}>
        <div className=" w-full flex flex-row items-center gap-[25px]">
        <div className='flex flex-col w-1/2 gap-[30px]'>
            <h2 className={`${styles.heading2} text-yaleblue`}>
                Unlock Success: <br></br> Seize this Prime CRE Opportunity Today
            </h2>
            <p className={`${styles.paragraph}`}>
                Herradura Villas is located in the heart of Midtown Phoenix making it an attractive option
                for smart and strategic real estate investors looking for cash flow through rental properties.
                This attractive investment opportunity is surrounded by new developments and residential remodel
                projects, making it a prime location for investment. It is also conveniently located just a mile
                from the nearest freeway on-ramp and a short drive to Downtown Phoenix.
            </p>
        </div>
        <div className='flex w-1/2'>
            <img src={opportunity} className='h-[631px] w-[607.5px]' alt='Opportunity' />
        </div>
        </div>
    </div>
);

export default Opportunity;
