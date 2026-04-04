import ScrollFloat from './ScrollFloat';
import FlowingMenu from './FlowingMenu';

const demoItems = [
    { link: '#', text: 'BAYANIHAN', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'STUDYUS', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];
function Projects() {
    return (
        <div className="min-h-screen w-full relative bg-black flex items-center text-center flex-col gap-10 text-white p-52 ">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                My Projects
            </ScrollFloat>
            <div className="w-screen h-64 relative">
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#060010"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#060010"
                    borderColor="#ffffff"
                />
            </div>
        </div>
    );
}

export default Projects;