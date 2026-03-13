import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <section className="w-full bg-white">

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>

                        <span className="text-sm font-medium text-primary bg-[#F0F7F6] px-4 py-1 rounded-full">
                            All-in-one Business CRM
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Manage Your Business
                            <span className="text-primary"> Smarter </span>
                            with Earthix CRM
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            Simplify customer management, automate workflows, and grow
                            your business with a powerful CRM built for modern companies.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/trial"
                                className="px-7 py-3 rounded-full bg-primary text-white font-medium text-center hover:opacity-90 transition"
                            >
                                Start Free Trial
                            </Link>

                            <Link
                                to="/demo"
                                className="px-7 py-3 rounded-full border border-primary text-primary font-medium text-center hover:bg-[#9AC64E] hover:text-white transition"
                            >
                                Book Demo
                            </Link>

                        </div>

                        {/* Small Trust Text */}
                        {/* <p className="mt-4 text-sm text-gray-500">
                            No credit card required • Setup in minutes
                        </p> */}

                    </div>


                    {/* Right Illustration / Image */}
                    <div className="relative">

                        <div className="bg-linear-to-tr from-[#E8F4F3] to-[#F6FAFA] rounded-2xl p-6 shadow-sm">

                            <img
                                src="/crm-dashboard.png"
                                alt="CRM Dashboard"
                                className="w-full rounded-xl"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero
