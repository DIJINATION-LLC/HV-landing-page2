import React from 'react'
import styles from '../style'
import { gallery } from '../constants'

export const Gallery = () => (
    <section id='gallery' className={`${styles.flexCenter} w-full py-[50px]`}>

        <div className={`${styles.boxWidth} flex flex-col gap-[30px] items-center`}>
            <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
            <div className='flex flex-row gap-[20px]'>
                {
                    gallery.map((item) =>
                    (
                        <img src={item.image} alt='' className='' />
                    ))
                }

            </div>
        </div>

    </section>
)
export default Gallery