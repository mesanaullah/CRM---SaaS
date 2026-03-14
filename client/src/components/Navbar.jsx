import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/earthix_svg.svg';
import {
    ChevronDown,
    ChevronRight,
    X,
    TextAlignJustify,
    School,
    Store,
    ShoppingCart,
    Pill,
    Shirt,
    Scissors,
    Dumbbell,
    BookOpen,
    MoveRight,
    Users,
    Headset,
    ChartNoAxesCombined,
    ChartSpline,
    ChartPie,
    Info,
    Mail
} from "lucide-react";

const services = [
    { name: "School Management", icon: School },
    { name: "Restaurant & Food Service", icon: Store },
    { name: "Grocery & General Store", icon: ShoppingCart },
    { name: "Pharmacy & Medical Store", icon: Pill },
    { name: "Clothing & Fashion Store", icon: Shirt },
    { name: "Salon & Beauty Studio", icon: Scissors },
    { name: "Fitness Center (Gym)", icon: Dumbbell },
    { name: "Library & Book Store", icon: BookOpen },
];

const solutions = [
    { name: "CRM Automation", icon: Users },
    { name: "Sales Pipeline", icon: ChartSpline },
    { name: "Customer Analytics", icon: ChartNoAxesCombined },
    { name: "Marketing Campaigns", icon: Store },
    { name: "Customer Support", icon: Headset },
    { name: "Business Insights", icon: ChartPie },
];

