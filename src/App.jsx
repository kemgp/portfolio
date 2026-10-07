import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'
import Footer from './component/footer'
import Contact from './component/contact'

function App() {
  return (
    <div className="bg-black">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
      <section id="home" aria-labelledby="home-heading" className="scroll-mt-28">
        <Hero />
      </section>
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-28">
        <About />
      </section>
      <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-28">
        <Projects />
      </section>
      <section
        id="contact" aria-labelledby="contact-heading" className="scroll-mt-28">
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
