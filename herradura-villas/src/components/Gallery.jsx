import React from 'react'
import styles from '../style'
import { gallery } from '../constants'

export const Gallery = () => (
    <div id='gallery' className={`${styles.flexCenter} w-full py-[50px]`}>
        <div className={`${styles.boxWidth} flex flex-col gap-[30px] items-center`}>
            <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
            <div className='flex flex-row gap-[20px]'>
                {
                    gallery.map((gal) =>
                    (
                        <img src={gal.image} alt='' className='' />
                    ))
                }

            </div>
        </div>

    </div>
)
export default Gallery