const supports = [
    { name: "Contact Us", icon: Mail },
    { name: "About Us", icon: Info },
];

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [openDropdown, setOpenDropdown] = useState(null);
    const [openMega, setOpenMega] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white py-2 shadow-sm">

            <div className='flex items-center justify-between px-4 sm:px-6 h-18'>

                {/* Mobile Menu Button (LEFT) */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden  text-primary z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? (
                        <X className="h-8 w-8" />
                    ) : (
                        <TextAlignJustify className="h-8 w-8" />
                    )}
                </button>

                {/* Logo */}
                <Link to="/" className=" block sm:hidden items-center">
                    <img className="h-16 w-auto object-contain" src={logo} alt="Earthix" />
                </Link>

                {/* Desktop Menu */}

                {/* Logo */}
                <div className='hidden sm:block items-center'>
                    <Link to="/" className="w-fit">
                        <img className='h-18 w-auto object-contain' src={logo} alt="Earthix" />
                    </Link>
                </div>

                {/* -----------------------Desktop Menu-------------------------------- */}
                <div className='hidden md:flex items-center gap-4 md:gap-6'>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMega("services")}
                        onMouseLeave={() => setOpenMega(null)}
                    >
                        <button className="flex items-center gap-1 font-medium hover:text-[#4093A8]">
                            Services <ChevronDown size={16} />
                        </button>

                        <div
                            className={`absolute left-0 top-10 w-130 bg-white shadow-xl rounded-xl p-2 transition-all duration-200 ${openMega === "services"
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible translate-y-3"
                                }`}
                        >
                            <div className="grid grid-cols-2 gap-2">

                                {services.map(({ name, icon: Icon }, index) => (
                                    <Link
                                        key={index}
                                        to="/services"
                                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 transition group"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Icon size={18} />
                                        </div>

                                        <div className="flex justify-between w-full items-center">
                                            <span className="text-sm font-medium">{name}</span>

                                            <ChevronRight
                                                size={16}
                                                className="opacity-0 group-hover:opacity-100 transition"
                                            />
                                        </div>
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Solutions Dropdown */}

                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMega("solutions")}
                        onMouseLeave={() => setOpenMega(null)}
                    >

                        <button className="flex items-center gap-1 font-medium hover:text-[#4093A8]">
                            Solutions <ChevronDown size={16} />
                        </button>

                        <div
                            className={`absolute left-0 top-10 w-105 bg-white shadow-xl rounded-2xl p-2 transition-all duration-200 ${openMega === "solutions"
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible translate-y-3"
                                }`}
                        >

                            <div className="grid grid-cols-2 gap-4">

                                {solutions.map(({ name, icon: Icon }, index) => (

                                    <Link
                                        key={index}
                                        to="/solutions"
                                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 transition group"
                                    >

                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Icon size={18} />
                                        </div>

                                        <div className="flex justify-between w-full items-center">

                                            <span className="text-sm font-medium">
                                                {name}
                                            </span>

                                            <ChevronRight
                                                size={16}
                                                className="opacity-0 group-hover:opacity-100 transition"
                                            />

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                    <div>
                        <Link to="/pricing" className="hover:text-[#4093A8]">
                            <span>Pricing</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/partners" className="hover:text-[#4093A8]">
                            <span>Partners</span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/resources" className="hover:text-[#4093A8]">
                            <span>Resources</span>
                        </Link>
                    </div>

                    {/* ------------------Support------------------- */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMega("supports")}
                        onMouseLeave={() => setOpenMega(null)}
                    >
                        <button className="flex items-center gap-1 font-medium hover:text-[#4093A8]">
                            Support <ChevronDown size={16} />
                        </button>

                        <div
                            className={`absolute left-0 top-10 w-65 bg-white shadow-xl rounded-xl p-2 transition-all duration-200 ${openMega === "supports"
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible translate-y-3"
                                }`}
                        >

                            <div className="flex flex-col gap-2">

                                {supports.map(({ name, icon: Icon }, index) => (

                                    <Link
                                        key={index}
                                        to={name === "About Us" ? "/about" : "/contact"}
                                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 transition group"
                                    >

                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Icon size={18} />
                                        </div>

                                        <div className="flex justify-between w-full items-center">

                                            <span className="text-sm font-medium">
                                                {name}
                                            </span>

                                            <ChevronRight
                                                size={16}
                                                className="opacity-0 group-hover:opacity-100 transition"
                                            />

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* Desktop Buttons */}

                <div className='hidden md:flex items-center gap-2'>
                    <Link to="/trial" className="px-8 py-2 rounded-full border font-normal text-primary hover:text-white text-center hover:bg-[#9AC64E] active:bg-[#215070] transition cursor-pointer" >
                        Try Free
                    </Link>

                    <Link to="/login" className="px-8 py-2 rounded-full bg-primary font-normal text-white text-center active:bg-[#215070] hover:opacity-95 transition cursor-pointer" >
                        <span className='flex gap-1'>Login <MoveRight /> </span>
                    </Link>
                </div>

            </div>

            {/*---------------- Mobile Menu------------------- */}

            <div className={`md:hidden fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex flex-col p-6 pt-20 text-gray-700 font-medium">

                    {/* <Link onClick={() => setIsMenuOpen(false)} to="/services" className='border-b border-t border-gray-200 pb-3 pt-3'>Services</Link> */}
                    {/* mobile services dropdown */}
                    <div className="border-b border-gray-200">

                        <button
                            onClick={() =>
                                setMobileDropdown(mobileDropdown === "services" ? null : "services")
                            }
                            className="flex justify-between items-center w-full py-3"
                        >
                            Services
                            <ChevronDown size={18} />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "services" ? "max-h-96" : "max-h-0"
                                }`}
                        >
                            <div className="flex flex-col pb-2">

                                {services.map(({ name, icon: Icon }, index) => (
                                    <Link
                                        key={index}
                                        to="/services"
                                        className="flex items-center gap-3 pl-4 py-2 text-sm text-gray-600 hover:text-[#4093A8]  border-t border-gray-200"
                                    >
                                        <Icon size={16} />
                                        {name}
                                    </Link>
                                ))}

                            </div>
                        </div>

                    </div>

                    {/* mobile solutions dropdown */}
                    <div className="border-b border-gray-200">

                        <button
                            onClick={() => setMobileDropdown(mobileDropdown === "solutions" ? null : "solutions")}
                            className="flex justify-between items-center w-full py-3"
                        >
                            Solutions
                            <ChevronDown size={18} />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "solutions" ? "max-h-96" : "max-h-0"}`}
                        >
                            <div className="flex flex-col pb-2">

                                {solutions.map(({ name, icon: Icon }, index) => (
                                    <Link
                                        key={index}
                                        to="/solutions"
                                        className="flex items-center gap-3 pl-4 py-2 text-sm text-gray-600 hover:text-[#4093A8]  border-t border-gray-200"
                                    >
                                        <Icon size={16} />
                                        {name}
                                    </Link>
                                ))}

                            </div>
                        </div>

                    </div>

                    {/* <Link onClick={() => setIsMenuOpen(false)} to="/solutions" className='border-b border-gray-200 pb-3 pt-3'>Solutions</Link> */}
                    <Link onClick={() => setIsMenuOpen(false)} to="/pricing" className='border-b border-gray-200 pb-3 pt-3'>Pricing</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/partners" className='border-b border-gray-200 pb-3 pt-3'>Partners</Link>
                    <Link onClick={() => setIsMenuOpen(false)} to="/resources" className='border-b border-gray-200 pb-3 pt-3'>Resources</Link>

                    {/* mobile support dropdown */}
                    <div className="border-b border-gray-200">

                        <button
                            onClick={() => setMobileDropdown(mobileDropdown === "supports" ? null : "supports")}
                            className="flex justify-between items-center w-full py-3"
                        >
                            Supports
                            <ChevronDown size={18} />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "supports" ? "max-h-96" : "max-h-0"}`}
                        >
                            <div className="flex flex-col pb-2">

                                {supports.map(({ name, icon: Icon }, index) => (
                                    <Link
                                        key={index}
                                        to={name === "About Us" ? "/about" : "/contact"}
                                        className="flex items-center gap-3 pl-4 py-2 text-sm text-gray-600 hover:text-[#4093A8]  border-t border-gray-200"
                                    >
                                        <Icon size={16} />
                                        {name}
                                    </Link>
                                ))}

                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col gap-3 pt-4">

                        <Link
                            to="/trial"
                            className="px-6 py-2 text-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
                        >
                            Try Free
                        </Link>

                        <Link
                            to="/login"
                            className="px-6 py-2 text-center rounded-full bg-primary text-white active:bg-[#215070] hover:opacity-90 transition"
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
