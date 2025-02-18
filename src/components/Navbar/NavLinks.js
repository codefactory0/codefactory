import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="text-lg px-4 font-normal  text-balck hover:text-red-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="text-lg px-4 font-normal text-balck hover:text-red-600" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="text-lg px-4 font-normal text-balck hover:text-red-600" to="/">
                Portfolio
            </HashLink>
            <HashLink className="text-lg px-4 font-normal text-balck hover:text-red-600" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-red-600 hover:bg-red-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
            Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
