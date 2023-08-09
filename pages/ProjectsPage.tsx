'use client'

import React, { useCallback, useState } from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import { gameStack } from '@/myutils/gameStack'
import GameCard from '@/components/GameCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { projectStack } from '@/myutils/projectStack'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { NavigationOptions } from 'swiper/types/modules/navigation'
import { PaginationOptions } from 'swiper/types/modules/pagination'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { MediaQueryDefault, defaultMediaQueries } from '@/myutils/defaultMediaQueries'
import useMediaQueries from 'media-queries-in-react'

type Props = {}

export default function ProjectsPage({ }: Props) {
    return (
        <AnimateOnView Component={ProjectPageContent} />
    )
}

function ProjectPageContent({ animationControls }: AnimateableComponentProps) {
    const mediaQueries: MediaQueryDefault = useMediaQueries(defaultMediaQueries);

    const projects = projectStack.length;
    const games = gameStack.length;

    const projectCardsToShow = mediaQueries.xl ? 3 : 1;
    const gameCardsToShow = mediaQueries.xl ? 6 : 1;

    const [projectStart, setProjectStart] = useState(true);
    const [projectEnd, setProjectEnd] = useState(false);
    const [gameStart, setGameStart] = useState(true);
    const [gameEnd, setGameEnd] = useState(false);

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

    const [swiperRefGame, setSwiperRefGame] = useState<SwiperClass>();

    const handlePreviousGame = useCallback(() => {
        swiperRefGame?.slidePrev();
    }, [swiperRefGame]);

    const handleNextGame = useCallback(() => {
        swiperRefGame?.slideNext();
    }, [swiperRefGame]);

    const paginationOptionsGame: PaginationOptions = {
        el: '.swiper-pagination',
    }

    return (
        <div className='h-screen snap-center'>
            <div className="h-[12%]"></div>
            <div className="flex flex-col items-center justify-start gap-y-8 h-[88%]">
                <div className="h-1/2 w-full flex flex-col items-center">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='PROJECTS'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className='relative mt-8'>
                        <div className={`absolute swiper-button-prev -translate-x-8 -translate-y-4 ${projectStart ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handlePreviousProject}>
                        </div>
                        <div className={`absolute swiper-button-next translate-x-8 -translate-y-4 ${projectEnd ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handleNextProject}>
                        </div>
                        <Swiper onSwiper={setSwiperRefProject} className='xl:w-[57rem] w-[19rem] h-[26rem]'
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={mediaQueries.xl ? 3 : 1}
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
                                else if (s.activeIndex == (projects - projectCardsToShow))
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
                            <div className="swiper-pagination"></div>
                            {
                                projectStack.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <motion.div
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
                                                <ProjectCard
                                                    image={project.image}
                                                    title={project.title}
                                                    description={project.description}
                                                    techStackUsed={project.techStackUsed}
                                                    gitHubURL={project.gitHubURL}
                                                    demoURL={project.demoURL}
                                                />
                                            </motion.div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="h-1/2 w-full flex flex-col items-center">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className='relative mt-6'>
                        <div className={`absolute swiper-button-prev -translate-x-8 ${gameStart ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handlePreviousGame}>
                        </div>
                        <div className={`absolute swiper-button-next translate-x-8 ${gameEnd ? 'opacity-30 pointer-events-none' : ''}`}
                            onClick={handleNextGame}>
                        </div>
                        <Swiper onSwiper={setSwiperRefGame} className='xl:w-[66rem] w-[11rem] h-[22rem]'
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={mediaQueries.xl? 6 : 1}
                            slidesPerGroup={mediaQueries.xl ? 6 : 1}
                            pagination={paginationOptionsGame}
                            grabCursor
                            uniqueNavElements
                            watchOverflow
                            onActiveIndexChange={(s) => {
                                if (s.activeIndex == 0)
                                {
                                    setGameStart(true);
                                    setGameEnd(false);
                                }
                                else if (s.activeIndex == (games - gameCardsToShow))
                                {
                                    setGameEnd(true);
                                    setGameStart(false);
                                }
                                else
                                {
                                    setGameStart(false);
                                    setGameEnd(false);
                                }
                            }}
                        >
                            <div className="swiper-pagination"></div>
                            {
                                gameStack.map((game, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <motion.div
                                                variants={{
                                                    hidden: {
                                                        opacity: 0,
                                                        x: 200,
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        x: 0,
                                                    }
                                                }}
                                                initial="hidden"
                                                animate={animationControls}
                                                transition={{ delay: 0.125 * index, duration: 0.5, ease: 'backOut' }} >
                                                <GameCard
                                                    title={game.title}
                                                    logoSrc={game.iconSrc}
                                                    demoSrc={game.demoSrc}
                                                    playStoreLink={game.playStoreLink}
                                                    appStoreLink={game.appStoreLink}
                                                />
                                            </motion.div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}