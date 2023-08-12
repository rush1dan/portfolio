import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import ProjectsPage from '@/pages/ProjectsPage'
import SkillsPage from '@/pages/SkillsPage'

export default function Home() {
  return (
    <div className="bg-bgColor text-white h-screen 
    snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden">

      <head>
        <title>Rushidan's Portfolio</title>
      </head>

      {/* Scroll To Top Button */}
      {/* <div className={`sticky top-[90vh] landscape:left-[93vw] left-[84vw] w-16 h-16 z-20 ${true ? 'hidden' : 'hidden'}`}>
        <img src="icons/arrow-up.png" alt="Up Arrow" />
      </div> */}

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="home">
        <HomePage />
      </section>

      {/* About */}
      <section id="about">
        <AboutPage />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsPage />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectsPage />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <ContactPage />
      </section>

    </div>
  )
}
