import React from 'react';
import img from '../images/Web Development.png'; 
import img2 from '../images/App Development.png';
import img4 from '../images/Digital Marketing.png';
import img3 from '../images/Graphic Designing (1).png';
import img5 from '../images/shopify.png';
import img6 from '../images/wordpress.png';
import img7 from '../images/seo.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-red-600 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-red-600'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-normal text-red-600">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12 m-auto max-w-6xl p-2 md:p-12 h-5/6" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Wordpress Development</h2>
                                    <p className="text-md font-normal">
                                        Create a powerful online presence with custom WordPress websites tailored to your business. Enjoy responsive, easy-to-manage sites that deliver smooth performance, engaging user experiences, and optimized functionality across all devices.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Shopify Development</h2>
                                    <p className="text-md font-normal">
                                        Build a standout e-commerce store with custom Shopify solutions. We craft responsive, easy-to-manage online stores that enhance the shopping experience, drive conversions, and provide seamless performance across all devices.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Search Engin Optimisation</h2>
                                    <p className="text-md font-normal">
                                    Enhance your online visibility with expert SEO services. We optimize your website to improve search engine rankings, drive organic traffic, and ensure your business reaches the right audience for maximum growth.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Digital Marketing</h2>
                                    <p className="text-md font-normal">
                                        Boost your brand’s online presence with tailored digital marketing services. From social media management to targeted ads, we create strategies that increase engagement, drive traffic, and deliver measurable results for your business.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                    <p className="text-md font-normal">
                                    Transform your ideas into a dynamic online presence with expert web development services. We build custom, scalable websites that are visually appealing, user-friendly, and optimized for performance across all devices.
                                    </p>
                                </div>
                            </div>
                            
                            {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                    <p className="text-md font-normal">
                                        We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                    </p>
                                </div>
                            </div>                

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">App Development</h2>
                                    <p className="text-md font-normal">
                                        We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                    </p>
                                </div>
                            </div> */}

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-red-600 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Graphic Designing</h2>
                                    <p className="text-md font-normal">
                                        Create visually stunning designs that capture your brand’s essence with our graphic design services. From logos to marketing materials, we craft unique, impactful visuals that engage your audience and elevate your brand.
                                    </p>
                                </div>
                            </div>                        
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-red-600 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-red-600 
                            font-bold">We Build <span className='font-black'>Success</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-normal'>
                                With a fresh approach to the industry and a passion for innovation, we deliver tailored strategies that streamline your operations, boost visibility, and create lasting impact. Staying ahead of the latest industry trends, we help your business grow through cutting-edge solutions designed for long-term success.                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-red-600 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-red-600 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-normal'>We work alongside your existing team to enhance current solutions or develop custom strategies tailored to your unique needs. Our goal is to simplify processes, boost efficiency, and deliver seamless digital experiences. Together, we’ll build solutions that integrate effortlessly into your workflow and drive your success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;