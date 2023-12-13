import React from 'react'
import styles from '../style'
import Button from './Button'
import Slider from 'react-slick'
import { slides } from '../constants'

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = react.useState(0);
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: false,
        appendDots: (dots) => (
          <div>
            <ul>{dots}</ul>
          </div>
        ),
        customPaging: (i) => (
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              margin: '0 5px',
              background: i === currentSlide ? '#5cae17' : '#d9d9d9',
            }}
          />
        ),
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    const heroSlides = slides.map((slide, index) => (
        <div className={`${styles.boxWidth} flex flex-col gap-[30px]`}>
            <h1 className={`${styles.heading1} w-[600px]`}>
                slides
            </h1>
            <p className={`${styles.paragraph} text-white w-[600px]`}>
                Situated in an area of revitalization, Herradura Villas is surrounded by new developments and residential remodel projects, making it a prime location for investment.
            </p>
            <Button to={'/'} text={'Learn More'} />
        </div>
    ));

    return (
        <section className={`${styles.flexCenter} bg-hero-banner flex w-full justify-center py-[160px]`}>
            <Slider {...sliderSetting}>
                {heroSlides}
            </Slider>
        </section>
    );

};
export default Hero