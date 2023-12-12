import React from 'react'
import { navLinks } from '../constants'
import {logo} from '../assets'
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <a href="/"><img src={logo} alt="Herradura Vills" className="xs:w-[255px] w-44 h-auto object-contain" /></a>

        <ul className="justify-end items-center flex-1">
            {navLinks.map((nav) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] md:text-[18px]`}
                >
                    <Link to={nav.path}>{nav.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
)
export default Navbar


