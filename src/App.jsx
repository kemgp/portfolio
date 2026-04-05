import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'

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
        id="skills"
        className="min-h-screen w-full relative bg-orange-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52 scroll-mt-28"
      >
        <h1 className="text-5xl font-bold">Section 1</h1>
      </section>
      <section
        id="contact"
        className="min-h-screen w-full relative bg-yellow-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52 scroll-mt-28"
      >
        <h1 className="text-5xl font-bold">Section 2</h1>
      </section>
    </div>
  )
}

export default App
