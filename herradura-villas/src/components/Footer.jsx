import React from 'react';
import { logoFooter } from '../assets';
import { socialLinks } from '../constants'
import styles from '../style';

const Footer = () => {
    return (
        <footer className="bg-yaleblue w-full py-[50px]">
            <div className={`${styles.flexCenter}flex flex-row gap-[20px]`}>
                <div className="flex flex-col w-1/3 gap-[20px]">
                    <img src={logoFooter} alt="herradura villas" className="h-[116px] w-[116]" />
                    <p className={`${styles.paragraph} text-white`}>
                        Your search for an ideal commercial real estate investment in the heart of bustling downtown Phoenix stops here.
                    </p>
                </div>
                <div className="flex flex-col w-1/3 gap-[74px]">
                    <div className="gap-[20px]">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Address:</p>
                        <p className={`${styles.paragraph} text-white`}>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="gap-[20px]">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Email:</p>
                        <p className={`${styles.paragraph} text-white`}>Gorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <div className="flex flex-col w-1/3 gap-[74px]">
                    <div className="gap-[20px]">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Phone:</p>
                        <p className={`${styles.paragraph} text-white`}>+1 234 5678</p>
                    </div>
                    <div className="gap-[20px]">
                        <p className={`${styles.heading5} text-goldenbrowen`}>Follow us:</p>
                        <div className='flex flex-row gap-[30px]'>
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
            </div>
            <div className="text-center">
                <p className={`${styles.paragraph} text-white`}>
                    Copyright © All rights reserved | Powered by
                    <a href='/'>DIJINATION</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
