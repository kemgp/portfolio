import {motion} from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import html5 from '../assets/html5.svg';
import css from '../assets/css.svg';
import react from '../assets/react.svg';  
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import tailwind from '../assets/tailwind.svg';
import expressjs from '../assets/expressjs.svg';
import figma from '../assets/figma.svg';

const demoItems = [
    { link: '#', text: 'BAYANIHAN', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'STUDYUS', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
function Projects() {
    return (
        <motion.div className="py-24 md:py-32 relative bg-black z-10 overflow-hidden border-t border-gray-500" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <h1 className="text-8xl font-serif font-bold text-white">Selected Works</h1>
                </div>
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.25 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <a href="https://www.figma.com/proto/Xnr65ApMDNPB2fpE9sizBJ/BAYANIHAN?node-id=104-262&p=f&t=FxDzAhlg2ghwExwI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=104%3A262" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-64 flex justify-start items-center px-24 py-32 hover:bg-black transition duration-300 group border-b border-gray-500">
                            <div className="flex flex-col items-start justify-start gap-4">
                                <h1 className="text-6xl font-bold text-white group-hover:text-gray-500 font-serif">Bayanihan</h1>
                                <span className="text-2xl font-light text-gray-500 group-hover:text-gray-600"> A community driven service-on-demand app</span>
                            </div>
                        </div>
                    </a>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <a href="https://www.figma.com/proto/erRLniSnBK1B5VhmrPif7o/StudyUS?node-id=0-1&p=f&t=FY53s4cEFEWPTT7G-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-64 flex justify-start items-center px-24 py-32 hover:bg-black transition duration-300 group border-b border-gray-500">
                            <div className="flex flex-col items-start justify-start gap-4">
                                <h1 className="text-6xl font-bold text-white group-hover:text-gray-500 font-serif">StudyUS</h1>
                                <span className="text-2xl font-light text-gray-500 group-hover:text-gray-600">Study buddy app connecting like-minded individuals</span>
                            </div>
                        </div>
                    </a>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1, delay: 0.75 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                    <a href="https://awesometodosapp-xorj.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-64 flex justify-start items-center px-24 py-32 hover:bg-black transition duration-300 group border-b border-gray-500">
                            <div className="flex flex-col items-start justify-start gap-4">
                                <h1 className="text-6xl font-bold text-white group-hover:text-gray-500 font-serif">Awesome To Dos</h1>
                                <span className="text-2xl font-light text-gray-500 group-hover:text-gray-600"> A task management app to organize your daily activities</span>
                            </div>
                        </div>
                    </a>
                    </motion.div>
                </div>
                <div className="w-full mb-10">
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
        </motion.div>
    );
}

export default Projects;