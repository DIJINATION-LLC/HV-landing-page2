import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from '../style';
import { gallery } from '../constants';
import Modal from 'react-modal';
import { cross_icon } from '../assets';

export const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <section id='gallery' className={`${styles.flexCenter} w-full py-[50px]`}>
            <div className={`${styles.boxWidth} flex flex-col gap-[30px] items-center`}>
                <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
                <div className="w-full">
                    <Slider {...settings}>
                        {gallery.map((item, index) => (
                            <div key={item.id} className='p-2'>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className='slider-image'
                                    onClick={() => openLightbox(index)}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <Modal
                    isOpen={lightboxOpen}
                    onRequestClose={closeLightbox}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            border: 'none',
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        },
                    }}
                >
                    <div style={{ position: 'relative', width: '100%' }}>
                        <img
                            src={gallery[currentImageIndex].image}
                            alt={gallery[currentImageIndex].alt}
                            style={{ maxWidth: '100%', maxHeight: '90vh', display: 'block', margin: 'auto' }}
                        />
                        <button
                            onClick={closeLightbox}
                            style={{
                                backgroundColor: '#3a3a3a',
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            <img src={cross_icon} alt='' className='h-4 w-4' />
                        </button>
                    </div>
                </Modal>

            </div>
        </section>
    );
};

export default Gallery;
