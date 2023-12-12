import React from 'react';
import { logo } from '../assets';
import { socialLinks } from '../constants'
import styles from '../style';

const Footer = () => {
    return (
        <footer className="bg-yaleblue">
            <div className="">
                <div className="">
                    <img src={logo} alt="herradura villas" className="" />
                    <p className={`${styles.paragraph} text-white`}>
                        Your search for an ideal commercial real estate investment in the heart of bustling downtown Phoenix stops here.
                    </p>
                </div>
                <div className="">
                    <div className="">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Address:</p>
                        <p className={`${styles.paragraph} text-white`}>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <p className={`${styles.heading5} text-goldenbrowen`}>Email:</p>
                        <p>Gorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Phone:</p>
                        <p className={`${styles.paragraph} text-white`}>+1234567890</p>
                    </div>
                    <div className="">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Follow us:</p>
                        {
                            socialLinks.map((links) =>
                            (<div key={links.id} className=''>
                                <a href={links.link}>
                                    <img src={links.icon} alt={links.alt} className='h-7 w-7 ' />
                                </a>
                            </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="">
                <p className={`${styles.paragraph} text-white`}>
                    Copyright © All rights reserved | Powered by
                </p>
            </div>
        </footer>
    );
};

export default Footer;
