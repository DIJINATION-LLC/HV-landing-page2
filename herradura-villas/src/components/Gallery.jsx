import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '../style';
import { gallery } from '../constants';
import ModalImage from 'react-modal-image';

export const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

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

    const openLightbox = (imageSrc) => {
        setSelectedImage(imageSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage('');
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
                                    onClick={() => openLightbox(item.image)}
                                />
                                {lightboxOpen && (
                                    <ModalImage
                                        small={selectedImage}
                                        large={selectedImage}
                                        alt="Gallery Image"
                                        onClose={closeLightbox}
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
