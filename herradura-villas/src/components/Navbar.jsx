import React from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import styles from '../style';

const Navbar = () => (
    <nav className={`${styles.flexCenter} w-full justify-center py-[10px]`}>

        <div className={`${styles.boxWidth} flex flex-row items-center justify-between`}>

            <a href="/">
                <img src={logo} alt="Herradura Vills" className="h-[92px] w-[200px]" />
            </a>
            
            <ul className="flex flex-row gap-[20px]">
                {navLinks.map((nav) => (
                    <li key={nav.id}>
                        <Link to={nav.path} className="text-black hover:text-yaleblue transition-colors duration-300">
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>

    </nav>
);

export default Navbar;



