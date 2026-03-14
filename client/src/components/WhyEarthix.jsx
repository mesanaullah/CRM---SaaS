// import React from 'react'
// import {
//     Zap,
//     ShieldCheck,
//     BarChart3,
//     Users,
//     Layers,
//     Rocket
// } from "lucide-react";

// const features = [
//     {
//         title: "All-in-One Business Platform",
//         description:
//             "Manage customers, billing, inventory, staff, and reports from a single dashboard. No multiple tools required.",
//         icon: Layers,
//     },
//     {
//         title: "Smart Automation",
//         description:
//             "Automate reminders, follow-ups, invoices, and daily tasks so your team can focus on growing the business.",
//         icon: Zap,
//     },
//     {
//         title: "Data-Driven Insights",
//         description:
//             "Track revenue, customer behavior, and performance with powerful analytics and real-time reports.",
//         icon: BarChart3,
//     },
//     {
//         title: "Built for Multiple Businesses",
//         description:
//             "Perfect for restaurants, schools, gyms, salons, stores, and many other industries.",
//         icon: Users,
//     },
//     {
//         title: "Secure & Reliable",
//         description:
//             "Enterprise-grade security and reliable cloud infrastructure keep your business data protected.",
//         icon: ShieldCheck,
//     },
//     {
//         title: "Fast & Easy Setup ",
//         description:
//             "Create your account, configure your business, and start using Earthix CRM within minutes.",
//         icon: Rocket,
//     },
// ];


// const WhyEarthix = () => {
//     return (
//         <section className="py-24 bg-white">

//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Header */}
//                 <div className="text-center max-w-3xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                         Why Businesses Choose <span className="text-primary">Earthix CRM</span>
//                     </h2>

//                     <p className="mt-4 text-gray-600">
//                         Earthix CRM helps businesses manage customers, sales, and operations
//                         in one simple platform designed for growing companies.
//                     </p>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//                     {features.map(({ title, description, icon: Icon }, index) => (

//                         <div
//                             key={index}
//                             className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
//                         >

//                             <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
//                                 <Icon size={26} />
//                             </div>

//                             <h3 className="mt-5 text-lg font-semibold text-gray-900">
//                                 {title}
//                             </h3>

//                             <p className="mt-2 text-sm text-gray-600">
//                                 {description}
//                             </p>

//                         </div>

//                     ))}

//                 </div>

//             </div>

//         </section>
//     )
// }

// export default WhyEarthix

import {
    Layers,
    Zap,
    BarChart3,
    Building2,
    ShieldCheck,
    Rocket
} from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "All-in-One Business Platform",
        desc: "Manage customers, sales, billing, staff, and analytics from one powerful dashboard without switching tools."
    },
    {
        icon: Zap,
        title: "Smart Automation",
        desc: "Automate reminders, follow-ups, and daily workflows to save time and boost your team’s productivity."
    },
    {
        icon: BarChart3,
        title: "Data-Driven Insights",
        desc: "Understand your business with real-time reports, customer analytics, and performance dashboards."
    },
    {
        icon: Building2,
        title: "Built for Multiple Businesses",
        desc: "Perfect for restaurants, schools, gyms, salons, retail stores, and many other industries."
    },
    {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        desc: "Enterprise-grade security and cloud infrastructure ensure your business data stays safe and protected."
    },
    {
        icon: Rocket,
        title: "Fast & Easy Setup",
        desc: "Create your account, configure your business, and start using Earthix CRM within minutes."
    }
];

export default function WhyEarthix() {
    return (
        <section className="relative py-24 bg-linear-to-b from-white to-gray-50">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Businesses Choose{" "}
                        <span className="text-primary">Earthix CRM</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Earthix CRM simplifies operations, strengthens customer relationships,
                        and helps businesses grow faster with powerful tools designed for
                        modern teams.
                    </p>

                </div>

                {/* Feature Grid */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Icon */}

                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-primary mb-6 group-hover:bg-teal-100 transition">
                                    <Icon size={24} />
                                </div>

                                {/* Title */}

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>

                                {/* subtle hover glow */}

                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-tr from-teal-50 to-transparent"></div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}