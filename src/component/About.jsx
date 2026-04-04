import mypic from '../assets/mypic.jpg';
import SpotlightCard from './SpotlightCard'
import css from '../assets/css.svg';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import expressjs from '../assets/expressjs.svg';
import figma from '../assets/figma.svg';

function About() {
    return (
        <div classname="relative w-full h-screen bg-black flex items-center justify-center">
            <div className="relative z-10 text-9xl font-bold flex justify-center text-white bg-black">About</div>
            <div className="grid grid-cols-2 -z-10">
                <div className="min-h-screen w-full relative bg-black flex items-center flex-col gap-10 text-white p-52">
                    <div className="w-1/2 rounded-full overflow-hidden outline-style-solid outline-10 outline-blue-500">
                        <img src={mypic} alt="My Pic" />
                    </div>
                    <p className=" text-2xl text-justify">I am an aspiring <span className="font-bold text-blue-500">Software Engineer</span> with a deep passion for creating innovative solutions with <span className="font-bold text-blue-500">real impact</span>. Combining creativity and technical expertise, I strive to build applications that make a <span className="font-bold text-blue-500">difference</span>.</p>
                </div>
                <div className="min-h-screen w-full relative bg-black flex items-center text-center flex-col gap-10 text-white p-52 ">
                    <div className="grid grid-cols-3 gap-y-10 gap-x-10">
                        <SpotlightCard className="custom-spotlight-card items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={css} alt="CSS" />
                            <h1 className="text-4xl font-bold">CSS</h1>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card items-center justify-center " spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={mongodb} alt="MongoDB"/>
                            <h1 className="text-4xl font-bold">MongoDB</h1>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={nodejs} alt="NodeJS" />
                            <h1 className="text-4xl font-bold">NodeJS</h1>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={react} alt="React" />
                            <h1 className="text-4xl font-bold">React</h1>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={tailwind} alt="Tailwind" />
                            <h1 className="text-4xl font-bold">Tailwind</h1>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card items-center justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="flex flex-col items-center justify-center gap-4">
                            <img className="w-32 h-32" src={figma} alt="Figma" />
                            <h1 className="text-4xl font-bold">Figma</h1>
                            </div>

                        </SpotlightCard>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default About;