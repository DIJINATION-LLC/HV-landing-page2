import React from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets'
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => (
    <nav className="">
        <a href="/">
            <img src={logo} alt="Herradura Vills" className="" />
        </a>
        <ul className="">
            {navLinks.map((nav) => (
                <li key={nav.id}>
                    <Link to={nav.path}>{nav.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
)
export default Navbar


