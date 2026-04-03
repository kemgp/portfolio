import Orb from './Orb';

function Hero() {
    return (
        <div>
            <div className="w-full items-center bg-black sticky top-0 z-10">
                <Orb
                    hoverIntensity={2}
                    rotateOnHover
                    hue={0}
                    forceHoverState={false}
                    backgroundColor="#000000"
                />
            </div>
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Welcome to My Portfolio</h1>
            <p className="text-center mt-4 text-lg">Explore my projects and skills</p>
        </div>

        </div>
    );
}

export default Hero;