import React from 'react'
import {
    School,
    UtensilsCrossed,
    Store,
    Dumbbell,
    Scissors
} from "lucide-react";

const businesses = [
    {
        name: "Schools",
        icon: School,
    },
    {
        name: "Restaurants",
        icon: UtensilsCrossed,
    },
    {
        name: "Retail Stores",
        icon: Store,
    },
    {
        name: "Gyms",
        icon: Dumbbell,
    },
    {
        name: "Salons",
        icon: Scissors,
    },
];


const Trust = () => {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Trusted by <span className="text-primary">100+ Growing Businesses</span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Businesses rely on Earthix CRM to manage operations,
                    streamline workflows, and strengthen customer relationships.
                </p>

                {/* Business Types */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                    {businesses.map(({ name, icon: Icon }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Icon size={28} />
                            </div>

                            <span className="text-sm font-medium text-gray-700">
                                {name}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Trust
