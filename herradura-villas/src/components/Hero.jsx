import React from 'react'
import styles from '../style'
import Button from './Button'
import Slider from 'react-slick'
import { slides } from '../constants'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
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
        <div key={index}>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${slide.backgroundImage})` }}>

                <div className='flex w-full justify-center py-[160px] h-[75vh]'>

                    <div className={`${styles.boxWidth} flex flex-col gap-[30px]`}>
                        <h1 className={`${styles.heading1} w-[600px]`}>
                            {slide.heading}
                        </h1>
                        <p className={`${styles.paragraph} text-white w-[600px]`}>
                            {slide.paragraph}
                        </p>
                        <Button to={'/'} text={slide.buttonText} />
                    </div>
                </div>

            </div>

        </div>

    ));

    return (
        <section className={`${styles.flexCenter} `}>
            <Slider {...sliderSetting}>
                {heroSlides}
            </Slider>
        </section>
    );

};
export default Hero