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
        autoplaySpeed: 2500,
        arrows: false,

        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const heroSlides = slides.map((slide, index) => (

        <div key={index}>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${slide.backgroundImage})` }}>

                <div className='bg-back w-full'>
                    <div className='flex justify-center'>
                        <div className={`${styles.boxWidth} flex sm:flex-row items-center w-full justify-between z-10 relative py-[160px] max-h-[80vh]`}>
                            <div className={`flex flex-col gap-[30px] w-full`}>
                                <h1 className={`${styles.heading1} w-[640px]`}>
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
            </div>
        </div>
    ));

    return (
        <section className={``}>
            <Slider {...sliderSetting}>
                {heroSlides}
            </Slider>
        </section>
    );

};
export default Hero