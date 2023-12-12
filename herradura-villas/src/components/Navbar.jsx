import React from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center justify-between py-4 px-6">
    <a href="/">
      <img src={logo} alt="Herradura Vills" className="h-[92px] w-[200px]" />
    </a>
    <ul className="flex flex-row space-x-6">
      {navLinks.map((nav) => (
        <li key={nav.id}>
          <Link to={nav.path} className="text-black hover:text-yaleblue transition-colors duration-300">
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;



