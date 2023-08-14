'use client'

import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import dynamic from 'next/dynamic'
import LoadingPage from '@/pages/LoadingPage'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'

const AboutPageComponent = dynamic(() => import('@/pages/AboutPage'))
const SkillsPageComponent = dynamic(() => import('@/pages/SkillsPage'))
const ProjectsPageComponent = dynamic(() => import('@/pages/ProjectsPage'))
const ContactPageComponent = dynamic(() => import('@/pages/ContactPage'))

export default function Home() {

  const [pageToLoad, setPageToLoad] = useState(0);

  return (
    <div className="bg-bgColor text-white h-screen scroll-smooth overflow-y-scroll overflow-x-hidden">

      <head>
        <title>Rushidan&apos;s Portfolio</title>
      </head>

      {/* Scroll To Top Button */}
      {/* <div className={`sticky top-[90vh] landscape:left-[93vw] left-[84vw] w-16 h-16 z-20 ${true ? 'hidden' : 'hidden'}`}>
        <img src="icons/arrow-up.png" alt="Up Arrow" />
      </div> */}

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="home">
        <LoadingPage loadNow={true} pageIndex={0} setPageToLoad={setPageToLoad} Component={HomePage} />
      </section>

      {/* About */}
      <section id="about">
        <LoadingPage loadNow={!isMobile ?? pageToLoad==1} pageIndex={1} setPageToLoad={setPageToLoad} Component={AboutPageComponent} />
      </section>

      {/* Skills */}
      <section id="skills">
        <LoadingPage loadNow={!isMobile ?? pageToLoad==2} pageIndex={2} setPageToLoad={setPageToLoad} Component={SkillsPageComponent} />
      </section>

      {/* Projects */}
      <section id="projects">
        <LoadingPage loadNow={false} pageIndex={3} setPageToLoad={setPageToLoad} Component={ProjectsPageComponent} />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <LoadingPage  loadNow={!isMobile ?? pageToLoad==4} pageIndex={4} setPageToLoad={setPageToLoad} Component={ContactPageComponent} />
      </section>

    </div>
  )
}
