import { useRef, useState } from 'react';
import { contactEmail, submitContact, validateContact } from '../lib/contact';

import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
function Contact() {
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});
    const submitting = useRef(false);

    async function handleSubmit(event) {
        event.preventDefault();
        if (submitting.current) return;
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form));
        const nextErrors = validateContact(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            setStatus('invalid');
            form.elements.namedItem(Object.keys(nextErrors)[0]).focus();
            return;
        }
        submitting.current = true;
        setStatus('sending');
        try {
            await submitContact(values);
            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        } finally {
            submitting.current = false;
        }
    }

    function clearFieldError(event) {
        const { name } = event.target;
        setErrors((current) => ({ ...current, [name]: undefined }));
    }

    return (
        <div className="border-t border-gray-500 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
            <div className="mx-auto w-full max-w-7xl bg-black">

                <div className="grid grid-cols-1 items-start gap-10 bg-black sm:gap-14 lg:grid-cols-2 lg:gap-16">
                    <div className="relative min-w-0 w-full bg-black text-white">
                        <div className="relative w-full">
                            <div className="text-start align-middle gap-6 flex flex-col items-start justify-center">
                                <h2 id="contact-heading" className="text-4xl leading-tight text-white font-serif sm:text-6xl xl:text-8xl">Create a difference with me.</h2>
                                <span className="text-base leading-relaxed text-gray-500 sm:text-xl">Let's work together, and turn your vision into reality.</span>
                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                    <img className="w-6 h-6 shrink-0" src={email} alt="Email" />
                                    <span className="text-base leading-relaxed text-gray-500 sm:text-xl font-bold break-words min-w-0">kgpatino.wit@gmail.com</span>
                                </div>
                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                    <img className="w-6 h-6 shrink-0" src={phone} alt="Phone" />
                                    <span className="text-base leading-relaxed text-gray-500 sm:text-xl font-bold break-words min-w-0">0915-534-8098</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="min-w-0 w-full bg-black text-left">
                        <div className="w-full rounded-lg">
                            <form className="flex w-full min-w-0 flex-col gap-5 rounded-2xl sm:gap-6" onSubmit={handleSubmit} onChange={clearFieldError} noValidate aria-busy={status === 'sending'}>
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-3">
                                        <div className="col">
                                            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white">Full name <span className="font-normal text-neutral-400">(required)</span></label>
                                            <input id="contact-name" readOnly={status === 'sending'} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" type="text" name="name" autoComplete="name" placeholder="Full Name" required />
                                            {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-red-300">{errors.name}</p>}
                                        </div>
                                        <div className="col">
                                            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white">Email address <span className="font-normal text-neutral-400">(required)</span></label>
                                            <input id="contact-email" readOnly={status === 'sending'} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className="w-full bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" type="email" name="email" autoComplete="email" placeholder="Email Address" required />
                                            {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-red-300">{errors.email}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white">Message <span className="font-normal text-neutral-400">(required)</span></label>
                                    <textarea id="contact-message" readOnly={status === 'sending'} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className="w-full resize-y bg-gray-500 placeholder:text-black rounded-2xl px-4 py-3 text-base sm:px-6 sm:py-4" placeholder="Your Message" name="message" rows="7" required></textarea>
                                            {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-red-300">{errors.message}</p>}
                                </div>
                                <button type="submit" disabled={status === 'sending'} className="disabled:cursor-wait disabled:opacity-60 bg-white text-black w-full rounded-full px-6 py-4 mt-2 text-lg sm:mt-4 sm:text-xl font-medium transition duration-500 text-center items-center hover:scale-102 hover:ring-2 hover:ring-black hover:cursor-pointer">{status === 'sending' ? 'Sending…' : 'Submit Form'}</button>
                                <div role="status" aria-live="polite" aria-atomic="true">
                                    {status === 'sending' && <p className="text-sm text-neutral-300">Sending your message…</p>}
                                    {status === 'invalid' && <p className="text-sm text-red-300">Please correct the highlighted fields.</p>}
                                    {status === 'success' && (
                                        <p className="rounded-xl border border-emerald-800 bg-emerald-950/50 p-4 text-sm leading-relaxed text-emerald-200">
                                            <span aria-hidden="true" className="mr-2">✓</span>Your message was submitted. Thanks for reaching out!
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p className="rounded-xl border border-red-800 bg-red-950/50 p-4 text-sm leading-relaxed text-red-200">
                                            We couldn’t confirm your submission. Your message is still here. Please try again or <a href={`mailto:${contactEmail}`} className="font-medium underline underline-offset-4">email me directly</a>.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
