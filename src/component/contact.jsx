
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
function Contact() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="flex-col justify-center bg-black ">

                <div className="flex flex-col md:flex-row bg-black items-center justify-center py-20">
                    <div className="h-full w-full relative bg-black flex items-center flex-col text-white px-10 py-14 gap-10">
                        <div className="w-full h-full md:1/3 group relative">
                            <div className="text-start align-middle gap-6 flex flex-col items-start justify-center">
                                <h1 className="text-8xl text-white font-serif">Create a difference with me.</h1>
                                <span className="text-xl text-gray-500">Let's work together, and turn your vision into reality.</span>
                                <div className="flex items-center gap-4">
                                    <img className="w-6 h-6" src={email} alt="Email" />
                                    <span className="text-xl text-gray-500 font-bold">keithsampleemail@email.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img className="w-6 h-6" src={phone} alt="Phone" />
                                    <span className="text-xl text-gray-500 font-bold">0915-555-8098</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-2/3 bg-black flex flex-col items-start justify-start p-10 gap-10 text-left">
                        <div className="container w-full h-full p-10 rounded-lg">
                            <form className="flex flex-col gap-6 rounded-2xl px-16 py-10 w-full h-full" target="_blank" action="https://formsubmit.co/kgpatino.wit@gmail.com" method="POST">
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-3">
                                        <div className="col">
                                            <input className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-6 py-4" type="text" name="name" placeholder="Full Name" required />
                                        </div>
                                        <div className="col">
                                            <input className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-6 py-4" type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-6 py-4" placeholder="Your Message" name="message" rows="10" required></textarea>
                                </div>
                                <button type="submit" className="bg-white text-black rounded-full px-12 py-4 mt-6 text-2xl font-medium transition duration-500 text-center items-center hover:scale-102 hover:ring-2 hover:ring-black hover:cursor-pointer">Submit Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;