import React from 'react'

const Login = () => {
    return (
        <div>


            <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${Visible ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='flex flex-col text-[#2F2F2F] text-sm'>
                    <div onClick={() => setVisible(false)} className='flex items-center p-4'>
                        <ChevronRight className='cursor-pointer align-middle w-5 h-5 rotate-180' />
                        <p>Back</p>
                    </div>
                    <Link onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200' to='/'>HOME</Link>
                    <Link onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200' to='/women'>WOMEN</Link>
                    <Link onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200' to='/collection'>COLLECTION</Link>
                    <Link onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200' to='/cart'>CART</Link>
                    <Link onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-200' to='/men'>MEN</Link>

                    <div className="border-b border-gray-200">

                        {/* PROFILE HEADER */}
                        <button
                            onClick={() => setProfileOpen(prev => !prev)}
                            className="w-full flex items-center justify-between px-6 py-3 font-medium"
                        >
                            <span>PROFILE</span>
                            <span
                                className={`transform transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                <ChevronDown />
                            </span>
                        </button>

                        {/* PROFILE DROPDOWN */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${profileOpen ? 'max-h-40' : 'max-h-0'
                                }`}
                        >
                            <Link
                                to="/orders"
                                onClick={() => setVisible(false)}
                                className="block px-8 py-3 border border-gray-200 text-sm"
                            >
                                Orders
                            </Link>

                            <button
                                onClick={() => {
                                    setVisible(false);
                                    logout();
                                }}
                                className="w-full text-left px-8 py-3 text-sm"
                            >
                                Logout
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
