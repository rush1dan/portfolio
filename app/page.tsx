import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

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

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}
