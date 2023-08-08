'use client'

import React, { useRef, useEffect } from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import { gameStack } from '@/myutils/gameStack'
import GameCard from '@/components/GameCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { projectStack } from '@/myutils/projectStack'
import '../styles/carouselstyle.css'
import CarouselArrow, { Direction } from '@/components/CarouselArrow'
import { motion } from 'framer-motion'

type Props = {}

export default function ProjectsPage({ }: Props) {
    return (
        <AnimateOnView Component={ProjectPageContent} />
    )
}

function ProjectPageContent({ animationControls }: AnimateableComponentProps) {

    // Scrolling Carousel Prep:

    //Find the scrolling carousel component structure here: 
    //https://github.com/Trendyol/react-carousel/blob/master/src/components/scrolling-carousel/index.tsx

    const projectCarouselParentDiv = useRef<HTMLDivElement>(null);
    const gameCarouselParentDiv = useRef<HTMLDivElement>(null);

    let projectCarouselInnerDiv: HTMLElement | undefined;
    let gameCarouselInnerDiv: HTMLElement | undefined;

    const projectCarouselInnerDivClass = 'projectCarouselInnerDiv';
    const gameCarouselInnerDivClass = 'gameCarouselInnerDiv';

    useEffect(() => {

        projectCarouselInnerDiv = projectCarouselParentDiv?.current?.firstChild?.lastChild as HTMLDivElement;
        if (!projectCarouselInnerDiv?.classList.contains(projectCarouselInnerDivClass)) {
            projectCarouselInnerDiv?.classList.add(projectCarouselInnerDivClass);
        }

        gameCarouselInnerDiv = gameCarouselParentDiv?.current?.firstChild?.lastChild as HTMLDivElement;
        if (!gameCarouselInnerDiv?.classList.contains(gameCarouselInnerDivClass)) {
            gameCarouselInnerDiv?.classList.add(gameCarouselInnerDivClass);
        }

    }, [projectCarouselParentDiv, gameCarouselParentDiv]);

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
                    <div className="h-6"></div>
                    <div ref={projectCarouselParentDiv}>
                        {/* <ScrollingCarousel
                            className='relative'
                            leftIcon={<CarouselArrow className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2' direction={Direction.Left} />}
                            rightIcon={<CarouselArrow className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2' direction={Direction.Right} />}
                        >
                            {
                                projectStack.map((project, index) => {
                                    return (
                                        <motion.div key={index}
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
                                    )
                                })
                            }
                        </ScrollingCarousel> */}
                    </div>
                </div>
                <div className="h-1/2 w-full flex flex-col items-center">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-6"></div>
                    <div ref={gameCarouselParentDiv}>
                        {/* <ScrollingCarousel
                            className='relative'
                            leftIcon={<CarouselArrow className='absolute left-0 top-1/2 -translate-x-1/2' direction={Direction.Left} />}
                            rightIcon={<CarouselArrow className='absolute right-0 top-1/2 translate-x-1/2' direction={Direction.Right} />}
                        >
                            {
                                gameStack.map((game, index) => {
                                    return (
                                        <motion.div key={index}
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
                                    )
                                })
                            }
                        </ScrollingCarousel> */}
                    </div>
                </div>
            </div>
        </div>
    )
}