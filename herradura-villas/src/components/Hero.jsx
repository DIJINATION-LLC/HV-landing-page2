import React from 'react'
import styles from '../style'
import Button from './Button'
import Slider from 'react-slick'

export const Hero = () => (
    <div className={`${styles.flexCenter} bg-hero-banner flex w-full justify-center py-[160px]`}>

        <div className={`${styles.boxWidth} flex flex-col gap-[30px]`}>
            <h1 className={`${styles.heading1} w-[600px]`}>
                Elevate Your Portfolio with Prime Multifamily Space
            </h1>

            <p className={`${styles.paragraph} text-white w-[600px]`}>
                Situated in an area of revitalization, Herradura Villas is surrounded by new developments and residential remodel projects, making it a prime location for investment.
            </p>

            <Button to={'/'} text={'Learn More'} />
        </div>

    </div>


)
export default Hero