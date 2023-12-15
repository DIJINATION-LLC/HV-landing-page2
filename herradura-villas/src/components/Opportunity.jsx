import React from 'react';
import { opportunity } from '../assets';
import Button from './Button';
import styles from '../style';

const Opportunity = () => {
  return (
    <div className={`${styles.boxWidth} flex justify-center py-[50px]`}>

      <div className='flex xs:flex-row flex-col gap-[25px] items-center w-full'>

        <div className='flex flex-col xs:w-1/2 w-full gap-[30px]'>
          <h2 className={`${styles.heading2} text-yaleblue`}>
            Unlock Success: <br /> Seize this Prime CRE Opportunity Today
          </h2>
          <p className={`${styles.paragraph}`}>
            Herradura Villas is located in the heart of Midtown Phoenix making it an attractive option
            for smart and strategic real estate investors looking for cash flow through rental properties.
            This attractive investment opportunity is surrounded by new developments and residential remodel
            projects, making it a prime location for investment. It is also conveniently located just a mile
            from the nearest freeway on-ramp and a short drive to Downtown Phoenix.
          </p>
          <Button to={'/'} text={'Input Text Here'} />
        </div>

        <div className='flex xs:w-1/2 w-full'>
          <img src={opportunity} className='aspect-square w-full' alt='' />
        </div>
        
      </div>

    </div>
  );
};

export default Opportunity;
