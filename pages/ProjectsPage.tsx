'use client'

import React, {useRef, useEffect} from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import { gameStack } from '@/myutils/gameStack'
import GameCard from '@/components/GameCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { projectStack } from '@/myutils/projectStack'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import '../styles/carouselstyle.css'

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
            <div className="h-[13%]"></div>
            <div className="flex flex-col items-center justify-start spacing-y-12 h-[87%]">
                <div className="h-1/2 w-full flex flex-col items-center">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='PROJECTS'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-6"></div>
                    <div ref={projectCarouselParentDiv}>
                        <ScrollingCarousel
                            className='relative'
                            leftIcon={<div className='w-8 h-8 bg-green-500 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'></div>}
                            rightIcon={<div className='w-8 h-8 bg-blue-500 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10'></div>}
                        >
                            {
                                projectStack.map((project, index) => {
                                    return (
                                        <div key={index}>
                                            <ProjectCard
                                                image={project.image}
                                                title={project.title}
                                                description={project.description}
                                                techStackUsed={project.techStackUsed}
                                                gitHubURL={project.gitHubURL}
                                                demoURL={project.demoURL}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </ScrollingCarousel>
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
                        <ScrollingCarousel
                            className='relative'
                            leftIcon={<div className='w-8 h-8 bg-green-500 absolute left-0 top-1/2 -translate-x-1/2 z-10'></div>}
                            rightIcon={<div className='w-8 h-8 bg-blue-500 absolute right-0 top-1/2 translate-x-1/2 z-10'></div>}
                        >
                            {
                                gameStack.map((game, index) => {
                                    return (
                                        <div key={index}>
                                            <GameCard
                                                title={game.title}
                                                logoSrc={game.iconSrc}
                                                demoSrc={game.demoSrc}
                                                playStoreLink={game.playStoreLink}
                                                appStoreLink={game.appStoreLink}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </ScrollingCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}