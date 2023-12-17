import React, { useState } from 'react';
import { navLinks } from '../constants';
import { logo, close, menu } from '../assets';
import styles from '../style';
import Button from './Button';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const innerLinks = navLinks.slice(0, 4);

    return (
        <nav className={`${styles.flexCenter} w-full justify-center py-[10px]`}>

            <div className={`${styles.boxWidth} flex flex-row items-center justify-between`}>
                <a href="#">
                    <img src={logo} alt="Herradura Vills" className="h-[92px] w-[200px]" />
                </a>

                <ul className="sm:flex hidden flex-row items-center">
                    {innerLinks.map((nav, index) => (
                        <li key={nav.id}>
                            <a href={nav.url} className={`text-black hover:text-yaleblue transition-colors duration-300 ${nav.id === 'contact' ? 'mr-0' : 'mr-4 md:mr-8'
                                }`}>{nav.title}</a>
                        </li>
                    ))}
                    {navLinks.length >= 4 && (
                        <li>
                            <Button to={navLinks[4].url} text={navLinks[4].title} />
                        </li>
                    )}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center pr-3">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] z-20 object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins hover:text-black font-medium cursor-pointer text-[20px] text-black px-1`}
                            >
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>

           
        </nav>
    );
};

export default Navbar;



