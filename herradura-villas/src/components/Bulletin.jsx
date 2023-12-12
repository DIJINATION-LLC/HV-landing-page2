import React from 'react'
import { socialLinks } from '../constants'
import styles from '../style';

const Bulletin = () => (
  <div className="flex-row w-full bg-yaleblue justify-between items-center">
    <div className={`${styles.boxWidth} flex items-center`}>
      {
        socialLinks.map((links) =>
        (<div key={links.id} className=''>
          <a href={links.link}>
            <img src={links.icon} alt={links.alt} className='h-7 w-7 ' />
          </a>
        </div>
        )
        )
      }
    </div>
    <div className='flex-row '>
      <p className="text-white">Call us:</p>
      <a href='tel:' className="text-white"> +1-xxx-xxxx</a>
    </div>
  </div>

)

export default Bulletin
