
import ShapeGrid from './ShapeGrid'
import locationpin from '../assets/locationpin.svg'
import rightarrow from '../assets/rightarrow.svg'
import git from '../assets/git.svg';
import linkedin from '../assets/linkedin.svg';
import downarrow from '../assets/downarrow.svg';
import { motion as Motion } from 'motion/react';
import useReducedMotion from '../hooks/useReducedMotion';

function Hero() {
    const reducedMotion = useReducedMotion();
    return (
        <div className="">
            <div className="relative w-full min-h-screen bg-black overflow-hidden mx-auto pt-28 pb-10 px-4 sm:px-6 lg:px-10">

                <div className="absolute inset-0 z-0 opacity-55">
                    <ShapeGrid
                        speed={0.1}
                        squareSize={75}
                        direction='up' // up, down, left, right, diagonal
                        borderColor='rgba(255, 255, 255, 0.35)'
                        hoverFillColor='#222'
                        shape='square' // square, hexagon, circle, triangle
                        hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
                        hoverColor="#222222"
                        size={40}
                    />
                </div>

                <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center gap-8 text-center text-white">
                    <Motion.div className="flex flex-col items-center justify-center gap-0" initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <h1 id="home-heading" className="font-serif mt-8 text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">Keith Erwin Mikhail <span className="mt-4 block text-gray-400 italic">Patiño</span></h1>
                    </Motion.div>
                    <Motion.div className="max-w-3xl" initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.5 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <p className="px-2 text-xl text-center text-white font-light sm:px-0 sm:text-2xl md:text-3xl">Let's turn your <span className="text-gray-400">complex ideas </span>into fluid<span className="text-gray-400"> reality.</span></p>
                        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
                            <img className="w-6 h-6" src={locationpin} alt="" />
                            <p className="text-sm text-center text-gray-400 sm:text-base md:text-xl">Web Developer. Iloilo City, Philippines</p>
                        </div>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="#contact" className="mt-8 w-full rounded-full bg-white px-8 py-3 text-base font-bold text-black transition duration-500 text-center items-center hover:scale-102 hover:ring-2 hover:ring-black hover:cursor-pointer sm:w-auto sm:px-12 sm:py-4 sm:text-xl">
                                <div className="flex items-center justify-center gap-2">
                                    Let's Work Together!<img className="w-6 h-6 ml-2" src={rightarrow} alt="" />
                                </div>
                            </a>
                            <a href="#projects" className="mt-8 w-full rounded-full bg-gray-500 px-8 py-3 text-base font-bold text-white transition duration-500 text-center items-center hover:scale-102 hover:ring-2 hover:ring-black hover:cursor-pointer sm:w-auto sm:px-12 sm:py-4 sm:text-xl">View My Work
                            </a>

                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <a href="https://www.github.com/kemgp" target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent text-gray-700 rounded-full hover:scale-102 hover:ring-black hover:ring-2 transition duration-500 hover:cursor-pointer" aria-label="GitHub" >
                                <img className="size-6" fill="currentColor" viewBox="0 0 24 24" src={git} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/kemgp" target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent text-gray-700 rounded-full hover:scale-102 hover:ring-black hover:ring-2 transition duration-500 hover:cursor-pointer" aria-label="LinkedIn" >
                                <img className="size-6" fill="currentColor" viewBox="0 0 24 24" src={linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                    </Motion.div>
                </div>
                <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.5 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                <div className="bg-linear-to-b from-transparent to-black w-full h-32 sm:h-40 lg:h-50 items-bottom absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 text-white gap-1 flex flex-col justify-end items-center pb-4 sm:pb-6">
                    <a href="#about" aria-label="Read about Keith" className="bg-white text-black p-3 sm:p-4 rounded-full shadow-lg animate-bounce hover:cursor-pointer">
                        <img className="w-5 h-5 sm:w-6 sm:h-6" src={downarrow} alt="" />
                        
                    </a>
                </div>
                </Motion.div>
            </div>


        </div>
    );
}

export default Hero;
