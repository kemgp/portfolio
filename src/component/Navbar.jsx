import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';

const listItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
];
const sectionIds = ['home', 'about', 'projects', 'contact'];
const focusStyle = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        let frame;
        const updateSection = () => {
            const marker = (navRef.current?.getBoundingClientRect().bottom ?? 100) + 48;
            let current = 'home';
            for (const id of sectionIds) {
                if (document.getElementById(id)?.getBoundingClientRect().top <= marker) {
                    current = id;
                }
            }
            setActiveSection(current);
        };
        const scheduleUpdate = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateSection);
        };
        updateSection();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                toggleRef.current?.focus();
            }
        };
        const closeOutside = (event) => {
            if (!navRef.current?.contains(event.target)) setMenuOpen(false);
        };
        const desktop = window.matchMedia('(min-width: 768px)');
        const closeOnDesktop = () => {
            if (desktop.matches) setMenuOpen(false);
        };
        document.addEventListener('keydown', closeOnEscape);
        document.addEventListener('pointerdown', closeOutside);
        desktop.addEventListener('change', closeOnDesktop);
        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.removeEventListener('pointerdown', closeOutside);
            desktop.removeEventListener('change', closeOnDesktop);
        };
    }, [menuOpen]);

    const linkStyle = (href) => `${focusStyle} block rounded-full px-4 py-3 text-sm font-medium transition-colors motion-reduce:transition-none ${activeSection === href.slice(1) ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`;
    const contactStyle = `${focusStyle} items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 motion-reduce:transition-none`;

    return (
        <nav
            ref={navRef}
            aria-label="Main navigation"
            className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-full border border-white/10 bg-black/80 p-2 text-white shadow-lg backdrop-blur-md sm:top-5 sm:w-[calc(100%-3rem)] sm:px-4"
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
            }}
        >
            <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr]">
                <a href="#home" aria-label="Keith Patiño — Home" onClick={() => setMenuOpen(false)} className={`${focusStyle} flex min-h-11 w-fit items-center gap-2 rounded-full pr-3`}>
                    <img src={logo} alt="" width="44" height="44" className="h-11 w-11 rounded-full" />
                    <span className="text-sm font-semibold tracking-wide">Keith Patiño</span>
                </a>
                <ul className="hidden items-center gap-1 md:flex">
                    {listItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} className={linkStyle(item.href)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined} className={`${contactStyle} hidden justify-self-end md:inline-flex ${activeSection === 'contact' ? 'ring-2 ring-white/40 ring-offset-2 ring-offset-black' : ''}`}>Contact <span className="ml-2" aria-hidden="true">↗</span></a>
                <button
                    ref={toggleRef}
                    type="button"
                    className={`${focusStyle} inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 md:hidden`}
                    onClick={() => setMenuOpen((current) => !current)}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                        <path d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
                    </svg>
                </button>
            </div>
            <div id="mobile-navigation" hidden={!menuOpen} className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-white/10 bg-neutral-950/95 p-3 shadow-xl backdrop-blur-md md:hidden">
                <ul className="space-y-1">
                    {listItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} className={linkStyle(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined} className={`${contactStyle} mt-3 flex w-full`} onClick={() => setMenuOpen(false)}>Contact <span className="ml-2" aria-hidden="true">↗</span></a>
            </div>
        </nav>
    );
}

export default Navbar;
