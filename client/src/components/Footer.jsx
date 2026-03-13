import React from 'react'
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "../assets/earthix_svg.svg";
// import NewsLetter from './NewsLetter';


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-50">

                {/* Newsletter Section */}
                <div className="border-t border-gray-200 ">

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                                Subscribe to our newsletter
                            </h4>

                            <p className="text-sm text-gray-600">
                                Get product updates and CRM insights.
                            </p>
                        </div>

                        <div className="flex w-full md:w-auto">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full md:w-72 border rounded-l-lg outline-none"
                            />

                            <button className="bg-primary text-white px-5 rounded-r-lg hover:opacity-95 transition">
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>
                {/* <NewsLetter/> */}

                {/* Main Footer */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                        {/* Brand */}
                        <div className="lg:col-span-2">

                            <img src={logo} alt="Earthix" className="h-18 w-auto" />

                            <p className="mt-4 text-gray-600 max-w-sm">
                                Earthix CRM helps businesses manage customers, automate workflows,
                                and grow faster with powerful tools built for modern teams.
                            </p>

                            {/* Social */}
                            <div className="flex items-center gap-4 mt-6">

                                <a href="https://www.instagram.com/earthix.in/" className=" p-2 rounded-md text-primary shadow-sm hover:bg-gray-100 transition cursor-pointer">
                                    <Instagram size={18} />
                                </a>

                                <a className="p-2 rounded-lg text-primary shadow-sm hover:bg-gray-100 transition cursor-pointer">
                                    <Facebook size={18} />
                                </a>

                                <a className="p-2 rounded-lg text-primary shadow-sm hover:bg-gray-100 transition cursor-pointer">
                                    <Twitter size={18} />
                                </a>

                                <a className="p-2 rounded-lg text-primary shadow-sm hover:bg-gray-100 transition cursor-pointer">
                                    <Linkedin size={18} />
                                </a>

                            </div>

                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold text-gray-900">Product</h4>

                            <ul className="mt-4 space-y-3 text-gray-600 text-sm">

                                <li><Link to="/features">Features</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/integrations">Integrations</Link></li>
                                <li><Link to="/updates">Product Updates</Link></li>

                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold text-gray-900">Company</h4>

                            <ul className="mt-4 space-y-3 text-gray-600 text-sm">

                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/partners">Partners</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="font-semibold text-gray-900">Resources</h4>

                            <ul className="mt-4 space-y-3 text-gray-600 text-sm">

                                <li><Link to="/blog"></Link></li>
                                <li><Link to="/guides"></Link></li>
                                <li><Link to="/support">Help Center</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>

                            </ul>
                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 bg-gray-50">

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">

                        <p>© {new Date().getFullYear()} Earthix. All rights reserved.</p>

                        <div className="flex gap-6 mt-4 md:mt-0">

                            <Link to="/terms">Terms</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/cookies">Cookies</Link>

                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer
