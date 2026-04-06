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
            <div className="flex-col justify-center bg-black ">

                <div className="flex flex-col md:flex-row bg-black items-center justify-center py-20">
                    <motion.div className="min-h-screen w-full relative bg-black flex items-center flex-col text-white px-30 py-32 gap-10">
                        <div className="w-full md:1/3 group relative" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <div className="absolute inset-0 border border-(--border-color) rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                            <img className="grayscale group-hover:grayscale-0 transition duration-300 " src={mypic} alt="My Pic" />
                        </div>

                    </motion.div>
                    <div className="md:2/3 bg-black flex flex-col items-start justify-start p-10 gap-10 text-left">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.25 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <h1 className="text-7xl font-serif font-bold text-white">I create applications with lasting impact.</h1>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <p className="text-2xl font-light text-gray-500">Creating platforms that combine technical ability and artistic vision.</p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.75 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                            <div className="flex items-center gap-4 pt-4">
                                <span className="h-px w-12 bg-gray-500"></span>
                                <span className="text-gray-500 uppercase">KEITH ERWIN MIKHAIL PATIÑO</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full mb-10">
                    <div className="pt-8 pb-20 border-t border-gray-500"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pt-8 ">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={html5} alt="HTML5" />
                                <h1 className="text-2xl font-bold text-white">HTML5</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={css} alt="CSS" />
                                <h1 className="text-2xl font-bold text-white">CSS</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={react} alt="React" />
                                <h1 className="text-2xl font-bold text-white">React</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={mongodb} alt="MongoDB" />
                                <h1 className="text-2xl font-bold text-white">MongoDB</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={nodejs} alt="Node.js" />
                                <h1 className="text-2xl font-bold text-white">Node.js</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={tailwind} alt="Tailwind CSS" />
                                <h1 className="text-2xl font-bold text-white">Tailwindcss</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 1.2 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={expressjs} alt="Express.js" />
                                <h1 className="text-2xl font-bold text-white">Express.js</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 1.4 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="w-32 h-32" src={figma} alt="Figma" />
                                <h1 className="text-2xl font-bold text-white">Figma</h1>
                            </div>
                        </SpotlightCard>
                        </motion.div>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default About;