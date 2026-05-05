import Hero from './components/Hero'
import Projects from './components/Projects' 
import Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-50 dark:bg-[#0b0b17] min-h-screen transition-colors duration-300">
      <Navbar/>
      <Hero />
      <About/>
      <Skill/>
      <Projects />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App