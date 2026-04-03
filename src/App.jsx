import { useState } from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
    <div className="min-h-screen w-full relative bg-red-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
    </div>
    <div className="min-h-screen w-full relative bg-yellow-500 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
    </div>
    </>
  )
}

export default App
