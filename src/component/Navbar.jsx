import React, { useState } from 'react';

const listItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <div className='sticky top-[20px] z-50 mx-auto w-[calc(100%-1rem)] max-w-4xl rounded-full bg-black bg-opacity-60 py-3 px-4 text-white shadow-lg backdrop-blur-md sm:w-[calc(100%-2rem)] sm:px-6 md:px-10 relative'>
            <div className='flex items-center justify-between gap-4'>
            <ul className='hidden items-center gap-4 text-sm sm:gap-8 sm:text-base lg:flex lg:gap-10 lg:text-lg md:flex'>
                {listItems.map((item) => (
                    <li className='relative group cursor-pointer' key={item.href}>
                        <a href={item.href} className='relative inline-block'>
                            {item.label}
                            <span className='duration-300 ease-in-out group-hover:text-gray-500'></span>
                        </a>
                    </li>
                ))}
            </ul>
            <a href='#contact' className="hidden bg-white text-black rounded-full px-4 py-2 text-sm font-bold hover:ring-black hover:ring-2 items-center transition duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base md:inline-flex lg:px-12 lg:py-4 lg:text-xl">Contact</a>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:hidden"
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
            >
                <span className="sr-only">Toggle navigation menu</span>
                <div className="flex h-4 w-5 flex-col justify-between">
                    <span className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                    <span className={`block h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                </div>
            </button>
            </div>

            <div
                className={`mt-4 origin-top overflow-hidden rounded-3xl bg-black/90 shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
                    menuOpen
                        ? 'max-h-80 translate-y-0 opacity-100 p-4'
                        : 'max-h-0 -translate-y-2 opacity-0 p-0 pointer-events-none'
                }`}
                aria-hidden={!menuOpen}
            >
                <ul className="flex flex-col gap-4 text-base">
                    {listItems.map((item) => (
                        <li key={item.href} className="cursor-pointer">
                            <a
                                href={item.href}
                                className="block rounded-2xl px-3 py-2 transition hover:bg-white/10"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href="#contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold text-black transition hover:scale-105 hover:ring-2 hover:ring-black"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </a>
            </div>
        </div>
    );
}
export default Navbar;