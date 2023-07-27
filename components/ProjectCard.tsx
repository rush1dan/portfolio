import React from 'react'
import styles from './projectcardstyle.module.css'
import Skill from './Skill'
import { techStack } from '@/myutils/techStack'

type ProjectCardProps = {
    image: string,
    title: string,
    description: string,
    techStackUsed: string[],
    gitHubURL: string,
    demoURL?: string
}

export default function ProjectCard({ image, title, description, techStackUsed, gitHubURL, demoURL }: ProjectCardProps) {
    return (
        <div>
            {/* Main Card */}
            <div className="bg-[rgb(46,46,46)] w-[16rem] h-[22rem] rounded-lg bg-clip-broder shadow-lg shadow-[rgb(36,36,36,0.5]">
                {/* Image Container */}
                <div className="h-[35%] p-4">
                    <div className={`h-full w-full rounded-lg ${styles.projectImage}`} style={{backgroundImage: `url('${image}')`}}></div>
                </div>
                {/* Info Container */}
                <div className="h-[65%] relative">
                    <div className="absolute w-[50%] h-[2px] bg-slate-200 left-1/2 -translate-x-1/2"></div>
                    <div className="absolute w-full h-full p-4">
                        {/* Project Title */}
                        <p className="text-lg font-semibold">{title}</p>
                        {/* Project Description */}
                        <div className="w-full h-12 mt-2">
                            <p className='text-xs'>{description}</p>
                        </div>
                        {/* Tech Stack */}
                        <div className='mt-6 w-full flex flex-row items-center justify-start space-x-2'>
                            <p className='text-xs font-semibold'>
                                Tech:
                            </p>
                            {
                                techStackUsed.map((tech, index) => {
                                    return (
                                        <div key={index}>
                                            <Skill
                                                iconSrc={techStack[tech].icon}
                                                hoverIconSrc={techStack[tech].iconWithTitle}
                                                altText={techStack[tech].altText}
                                                width={1.75}
                                                height={1.75}
                                                background={false}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* Project Links */}
                        <div className="mt-6 w-full flex flex-row items-center justify-center space-x-8">
                            <ProjectLinkButton iconSrc='icons/github-white.svg' title='Code'/>
                            {demoURL && <ProjectLinkButton iconSrc='icons/link-white.svg' title='Demo' />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ProjectLinkButtonProps = {
    iconSrc: string,
    title: string
}

function ProjectLinkButton({ iconSrc, title }: ProjectLinkButtonProps) {
    return (
        <div className='bg-stone-600 w-20 h-7 rounded-[0.175rem] border-stone-500 border-b-2 shadow-md shadow-[rgb(60,60,60,0.5)]'>
            <div className="h-full flex flex-row items-center justify-center space-x-2">
                <div className="w-[1.25rem] h-[1.25rem]">
                    <img src={iconSrc} alt={title} />
                </div>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}