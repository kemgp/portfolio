import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <div className="min-h-screen w-full relative bg-orange-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
      <h1 className="text-5xl font-bold">Section 1</h1>
    </div>
    <div className="min-h-screen w-full relative bg-yellow-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
      <h1 className="text-5xl font-bold">Section 2</h1>
    </div>
    </>
  )
}

export default App
