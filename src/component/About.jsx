import mypic from '../assets/mypic.jpg';

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
                <div className="min-h-screen w-full relative bg-yellow-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
                    <h1 className="text-4xl font-bold">About Section</h1>
                </div>
            </div>
        </div>
    );
}

export default About;