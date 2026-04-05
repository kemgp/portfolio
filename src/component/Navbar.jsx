import React from 'react';

const listItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
]

function Navbar() {
    return (
        
        <div className='fixed bg-black flex justify-between  items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-50'>
            <ul className='flex gap-10 text-lg'>
                {listItems.map((item) => (
                    <li className='relative group cursor-pointer' key={item.href}>
                        <a href={item.href} className='relative inline-block'>
                            {item.label}
                            <span className='duration-300 ease-in-out group-hover:text-gray-500'></span>
                        </a>
                    </li>
                ))}
            </ul>
            <a href='#contact' className="bg-white text-black rounded-full px-12 py-4 text-xl font-light hover:ring-black hover:ring-2 items-center hover:bg-gray-500 hover:scale-105">Contact</a>
                                
        </div>
    );
}
export default Navbar;