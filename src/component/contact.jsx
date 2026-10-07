
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
function Contact() {
    return (
        <div className="border-t border-gray-500 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
            <div className="mx-auto w-full max-w-7xl bg-black">

                <div className="grid grid-cols-1 items-start gap-10 bg-black sm:gap-14 lg:grid-cols-2 lg:gap-16">
                    <div className="relative min-w-0 w-full bg-black text-white">
                        <div className="relative w-full">
                            <div className="text-start align-middle gap-6 flex flex-col items-start justify-center">
                                <h1 className="text-4xl leading-tight text-white font-serif sm:text-6xl xl:text-8xl">Create a difference with me.</h1>
                                <span className="text-base leading-relaxed text-gray-500 sm:text-xl">Let's work together, and turn your vision into reality.</span>
                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                    <img className="w-6 h-6 shrink-0" src={email} alt="Email" />
                                    <span className="text-base leading-relaxed text-gray-500 sm:text-xl font-bold break-words min-w-0">keithsampleemail@email.com</span>
                                </div>
                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                    <img className="w-6 h-6 shrink-0" src={phone} alt="Phone" />
                                    <span className="text-base leading-relaxed text-gray-500 sm:text-xl font-bold break-words min-w-0">0915-555-8098</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="min-w-0 w-full bg-black text-left">
                        <div className="w-full rounded-lg">
                            <form className="flex w-full min-w-0 flex-col gap-5 rounded-2xl sm:gap-6" target="_blank" action="https://formsubmit.co/kgpatino.wit@gmail.com" method="POST">
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-3">
                                        <div className="col">
                                            <input className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" type="text" name="name" placeholder="Full Name" required />
                                        </div>
                                        <div className="col">
                                            <input className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="w-full resize-y bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" placeholder="Your Message" name="message" rows="7" required></textarea>
                                </div>
                                <button type="submit" className="bg-white text-black w-full rounded-full px-6 py-4 mt-2 text-lg sm:mt-4 sm:text-xl font-medium transition duration-500 text-center items-center hover:scale-102 hover:ring-2 hover:ring-black hover:cursor-pointer">Submit Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;