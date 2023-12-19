import React from 'react';
import { socialLinks } from '../constants';
import styles from '../style';

const Bulletin = () => (
  <section className="flex w-full bg-yaleblue justify-center">

    <div className={`${styles.boxWidth} flex justify-between p-[10px]`}>
      <div className='flex items-center xs:gap-[20px] gap-3'>
        {socialLinks.map((links) => (
          <div key={links.id}>
            <a href={links.link}>
              <img src={links.icon} alt={links.alt} className={`h-5 w-5 ${styles} transition-all transform hover:scale-105 ease-in-out`} />
            </a>
          </div>
        ))}
      </div>

      <div className='flex flex-row'>
        <h6 className={`${styles.heading6} text-white`}>Email us: <a href='mailto:fsbi@me-pm.com' className="text-white hover:text-goldenbrown">fsbi@me-pm.com</a></h6>
      </div>
    </div>
    
  </section>
);

export default Bulletin;
