import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-red-600 uppercase font-bold">Portfolio</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-red-600 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">T-Shirt Factory</h4>
                                <p className="text-md font-normal leading-5 h-auto">
                                T-Shirt Factory is an innovative and user-friendly e-commerce platform specializing in customized apparel. Our development team at Code Factory collaborated closely with the client to deliver a seamless online shopping experience tailored to meet the demands of a dynamic clothing market.
                                From initial concept design to deployment and ongoing support. We focused on delivering a high-performance website that drives engagement and sales.
                                </p>
                                {/* <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-red-600 hover:bg-red-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Visit
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Fabric Print</h4>
                                <p className="text-md font-normal leading-5 h-auto ">
                                Fabric Print is a leading online store offering a wide range of customized uniforms for various industries. Our team at Code Factory collaborated with the client to build an intuitive and efficient platform that simplifies the shopping process for businesses and individuals alike. We focused on delivering a responsive design, seamless navigation, driving growth and secure checkout to enhance user satisfaction.                                </p>
                                <div className="flex justify-center my-4">
                                    {/* <Link to="/get-demo" className="text-white bg-red-600 hover:bg-red-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Visit
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link> */}
                                </div>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-red-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Apparel Factory</h4>
                                <p className="text-md font-normal leading-5 h-auto ">
                                Apparel Factory is a premier e-commerce site specializing in high-quality custom clothing and accessories. We partnered with the client to design a visually appealing platform that offers a smooth and enjoyable shopping experience. Our approach focused on creating an easy-to-navigate interface, and a secure payment process. From concept to launch and ongoing maintenance, we ensured the website effectively meets customer needs while driving brand growth and engagement.                                </p>
                                <div className="flex justify-center my-4">
                                    {/* <Link to="/get-demo" className="text-white bg-red-600 hover:bg-red-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Visit
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Prints Factory</h4>
                                <p className="text-md font-normal leading-5 h-auto ">
                                Prints Factory is a cutting-edge online platform specializing in personalized printing solutions for various products. Our team at Code Factory collaborated with the client to develop a user-friendly website that streamlines the customization and ordering process. We focused on delivering a sleek design, intuitive navigation to enhance the user journey. From planning to deployment, we aimed to create a reliable e-commerce experience that boosts customer satisfaction and business growth.                                </p>
                                <div className="flex justify-center my-4">
                                    {/* <Link to="/get-demo" className="text-white bg-red-600 hover:bg-red-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Visit
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link> */}
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;