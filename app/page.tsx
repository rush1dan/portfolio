'use client'

import HomePage from '@/sections/HomePage'
import dynamic from 'next/dynamic'
import LoadingPage from '@/sections/LoadingPage'
import { isMobile } from 'react-device-detect'
import Head from 'next/head'
import Loading from '@/components/Loading'
import Script from 'next/script'
import { MediaQueryDefault, defaultMediaQueries } from '@/myutils/defaultMediaQueries'
import useMediaQueries from 'media-queries-in-react'
import { useEffect, useState } from 'react'

const AboutPageComponent = dynamic(() => import('@/sections/AboutPage'), { loading: () => <Loading /> })
const SkillsPageComponent = dynamic(() => import('@/sections/SkillsPage'), { loading: () => <Loading /> })
const WorkPageComponent = dynamic(() => import('@/sections/WorkPage'), { loading: () => <Loading /> })
const ProjectsPageComponent = dynamic(() => import('@/sections/ProjectsPage'), { loading: () => <Loading /> })
const ContactPageComponent = dynamic(() => import('@/sections/ContactPage'), { loading: () => <Loading /> })

export type PageProps = {
  isMobile?: boolean,
  mediaQueries?: MediaQueryDefault
}

export default function Home() {

  const mediaQueries: MediaQueryDefault = useMediaQueries(defaultMediaQueries);
  const isMobileDevice: boolean = isMobile;

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Rushidan&apos;s Portfolio</title>
      </Head>

      <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-E0H02EF49W"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E0H02EF49W');`
        }
      </Script>

      {/* Scroll To Top Button */}
      {/* <div className={`sticky top-[90vh] landscape:left-[93vw] left-[84vw] w-16 h-16 z-20 ${true ? 'hidden' : 'hidden'}`}>
        <img src="icons/arrow-up.png" alt="Up Arrow" />
      </div> */}

      {/* Hero */}
      <section id="home">
        <LoadingPage loadNow={true} Component={HomePage} />
      </section>

      {/* About */}
      <section id="about">
        <LoadingPage loadNow={!isMobileDevice} Component={AboutPageComponent} isMobile={isMobileDevice} mediaQueries={mediaQueries} />
      </section>

      {/* Skills */}
      <section id="skills">
        <LoadingPage loadNow={!isMobileDevice} Component={SkillsPageComponent} isMobile={isMobileDevice} mediaQueries={mediaQueries} />
      </section>

      {/* Work */}
      <section id="work">
        <LoadingPage loadNow={false} Component={WorkPageComponent} isMobile={isMobileDevice} mediaQueries={mediaQueries} />
      </section>

      {/* Projects */}
      <section id="projects">
        <LoadingPage loadNow={false} Component={ProjectsPageComponent} isMobile={isMobileDevice} mediaQueries={mediaQueries} />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <LoadingPage loadNow={!isMobileDevice} Component={ContactPageComponent} isMobile={isMobileDevice} mediaQueries={mediaQueries} />
      </section>
    </>
  )
}
