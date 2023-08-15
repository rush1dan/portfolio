'use client'

import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import dynamic from 'next/dynamic'
import LoadingPage from '@/pages/LoadingPage'
import { useState } from 'react'
import { isMobile } from 'react-device-detect'
import Head from 'next/head'

const AboutPageComponent = dynamic(() => import('@/pages/AboutPage'))
const SkillsPageComponent = dynamic(() => import('@/pages/SkillsPage'))
const ProjectsPageComponent = dynamic(() => import('@/pages/ProjectsPage'))
const ContactPageComponent = dynamic(() => import('@/pages/ContactPage'))

export enum Pages {
  None,
  Home,
  About,
  Skills,
  Projects,
  Contact
}

export default function Home() {

  const [pageToLoad, setPageToLoad] = useState(Pages.Home);

  return (
    <div className="bg-bgColor text-white h-screen scroll-smooth overflow-y-scroll overflow-x-hidden">

      <Head>
        <title>Rushidan&apos;s Portfolio</title>
      </Head>

      {/* Scroll To Top Button */}
      {/* <div className={`sticky top-[90vh] landscape:left-[93vw] left-[84vw] w-16 h-16 z-20 ${true ? 'hidden' : 'hidden'}`}>
        <img src="icons/arrow-up.png" alt="Up Arrow" />
      </div> */}

      {/* Header */}
      <section className='sticky top-0 z-20' id="header">
        <Header />
      </section>

      {/* Hero */}
      <section id="home">
        <LoadingPage loadNow={true} thisPage={Pages.Home} setPageToLoad={setPageToLoad} Component={HomePage} isMobile />
      </section>

      {/* About */}
      <section id="about">
        <LoadingPage loadNow={!isMobile ? pageToLoad===Pages.About : false} thisPage={Pages.About} setPageToLoad={setPageToLoad} Component={AboutPageComponent} isMobile />
      </section>

      {/* Skills */}
      <section id="skills">
        <LoadingPage loadNow={!isMobile ? pageToLoad===Pages.Skills : false} thisPage={Pages.Skills} setPageToLoad={setPageToLoad} Component={SkillsPageComponent} isMobile />
      </section>

      {/* Projects */}
      <section id="projects">
        <LoadingPage loadNow={false} thisPage={Pages.Projects} setPageToLoad={setPageToLoad} Component={ProjectsPageComponent} isMobile />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <LoadingPage  loadNow={!isMobile ? pageToLoad===Pages.Contact : false} thisPage={Pages.Contact} setPageToLoad={setPageToLoad} Component={ContactPageComponent} isMobile />
      </section>

    </div>
  )
}
