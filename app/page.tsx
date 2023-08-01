import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Header from '@/pages/Header'
import Hero from '@/pages/Hero'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden">
      <head>
        <title>Rushidan's Portfolio</title>
      </head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  )
}
