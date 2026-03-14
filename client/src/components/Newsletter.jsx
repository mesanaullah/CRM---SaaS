import React from 'react'

const NewsLetter = () => {
    return (

        <div>
            {/* Newsletter Section */}
            <div className="border-t border-gray-200 ">

                <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">

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
        </div>
    )
}

export default NewsLetter
