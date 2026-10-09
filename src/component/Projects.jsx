import { motion as Motion } from 'motion/react';
import useReducedMotion from '../hooks/useReducedMotion';
import SpotlightCard from './SpotlightCard';
import OtherProjects from './OtherProjects';
import html5 from '../assets/html5.svg';
import css from '../assets/css.svg';
import react from '../assets/react.svg';  
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import tailwind from '../assets/tailwind.svg';
import expressjs from '../assets/expressjs.svg';
import figma from '../assets/figma.svg';
import php from '../assets/php.svg';
import supabase from '../assets/supabase.svg';

import bayanihanPreview from '../assets/bayanihanhero.png';
import studyusLogo from '../assets/studyus.png';
import tidetracePreview from '../assets/tidetrace.png';
import awesomeTodosPreview from '../assets/awesometodos.png';
import digikonekPreview from '../assets/digikonek.png';

const projects = [
    {
        name: 'TideTrace',
        category: 'Project management & backend development',
        description: 'A community-powered coastal conservation platform. I managed the project and contributed to backend development and deployment.',
        scope: 'Project planning, work assignment, delivery coordination, backend development, and deployment.',
        stack: 'SERN',
        technologies: ['Supabase', 'Express.js', 'React', 'Node.js'],
        outcome: 'A deployed team project, with my contributions spanning planning through delivery.',
        image: tidetracePreview,
        imageAlt: 'TideTrace hero section introducing community-powered coastal conservation',
        imageClass: 'w-full h-auto',
        imageWidth: 2912,
        imageHeight: 1414,
        caption: 'My role: Project Manager & Backend Developer',
        href: 'https://tide-trace.vercel.app/',
        sourceUrl: 'https://github.com/kemgp/TideTrace',
        linkLabel: 'Visit Website',
    },
    {
        name: 'Digi-Konek',
        category: 'Development prototype',
        description: 'A B2B electronics marketplace connecting retailers with suppliers, with supplier verification, wholesale ordering, inventory reservations, and role-based dashboards.',
        scope: 'Project Manager & Backend Developer on the TechILO team.',
        technologies: ['PHP', 'MySQL / MariaDB', 'HTML', 'CSS', 'JavaScript'],
        outcome: 'A working development prototype with automated service and HTTP tests. Production preparation is ongoing.',
        image: digikonekPreview,
        imageAlt: 'Digi-Konek wholesale electronics marketplace sign-in page with supplier and retailer introduction',
        imageClass: 'w-full h-auto',
        imageWidth: 2912,
        imageHeight: 1508,
        caption: 'My role: Project Manager & Backend Developer',
        href: 'https://github.com/kemgp/digi-konek',
        linkLabel: 'Source Code',
    },
    {
        name: 'Bayanihan',
        category: 'Figma prototype',
        description: 'A community-driven service-on-demand concept connecting people with home services.',
        scope: 'Interface design and prototyping in Figma',
        outcome: 'A Figma prototype exploring the service-on-demand experience.',
        image: bayanihanPreview,
        imageWidth: 1920,
        imageHeight: 1080,
        imageAlt: 'Bayanihan landing page design with home services introduction',
        imageClass: 'w-full h-auto',
        caption: 'Landing page preview',
        href: 'https://www.figma.com/proto/Xnr65ApMDNPB2fpE9sizBJ/BAYANIHAN?node-id=104-262&p=f&t=FxDzAhlg2ghwExwI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=104%3A262',
        linkLabel: 'View Prototype',
    },
    {
        name: 'StudyUS',
        category: 'Figma prototype',
        description: 'A study buddy concept for connecting like-minded people who want to learn together.',
        scope: 'Interface design and prototyping in Figma',
        outcome: 'A Figma prototype exploring a study buddy app concept.',
        image: studyusLogo,
        imageWidth: 2000,
        imageHeight: 2000,
        imageAlt: 'StudyUS purple project logo',
        imageClass: 'mx-auto aspect-video w-full object-contain p-6 sm:p-10',
        caption: 'Project identity',
        href: 'https://www.figma.com/proto/erRLniSnBK1B5VhmrPif7o/StudyUS?node-id=0-1&p=f&t=FY53s4cEFEWPTT7G-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        linkLabel: 'View Prototype',
    },
    {
        name: 'Awesome To Dos',
        category: 'Completed web app',
        description: 'A task management app to help organize daily activities.',
        scope: 'Independent development — built and completed by me',
        stack: 'MERN',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        outcome: 'A completed application available to try through the live demo.',
        image: awesomeTodosPreview,
        imageAlt: 'Awesome To Dos app showing a task entry field, task list, completion checkboxes, and delete controls',
        imageClass: 'w-full h-auto',
        imageWidth: 2912,
        imageHeight: 1454,
        caption: 'Task management app preview',
        href: 'https://awesometodosapp-xorj.onrender.com/',
        sourceUrl: 'https://github.com/kemgp/awesometodosapp',
        linkLabel: 'Live Demo',
    },
];
function Projects() {
    const reducedMotion = useReducedMotion();
    return (
        <Motion.div className="py-16 sm:py-24 lg:py-32 relative bg-black z-10 overflow-hidden border-t border-gray-500" initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 lg:mb-24 gap-8">
                    <h2 id="projects-heading" className="text-4xl leading-tight sm:text-6xl lg:text-8xl font-serif font-bold text-white">Selected Works</h2>
                </div>
                <div className="space-y-10 sm:space-y-14">
                    {projects.map((project) => (
                        <article key={project.name} className="grid min-w-0 grid-cols-1 items-center gap-6 border-b border-neutral-800 pb-10 sm:gap-8 sm:pb-14 lg:grid-cols-2 lg:gap-12">
                            <figure className="min-w-0 overflow-hidden rounded-2xl border border-neutral-800">
                                {project.image ? (
                                    <div className="bg-white">
                                        <img src={project.image} alt={project.imageAlt} className={project.imageClass} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} />
                                    </div>
                                ) : (
                                    <div className="flex aspect-video flex-col justify-between bg-neutral-900 p-6 text-white sm:p-10" aria-hidden="true">
                                        <span className="text-xs uppercase tracking-widest text-neutral-400">{project.coverLabel || 'Independent project'}</span>
                                        <span className="font-serif text-4xl leading-tight sm:text-5xl">{project.coverTitle || 'Awesome To Dos'}<span className="text-neutral-500">.</span></span>
                                        <span className="text-sm text-neutral-400">{project.coverSubtitle || 'Plan your day. Organize your tasks.'}</span>
                                    </div>
                                )}
                                <figcaption className="bg-neutral-950 px-4 py-3 text-sm text-neutral-400">{project.caption || 'Completed task management project'}</figcaption>
                            </figure>
                            <div className="min-w-0">
                                <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-300">{project.category}</span>
                                <h3 className="mt-4 break-words font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{project.name}</h3>
                                <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">{project.description}</p>
                                <dl className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base">
                                    <div>
                                        <dt className="font-medium text-white">Project scope</dt>
                                        <dd className="mt-1 text-neutral-400">{project.scope}</dd>
                                    </div>
                                    {project.technologies && (
                                        <div>
                                            <dt className="font-medium text-white">Technology stack{project.stack && ` · ${project.stack}`}</dt>
                                            <dd className="mt-2">
                                                <ul className="flex flex-wrap gap-2">
                                                    {project.technologies.map((technology) => (
                                                        <li key={technology} className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">{technology}</li>
                                                    ))}
                                                </ul>
                                            </dd>
                                        </div>
                                    )}
                                    <div>
                                        <dt className="font-medium text-white">Deliverable</dt>
                                        <dd className="mt-1 text-neutral-400">{project.outcome}</dd>
                                    </div>
                                </dl>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel}: ${project.name} (opens in a new tab)`} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                        {project.linkLabel}<span aria-hidden="true">↗</span>
                                    </a>
                                    {project.sourceUrl && (
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source code: ${project.name} on GitHub (opens in a new tab)`} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-neutral-600 px-6 py-3 font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                                            Source Code<span aria-hidden="true">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <OtherProjects />
                <section aria-labelledby="toolkit-heading" className="w-full mb-10">
                    <h3 id="toolkit-heading" className="font-serif text-3xl text-white sm:text-4xl">My Toolkit</h3>
                    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-8 ">
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={html5} alt="HTML5" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">HTML5</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.2 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={css} alt="CSS" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">CSS</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={react} alt="React" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">React</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.6 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={mongodb} alt="MongoDB" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">MongoDB</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 0.8 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={nodejs} alt="Node.js" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">Node.js</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 1 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={tailwind} alt="Tailwind CSS" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">Tailwindcss</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 1.2 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={expressjs} alt="Express.js" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">Express.js</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 1.4 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={figma} alt="Figma" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">Figma</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 1.6 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={php} alt="PHP" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">PHP</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                        <Motion.div initial={reducedMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 1, delay: 1.8 }} variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : 50 }, visible: { opacity: 1, y: 0 } }}>
                        <SpotlightCard className="h-full items-center justify-center p-4! sm:p-6! lg:p-8!" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" src={supabase} alt="Supabase" />
                                <p className="max-w-full break-words text-center text-lg sm:text-xl lg:text-2xl font-bold text-white">Supabase</p>
                            </div>
                        </SpotlightCard>
                        </Motion.div>
                    </div>
                </section>
            </div>
        </Motion.div>
    );
}

export default Projects;
