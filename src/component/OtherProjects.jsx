function OtherProjects() {
    return (
        <section aria-labelledby="other-projects-heading" className="py-12 sm:py-16">
            <h3 id="other-projects-heading" className="font-serif text-3xl text-white sm:text-4xl">Other Projects</h3>
            <article className="mt-6 flex min-w-0 flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0 max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">Independent desktop project</p>
                    <h4 className="mt-3 text-2xl font-semibold text-white">Python Calculator</h4>
                    <p className="mt-3 text-base leading-relaxed text-neutral-300">
                        A basic desktop calculator I built independently with Python and Tkinter, featuring a button-based interface for arithmetic calculations.
                    </p>
                    <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
                        {['Python', 'Tkinter'].map((technology) => (
                            <li key={technology} className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">{technology}</li>
                        ))}
                    </ul>
                </div>
                <a
                    href="https://github.com/kemgp/first-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source code: Python Calculator on GitHub (opens in a new tab)"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-neutral-600 px-6 py-3 font-medium text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:self-center"
                >
                    Source Code<span aria-hidden="true">↗</span>
                </a>
            </article>
        </section>
    );
}

export default OtherProjects;
