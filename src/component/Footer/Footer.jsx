import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='p-5'>
            {/* className='p-5 md:mx-20 mt-20' */}
            {/* <div className='text-center'>
                <h1 className=' font-bold font-serif mt-5 mb-2 title'>CONTACT US</h1>

                <hr className="border-black border-2 w-80 mx-auto" />
                <h2 className='mt-10'>You can make a reservation any time online or by calling (000) 111 2222 during  <br />our opening hours.</h2>
            </div> */}
            {/* <div className='md:flex justify-evenly items-center'>
                <div className='text-center'>
                    <h1 className=' font-extrabold text-2xl my-5 titleAdd'>RESERVATION:</h1>
                    <a className='text-sm' href="">molly_paradise</a> <br />
                    <a className='text-sm' href="">contact@example.com</a> <br />
                    <a className='text-sm' href="">+38(050)000-00-00</a>
                </div>

                <div className='text-center'>
                    <h1 className='font-bold text-2xl titleAdd my-5'>ADDRESS:</h1>
                    <p className='text-sm my-1'>40 Park Ave, Brooklyn, New York, 70250 </p>
                    <p className='text-sm'>30 George V St, Suite 1, Paris, 33333</p>
                </div>

                <div className='text-center'>
                    <h1 className='font-bold titleAdd  my-5 text-2xl'>OPEN HOURS:</h1>
                    <p className='text-sm'>Monday - Friday: 10 AM - 11 PM <br /> Saturday - Sunday: 9 AM - 1 PM</p>
                </div>
            </div> */}


            {/* icons */}
            {/* <div className="flex justify-center gap-10 mt-10">
                <CiFacebook className="text-3xl" />
                <FaInstagram className="text-3xl" />
                <CiTwitter className="text-4xl" />
                <BsWhatsapp className="text-3xl" />
            </div> */}
            <div className='grid grid-cols-7 gap-5'>
                <div className='col-span-2'>
                    <h1 className=' font-extrabold text-2xl my-5'><span className='text-zinc-800'>Car</span><span className='text-green-700'>Volt</span></h1>
                    <p className='text-gray-800 text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis voluptatibus expedita amet, placeat libero porro id provident pariatur quia?</p>
                    <div className='mt-5'>
                        <button className='bg-zinc-900 text-white px-4 py-2 rounded-xl mr-3'>Google play</button>
                        <button className='bg-zinc-900 text-white px-4 py-2 rounded-xl mr-3'>App store</button>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>Category</h1>
                    <div className='text-gray-800 mt-3'>
                        <p href="">Cars</p>
                        <p href="">Parts</p>
                        <p href="">Accessories</p>
                        <p href="">Shop</p>
                        <p href="">Details</p>
                        <p href="">Service</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>Company</h1>
                    <div className='text-gray-800 mt-3'>
                        <p href="">About Us</p>
                        <p href="">Delivery</p>
                        <p href="">Legal Notice</p>
                        <p href="">Terms & Conditions</p>
                        <p href="">Secure Payment</p>
                        <p href="">Contact Us</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>Account</h1>
                    <div className='text-gray-800 mt-3' F>
                        <p href="">Sign in</p>
                        <p href="">View cart</p>
                        <p href="">Return Policy</p>
                        <p href="">Terms & Conditions</p>
                        <p href="">Secure Payment</p>
                        <p href="">Vendor</p>
                    </div>
                </div>

                <div className='col-span-2'>
                    <h1 className='text-xl font-bold'>Contact</h1>
                    <div className='text-gray-800 mt-3'>
                        <p href="">971 Lajamni, Motavarachhap Surat, Gujarat, Bharat 394101.</p>
                        <p href="">+00 9876543210</p>
                        <p href="">example@email.com</p>
                    </div>

                </div>
            </div>

            <div className="flex justify-center gap-10 mt-10">
                <CiFacebook className="text-3xl" />
                <FaInstagram className="text-3xl" />
                <CiTwitter className="text-4xl" />
                <BsWhatsapp className="text-3xl" />
            </div>

            <p className="text-center my-5 ">2024 © Dina . Designed by <span className="text-orange-500">MAHAMUDHUL HASAN</span></p>
        </div>
    );
};

export default Footer;