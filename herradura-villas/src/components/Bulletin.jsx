import React from 'react'
import { socialLinks } from '../constants'
import styles from '../style';

const Bulletin = () => (
  <div className="flex flex-row w-full bg-yaleblue justify-center">
    <div className={`${styles.boxWidth} flex justify-between`}>
      <div className='flex items-center gap-[20px]'>
      {
        socialLinks.map((links) =>
        (<div key={links.id}>
          <a href={links.link}>
            <img src={links.icon} alt={links.alt} className='h-7 w-7 ' />
          </a>
        </div>
        )
        )
      }</div>
      
    <div className='flex flex-row'>
      <p className="text-white">Call us:</p>
      <a href='tel:' className="text-white"> +1-xxx-xxxx</a>
    </div>
    </div>
  </div>

)

export default Bulletin
