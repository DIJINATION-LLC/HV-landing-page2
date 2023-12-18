import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '../style';
import { gallery } from '../constants';
import Lightbox from 'react-images';

export const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    const imagesForLightbox = gallery.map((item) => ({
        src: item.image,
        alt: item.alt,
    }));

    return (
        <section id='gallery' className={`${styles.flexCenter} w-full py-[50px]`}>
            <div className={`${styles.boxWidth} flex flex-col gap-[30px] items-center`}>
                <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
                <div className="w-full">
                    <Slider {...settings}>
                        {gallery.map((item, index) => (
                            <div key={item.id} className='p-2' onClick={() => openLightbox(index)}>
                                <img src={item.image} alt={item.alt} className='slider-image' />
                            </div>
                        ))}
                    </Slider>
                    {lightboxOpen && (
                        <Lightbox
                            images={imagesForLightbox}
                            isOpen={lightboxOpen}
                            onClose={() => setLightboxOpen(false)}
                            currentImage={selectedImageIndex}
                            onClickPrev={() => setSelectedImageIndex((prev) => prev - 1)}
                            onClickNext={() => setSelectedImageIndex((prev) => prev + 1)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
