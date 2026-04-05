import React from 'react';

const listItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
]

function Navbar() {
    return (
        
        <div className='fixed bg-black flex justify-between  items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-50'>
            <ul className='flex gap-10 text-lg'>
                {listItems.map((item) => (
                    <li className='relative group cursor-pointer' key={item.href}>
                        <a href={item.href} className='relative inline-block'>
                            {item.label}
                            <span className='absolute left-0 bottom-[-5px] h-0.5 w-full origin-left scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100'></span>
                        </a>
                    </li>
                ))}
            </ul>
            <a href='#contact' className='bg-gradient-to-r from-blue-500 to-green-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:from-blue-600 hover:to-green-600 hover:shadow-green-500 shadow-blue-500'>Contact</a>
        </div>
    );
}
export default Navbar;