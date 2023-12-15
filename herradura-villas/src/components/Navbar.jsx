import React from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import styles from '../style';
import Button from './Button';

export const Navbar = () => {
    const innerLinks = navLinks.slice(0, 4);

    return (
        <nav className={`${styles.flexCenter} w-full justify-center py-[10px]`}>

            <div className={`${styles.boxWidth} flex flex-row items-center justify-between`}>
                <a href="/">
                    <img src={logo} alt="Herradura Vills" className="h-[92px] w-[200px]" />
                </a>
                <ul className="flex flex-row items-center">
                    {innerLinks.map((nav, index) => (
                        <li key={nav.id}>
                            <Link
                                to={nav.url}
                                className={`text-black hover:text-yaleblue transition-colors duration-300 ${nav.id === 'contact' ? 'mr-0' : 'mr-4 md:mr-8'
                                    }`}
                            >
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                    {navLinks.length >= 4 && (
                        <li>
                            <Button to={navLinks[4].url} text={navLinks[4].title} />
                        </li>
                    )}
                </ul>


            </div>

        </nav>);
};

export default Navbar;



