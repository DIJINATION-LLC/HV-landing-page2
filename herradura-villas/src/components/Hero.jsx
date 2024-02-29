import React from 'react'
import styles from '../style'
import Button from './Button'
import Slider from 'react-slick'
import { slides } from '../constants'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const sliderSetting = {
        dots: false,
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

                <div className={`${window.innerWidth < 480 ? 'bg-back-responsive' : 'bg-back'} w-full `}>
                    <div className='flex justify-center'>
                        <div className={`${styles.boxWidth} flex sm:flex-row items-center w-full justify-between z-10 relative py-[160px] xs:max-h-[80vh] max-h-[95vh]`}>
                            <div className={`flex flex-col gap-[30px] xs:w-[640px] w-full xs:px-0 px-2 sm:px-2`}>
                                <h1 className={`${styles.heading1}`}>
                                    {slide.heading}
                                </h1>
                                <p className={`${styles.paragraph} text-white`}>
                                    {slide.paragraph}
                                </p>
                                <a href={slide.link}>
                                    <Button  text={slide.buttonText} />
                                </a>
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