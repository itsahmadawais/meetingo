import React from 'react'

export default function CTA() {
    return (
        <div className='bg-[#E9F6F7] px-20 py-40 relative overflow-hidden'>
            {/* Gradient Circles */}
            <div className="absolute inset-0 flex justify-between items-center">
                <div className="relative">
                    {/* Left Circles */}
                    <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full absolute top-10 left-[-20%] animate-pulse"></div>
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full absolute top-40 left-[-10%] animate-bounce"></div>

                    <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-full absolute bottom-40 left-[10%] animate-pulse"></div>

                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full absolute bottom-40 left-[10%] animate-bounce"></div>
                </div>
                <div className="relative">
                    {/* Right Circles */}
                    <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full absolute bottom-20 right-[-25%] animate-pulse"></div>

                    <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full absolute bottom-10 right-[-40%] animate-bounce"></div>

                    <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-full absolute top-40 right-[-15%] animate-spin"></div>
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full absolute top-40 right-[-5%] animate-bounce duration-1000"></div>
                </div>
            </div>
            <div className='max-w-[40%] mx-auto flex flex-col items-center text-center gap-2 z-10'>
                <h2 className='font-bold text-4xl text-slate-700'>Join Thousands of Users—For Free!</h2>
                <p className='text-2xl text-slate-500'>Experience the freedom of hassle-free scheduling without paying a dime. Meetingo is here to make your life easier.</p>
            </div>
        </div>
    )
}
