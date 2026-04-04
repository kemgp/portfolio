import ScrollFloat from './ScrollFloat';

function Projects() {
    return (
        <div className="min-h-screen w-full relative bg-gray-900 flex items-center text-center flex-col gap-10 text-white p-52 ">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                My Projects
            </ScrollFloat>
        </div>
    );
}

export default Projects;