import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-black p-8 bg-gray-100 text-black text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="text-left font-bold text-4xl mb-4">Code Factory</h3>
                            <div className='text-left text-md font-normal text-black pb-2'>
                                <h5 className='font-bold'>United Arab Emirates</h5>
                                <p>New Industrial Area one, Ajman - UAE</p>
                                <p>+971-503621692</p>
                            </div>

                            <div className='text-left text-md font-normal text-black'>
                                <h5 className='font-bold'>Pakistan</h5>
                                <p>6th floor, 82 J1, Johar Town, Near Al-Fatah, Lahore.</p>
                                <p>+92-3350626482</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    {/* <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div> */}

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-black text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-black hover:text-gray-900 transition duration-250 ease-in-out">Web Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-black hover:text-gray-900 transition duration-250 ease-in-out">App Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-black hover:text-gray-900 transition duration-250 ease-in-out">Graphic Designing</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-black hover:text-gray-900 transition duration-250 ease-in-out">Digital Marketing</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold text-black">
                        <div className="text-xl mb-6 ">
                            Social Media Links
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <a href="https://www.linkedin.com/company/codefactory0" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-black  w-8 mx-1 text-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-black hover:text-balck bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Code Factory
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
