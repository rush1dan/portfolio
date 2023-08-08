'use client'

import React, { useRef, useEffect } from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import { gameStack } from '@/myutils/gameStack'
import GameCard from '@/components/GameCard'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import { projectStack } from '@/myutils/projectStack'
import CarouselArrow, { Direction } from '@/components/CarouselArrow'
import { motion } from 'framer-motion'

type Props = {}

export default function ProjectsPage({ }: Props) {
    return (
        <AnimateOnView Component={ProjectPageContent} />
    )
}

function ProjectPageContent({ animationControls }: AnimateableComponentProps) {

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
                    <div className='flex flex-row gap-x-12'>
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
                        <div className='flex flex-row gap-x-6'>
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
                        </div>
                </div>
            </div>
        </div>
    )
}