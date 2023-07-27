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
            <div className="bg-[rgb(46,46,46)] w-[16rem] h-[22rem] rounded-lg bg-clip-broder shadow-lg shadow-[rgb(36,36,36,0.5]">
                <div className="h-[35%] p-4">
                    <div className={`h-full w-full rounded-lg ${styles.projectImage}`} style={{backgroundImage: `url('${image}')`}}></div>
                </div>
                <div className="h-[65%] relative">
                    <div className="absolute w-[50%] h-[2px] bg-slate-200 left-1/2 -translate-x-1/2"></div>
                    <div className="absolute w-full h-full p-4">
                        <p className="text-lg font-semibold">{title}</p>
                        <div className="w-full h-12 mt-2 bg-red-300">
                            <p className='text-xs'>{description}</p>
                        </div>
                        <div className='mt-6 w-full flex flex-row items-center justify-start space-x-4'>
                            <p className='text-xs'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

type TechStackIconProps = {}

function TechStackIcon({ }: TechStackIconProps) {
    return (
        <div>Icon</div>
    )
}

type ProjectLinkButtonProps = {}

function ProjectLinkButton({ }: ProjectLinkButtonProps) {
    return (
        <div>Button</div>
    )
}