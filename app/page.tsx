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
