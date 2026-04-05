import linkedin from '../assets/linkedin.svg';
import git from '../assets/git.svg';

function Footer() {
    return (
        <div className="w-full py-12 bg-black border-t border-gray-500 flex flex-col">
            <div className="w-full px-24 flex flex-col md:flex-row items-center justify-between ">
                <div className="flex flex-col">
                    <p className="text-gray-500 text-sm">&copy; 2024 Keith Erwin Mikhail Patiño. All rights reserved.</p>
                    <p className="text-gray-500 text-sm">Designed and Developed by Keith Erwin Mikhail Patiño</p>
                    <p className="text-gray-500 text-sm">Iloilo City, Pilippines</p>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 md:static md:transform-none">
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/kemgp" target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent text-gray-700 rounded-full hover:scale-102 hover:ring-black hover:ring-2 transition duration-500 hover:cursor-pointer" aria-label="LinkedIn" >
                        <img className="size-6" fill="currentColor" viewBox="0 0 24 24" src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.github.com/kemgp" target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent text-gray-700 rounded-full hover:scale-102 hover:ring-black hover:ring-2 transition duration-500 hover:cursor-pointer" aria-label="GitHub" >
                        <img className="size-6" fill="currentColor" viewBox="0 0 24 24" src={git} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;