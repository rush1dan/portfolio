'use client'

import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import dynamic from 'next/dynamic'
import LoadingPage from '@/pages/LoadingPage'
import { isMobile } from 'react-device-detect'
import Head from 'next/head'
import Loading from '@/components/Loading'
import Script from 'next/script'

const AboutPageComponent = dynamic(() => import('@/pages/AboutPage'), { loading: () => <Loading /> })
const SkillsPageComponent = dynamic(() => import('@/pages/SkillsPage'), { loading: () => <Loading /> })
const ProjectsPageComponent = dynamic(() => import('@/pages/ProjectsPage'), { loading: () => <Loading /> })
const ContactPageComponent = dynamic(() => import('@/pages/ContactPage'), { loading: () => <Loading /> })

export default function Home() {
  return (
    <div className="bg-bgColor text-white h-screen scroll-smooth overflow-y-scroll overflow-x-hidden">

      <Head>
        <title>Rushidan&apos;s Portfolio</title>
      </Head>

      <Script async strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}></Script>
      <Script  id="google-analytics">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID});`
        }
      </Script>

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
        <LoadingPage loadNow={true} Component={HomePage} />
      </section>

      {/* About */}
      <section id="about">
        <LoadingPage loadNow={!isMobile} Component={AboutPageComponent} />
      </section>

      {/* Skills */}
      <section id="skills">
        <LoadingPage loadNow={!isMobile} Component={SkillsPageComponent} />
      </section>

      {/* Projects */}
      <section id="projects">
        <LoadingPage loadNow={false} Component={ProjectsPageComponent} />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <LoadingPage loadNow={!isMobile} Component={ContactPageComponent} />
      </section>

    </div>
  )
}
