import React from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import styles from '../style';
import Button from './Button';

export const Navbar = () => {
    const navLink = navLinks.slice(0, 4);
    const button = navLinks.slice(5);

    return (
        <nav className={`${styles.flexCenter} w-full justify-center py-[10px]`}>

            <div className={`${styles.boxWidth} flex flex-row items-center justify-between`}>
                <a href="/">
                    <img src={logo} alt="Herradura Vills" className="h-[92px] w-[200px]" />
                </a>
                <ul className="flex flex-row gap-[20px]">
                    {navLink.map((nav) => (
                        <li key={nav.id}>
                            <Link to={nav.path} className="text-black hover:text-yaleblue transition-colors duration-300">
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                    <li><Button to={button.path} text={button.title} /></li>
                </ul>

            </div>

        </nav>);
};

export default Navbar;



