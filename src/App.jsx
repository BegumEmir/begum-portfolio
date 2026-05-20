import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Services from "./sections/Services"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"

function App() {
  const [lang, setLang] = useState("tr")

  return (
    <div className="bg-[#faf7f4] text-[#1c1424] font-sans">
      <CustomCursor />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Services lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App