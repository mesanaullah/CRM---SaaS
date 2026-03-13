import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/earthix_svg.svg';
import { X, TextAlignJustify, ChevronRight, ChevronDown } from 'lucide-react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white py-2 shadow-sm">

            <div className='flex items-center justify-between px-4 sm:px-6 h-18'>

                {/* Logo */}
                <div className='flex items-center'>
                    <Link to="/" class="w-fit">
                        <img className='h-18 w-auto object-contain' src={logo} alt="Earthix" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-4 md:gap-6'>
                    <div>
                        <Link to="/services">
                            <span>Services</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/solutions">
                            <span>Solutions</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/pricing">
                            <span>Pricing</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/partners">
                            <span>Partners</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/resources">
                            <span>Resources</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/support">
                            <span>Support</span>
                        </Link>
                    </div>

                </div>

                {/* Desktop Buttons */}


                <div className='hidden md:flex items-center gap-2'>
                    <Link to="/trial" className="px-7 py-2 rounded-full border font-medium text-primary hover:text-white text-center hover:bg-[#9AC64E] active:bg-[#215070] transition cursor-pointer" >
                        Try Free
                    </Link>

                    <Link to="/login" className="px-8 py-2 rounded-full bg-primary font-medium text-white text-center active:bg-[#215070] hover:opacity-95 transition cursor-pointer" >
                        Login
                    </Link>
                </div>



                {/* Mobile Button */}

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-primary z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X className='h-8 w-8' /> : <TextAlignJustify className='h-8 w-8' />}{" "}
                </button>

            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex flex-col gap-6 p-6 pt-24 text-gray-700 font-medium">

                    <Link onClick={() => setIsMenuOpen(false)} to="/services">Services</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/solutions">Solutions</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/pricing">Pricing</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/partners">Partners</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/resources">Resources</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/support">Support</Link>

                    <div className="flex flex-col gap-3 pt-4 border-t">

                        <Link
                            to="/trial"
                            className="px-6 py-2 text-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
                        >
                            Try Free
                        </Link>

                        <Link
                            to="/login"
                            className="px-6 py-2 text-center rounded-full bg-primary text-white hover:opacity-90 transition"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
