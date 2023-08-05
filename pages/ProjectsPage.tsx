'use client'

import React from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import { gameStack } from '@/myutils/gameStack'
import GameCard from '@/components/GameCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { projectStack } from '@/myutils/projectStack'
import Carousel from '@/components/Carousel'

type Props = {}

export default function ProjectsPage({ }: Props) {
    return (
        <AnimateOnView Component={ProjectPageContent} />
    )
}

function ProjectPageContent({ animationControls }: AnimateableComponentProps) {
    return (
        <div className='h-screen snap-center'>
            <div className="h-[13%]"></div>
            <div className="flex flex-col items-center justify-start spacing-y-12 h-[87%]">
                <div className="h-1/2 w-full">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='PROJECTS'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-8"></div>
                    <div className="w-full flex flex-row items-center justify-center space-x-4">
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
                    </div>
                </div>
                <div className="h-1/2 w-full">
                    <HeadingLine
                        animationControls={animationControls}
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-6"></div>
                    <div>
                        <Carousel>
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
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}