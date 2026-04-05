import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'
import Footer from './component/footer'
import Contact from './component/contact'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-28">
        <About />
      </section>
      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>
      <section
        id="contact" className="scroll-mt-28">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
