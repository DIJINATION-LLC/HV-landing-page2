import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from '../style';
import { gallery } from '../constants';
import ModalImage from 'react-modal-image';

export const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        768: 1,
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
            <div className={`${styles.boxWidth}`}>
                <h2 className={`${styles.heading2} text-yaleblue`}>Gallery</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {gallery.map((item) => (
                        <div key={item.id} className='my-masonry-grid_column'>
                            <img
                                src={item.image}
                                alt={item.alt}
                                className='gallery-image'
                                onClick={() => openLightbox(item.image)}
                            />
                        </div>
                    ))}
                </Masonry>
                {lightboxOpen && (
                    <ModalImage
                        small={selectedImage}
                        large={selectedImage}
                        alt="Gallery Image"
                        onClose={closeLightbox}
                    />
                )}
            </div>
        </section>
    );
};

export default Gallery;
