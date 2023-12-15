import React from 'react';
import { logoFooter } from '../assets';
import { socialLinks } from '../constants'
import styles from '../style';

const Footer = () => (
   
        <footer className={`${styles.flexCenter} bg-yaleblue w-full py-[50px]`}>

            <div className={`${styles.boxWidth} w-full flex flex-col gap-[50px] xs:px-0 px-2 sm:px-2`}>

                <div className="flex xs:flex-row flex-col gap-[20px]">
                    <div className="flex flex-col xs:w-1/3 w-full gap-[20px]">
                        <img src={logoFooter} alt="herradura villas" className="h-[116px] w-[116]" />

                        <p className={`${styles.paragraph} text-white`}>
                        Your search for an ideal commercial real estate investment in the heart of bustling downtown Phoenix stops here
                        </p>
                    </div>

                    <div className="flex flex-col xs:w-1/3 w-full xs:gap-[47px] gap-[25px]">
                        <div className="flex flex-col gap-[20px]">
                            <p className={`${styles.heading5} text-goldenbrown`}>Address:</p>
                            <a href='' className={`${styles.paragraph} text-white  hover:text-goldenbrown`}>2390 E Camelback Rd, Suite 130, Phoenix, AZ 85016</a>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <p className={`${styles.heading5} text-goldenbrown`}>Email:</p>
                            <a href='' className={`${styles.paragraph} text-white hover:text-goldenbrown`}>fsbi@me-pm.com</a>
                        </div>
                    </div>

                    <div className="flex flex-col xs:w-1/3 w-full xs:gap-[74px] gap-[25px]">
                        <div className="flex flex-col gap-[20px]">
                            <p className={`${styles.heading5} text-goldenbrown`}>Phone:</p>
                            <a href='' className={`${styles.paragraph} text-white hover:text-goldenbrown`}>+1 234 5678</a>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <p className={`${styles.heading5} text-goldenbrown`}>Follow us:</p>
                            <div className='flex flex-row gap-[30px]'>
                                {
                                    socialLinks.map((links) =>
                                    (<div key={links.id} className=''>
                                        <a href={links.link} target='blank'>
                                            <img src={links.icon} alt={links.alt} className={`h-7 w-7 hover:fill-goldenbrown ${styles} transition-all transform hover:scale-105 ease-in-out`} />
                                        </a>
                                    </div>
                                    )
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-goldenbrown w-full border-t-[1px]'>

                </div>

                <div className="text-center">
                    <p className={`${styles.paragraph} text-white`}>
                        Copyright © All rights reserved | Powered by&nbsp;
                        <a href='https://www.dijination.net/' className='hover:text-goldenbrown'>DIJINATION</a>
                    </p>
                </div>

            </div>

        </footer>
    );

export default Footer;
