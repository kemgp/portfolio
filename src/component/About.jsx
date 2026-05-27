import mypic from '../assets/mypic.jpg';
import SpotlightCard from './SpotlightCard'
import css from '../assets/css.svg';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import expressjs from '../assets/expressjs.svg';
import figma from '../assets/figma.svg';
import html5 from '../assets/html5.svg';
import {motion} from 'framer-motion';
function About() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="flex-col justify-center bg-black">

                <div className="flex flex-col md:flex-row bg-black items-center justify-center py-20 gap-12 md:gap-16">
                    <motion.div className="w-full md:w-1/3 relative bg-black flex items-center justify-center flex-col text-white px-4 sm:px-10 py-10 md:py-32 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <div className="group relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
                            <div className="absolute inset-0 border border-(--border-color) rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <img className="relative z-10 w-full h-auto grayscale group-hover:grayscale-0 transition duration-300" src={mypic} alt="My Pic" />
                        </div>

                    </motion.div>
                    <div className="w-full md:w-2/3 bg-black flex flex-col items-start justify-start p-6 sm:p-10 gap-10 text-left">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.25 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white">I create applications with lasting impact.</h1>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-500">Creating platforms that combine technical ability and artistic vision.</p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.75 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <div className="flex items-center gap-4 pt-4">
                                <span className="h-px w-12 bg-gray-500"></span>
                                <span className="text-gray-500 uppercase">KEITH ERWIN MIKHAIL PATIÑO</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default About;