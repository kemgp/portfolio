import PixelSnow from './PixelSnow'

function Hero() {
    return (
        <div className="">
            <div className="relative w-full h-screen bg-black flex items-center justify-center -z-10">
                <PixelSnow
                    color="#ffffff"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={340}
                    speed={1.25}
                    density={0.3}
                    direction={125}
                    brightness={1}
                    depthFade={8}
                    farPlane={20}
                    gamma={0.4545}
                    variant="snowflake"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
                    <h1 className="text-6xl font-bold text-center mt-8">Hello, I'm <span className="text-blue-500">Keith</span>. I'm an aspiring developer at <span className="text-blue-500">Western Institute of Technology</span>.</h1>
                </div>
            </div>


        </div>
    );
}

export default Hero;