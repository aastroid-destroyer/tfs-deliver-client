import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className="p-4 md:p-8"> 
            <div className="mx-auto overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#0a0a0a] px-6 py-12 md:py-16 text-center text-white">

                {/* Logo Section */}
                <div className="mb-6 flex items-center justify-center gap-2">
                    <Logo></Logo>
                </div>

                {/* Tagline */}
                <p className="mx-auto mb-10 md:mb-12 max-w-2xl text-xs md:text-sm leading-relaxed text-gray-400 px-2">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Navigation Links */}
                <nav className="mb-10 md:mb-12 flex flex-wrap justify-center gap-x-6 gap-y-4 border-y border-gray-800 py-6 md:py-8 text-xs md:text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">Services</a>
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">Coverage</a>
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">About Us</a>
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">Blog</a>
                    <a href="#" className="hover:text-white transition-colors w-[40%] sm:w-auto">Contact</a>
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-80 transition-opacity">
                        <FaLinkedinIn size={16} className="md:w-[18px]" />
                    </a>
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                        <FaXTwitter size={16} className="md:w-[18px]" />
                    </a>
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#1877f2] text-white hover:opacity-80 transition-opacity">
                        <FaFacebookF size={16} className="md:w-[18px]" />
                    </a>
                    <a href="#" className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#ff0000] text-white hover:opacity-80 transition-opacity">
                        <FaYoutube size={16} className="md:w-[18px]" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;