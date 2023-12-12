import React from 'react'
import { socialLinks } from '../constants'
import styles from '../style';

const Bulletin = () => (
  <div className="flex flex-row w-full bg-yaleblue justify-center">

    <div className={`${styles.boxWidth} flex justify-between p-[10px]`}>

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
        }
      </div>

      <div className='flex flex-row'>
        <h4 className={`${styles.heading4} text-white`}>Call us: <a href='tel:' className="text-white hover:text-goldenbrown"> +1-xxx-xxxx</a></h4>
      </div>

    </div>

  </div>

)

export default Bulletin
