'use client'

import React, { useCallback, useState } from 'react'
import HeadingLine from '@/components/HeadingLine'
import { WorkSlide, WorkCard } from '@/components/WorkCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { WorkProjects } from '@/myutils/workProjects'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { PaginationOptions } from 'swiper/types/modules/pagination'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { PageProps } from '@/app/page'

type WorkPageProps = {} & PageProps

export default function WorkPage({ isMobile, mediaQueries }: WorkPageProps) {
    return (
        <AnimateOnView Component={WorkPageContent} isMobile={isMobile} mediaQueries={mediaQueries} />
    )
}

function WorkPageContent({ animationControls, isMobile, mediaQueries }: AnimateableComponentProps) {
    const workProjectKeys = Object.keys(WorkProjects)
    const projectCount = workProjectKeys.length

    const workProjectsPerSlide = mediaQueries?.xl ? 6 : mediaQueries?.md ? 4 : 2
    const slideCount = Math.ceil(projectCount / workProjectsPerSlide);

    const projectsDistributedAcrossSlides: string[][] = [];
    for (let index = 0; index < projectCount; index++) {
        if (index % workProjectsPerSlide == 0) {
            projectsDistributedAcrossSlides[Math.floor(index / workProjectsPerSlide)] = []
        }
        projectsDistributedAcrossSlides[Math.floor(index / workProjectsPerSlide)].push(workProjectKeys[index])
    }

    const [projectStart, setProjectStart] = useState(true);
    const [projectEnd, setProjectEnd] = useState(false);

    const [swiperRefProject, setSwiperRefProject] = useState<SwiperClass>();

    const handlePreviousProject = useCallback(() => {
        swiperRefProject?.slidePrev();
    }, [swiperRefProject]);

    const handleNextProject = useCallback(() => {
        swiperRefProject?.slideNext();
    }, [swiperRefProject]);

    const paginationOptionsProject: PaginationOptions = {
        el: '.swiper-pagination',
    }
    
    return (
        <div className='h-screen w-screen py-24'>
            {/* ======== Work Projects ======== */}

            <div className="h-full w-full flex flex-col items-center justify-center px-[10%]">
                <div className="w-full h-full flex flex-col items-center">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='WORK'
                        lineWidth='w-[10vw]'
                    />
                    <div className='relative mt-8 h-full w-full'>
                        <div className={`absolute ${1 >= slideCount ? 'hidden' : 'swiper-button-prev'} md:-translate-x-14 -translate-x-12 -translate-y-4
                        ${projectStart ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handlePreviousProject}>
                        </div>
                        <div className={`absolute ${1 >= slideCount ? 'hidden' : 'swiper-button-next'} md:translate-x-14 translate-x-12 -translate-y-4 
                        ${projectEnd ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handleNextProject}>
                        </div>
                        <Swiper onSwiper={setSwiperRefProject}
                            className='w-full h-full'
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            pagination={paginationOptionsProject}
                            grabCursor
                            uniqueNavElements
                            watchOverflow
                            onActiveIndexChange={(s) => {
                                if (s.activeIndex == 0)
                                {
                                    setProjectStart(true);
                                    setProjectEnd(false);
                                }
                                else if (s.activeIndex == (slideCount - 1))
                                {
                                    setProjectEnd(true);
                                    setProjectStart(false);
                                }
                                else
                                {
                                    setProjectStart(false);
                                    setProjectEnd(false);
                                }
                            }}
                        >
                            <div className='w-full h-full'>
                                {
                                    projectsDistributedAcrossSlides.map((projectSlide, index) => {
                                        return (
                                            <SwiperSlide key={index} className='w-full h-full p-4'>
                                                <motion.div
                                                    className='w-full h-full'
                                                    variants={{
                                                        hidden: {
                                                            opacity: 0,
                                                            x: 200
                                                        },
                                                        visible: {
                                                            opacity: 1,
                                                            x: 0
                                                        }
                                                    }}
                                                    initial="hidden"
                                                    animate={animationControls}
                                                    transition={{ delay: 0.25 * index, duration: 0.5, ease: 'backOut' }} >
                                                    <WorkSlide workCardProps={projectSlide.map((key, i) => {
                                                        const workProject = WorkProjects[key];
                                                        console.log(key);
                                                        return (
                                                            {thumbnail: workProject.thumbnail, title: workProject.title, description: workProject.overview, slug: key}
                                                        )
                                                    })}
                                                    extraDivs={index == projectsDistributedAcrossSlides.length - 1 ? workProjectsPerSlide - projectSlide.length : 0}/>

                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}