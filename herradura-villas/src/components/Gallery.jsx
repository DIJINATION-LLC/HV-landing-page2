import React from 'react';
import Slider from 'react-slick';
import styles from '../style';
import { gallery } from '../constants';

export const Gallery = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        swipeToSlide: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id='gallery' className={`${styles.flexCenter} w-full py-[50px]`}>
            <div className={`${styles.boxWidth} flex flex-col gap-[30px] items-center`}>
                <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
                <div className="w-full">
                    <Slider {...settings}>
                        {gallery.map((item) => (
                            <div key={item.id} className='p-2'>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className='slider-image'
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
