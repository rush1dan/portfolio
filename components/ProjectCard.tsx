import React from 'react'
import styles from '../styles/projectcardstyle.module.css'
import Tech from './Tech'
import { techStack } from '@/myutils/techStack'
import Image from 'next/image'

type ProjectCardProps = {
    image: string,
    title: string,
    description: string,
    techStackUsed: string[],
    gitHubURL: string,
    demoURL?: string,
    defaultLink?: string
}

export default function ProjectCard({ image, title, description, techStackUsed, gitHubURL, demoURL, defaultLink }: ProjectCardProps) {
    return (
        <div className='px-6 py-2'>
            <a href={defaultLink ? defaultLink : gitHubURL} target='_blank'>
                {/* Main Card */}
                <div className="bg-cardBGColor w-[16rem] h-[22rem] rounded-lg shadow-lg shadow-[rgb(36,36,36,0.5] border-2 border-cardBorderColor
                    cursor-pointer hover:border-cardHighlightColor hover:scale-[1.025] hover:shadow-2xl transition-transform duration-100">
                    {/* Image Container */}
                    <div className="h-[35%] p-4">
                        <div className={`h-full w-full rounded-lg relative ${styles.projectImage}`}>
                            <Image src={image} alt="" fill objectFit='contain' />
                        </div>
                    </div>
                    {/* Info Container */}
                    <div className="h-[65%] relative">
                        <div className="absolute w-[50%] h-[2px] bg-slate-200 left-1/2 -translate-x-1/2"></div>
                        <div className="absolute w-full h-full p-4">
                            {/* Project Title */}
                            <p className="text-lg font-semibold">{title}</p>
                            {/* Project Description */}
                            <div className="w-full h-12 mt-2 text-stone-300">
                                <p className='text-xs'>{description}</p>
                            </div>
                            {/* Tech Stack */}
                            <div className='mt-3 w-full flex flex-row items-start justify-start gap-x-2 h-[1.75rem]'>
                                <p className='text-sm font-semibold'>
                                    Tech:
                                </p>
                                <div className='flex flex-wrap items-center justify-start gap-x-2 gap-y-2'>
                                    {
                                        techStackUsed.map((tech, index) => {
                                            return (
                                                <div key={index} className='flex-none'>
                                                    <Tech
                                                        iconSrc={techStack[tech].icon}
                                                        hoverIconSrc={techStack[tech].iconWithTitle}
                                                        altText={techStack[tech].altText}
                                                        width={techStackUsed.length <= 5 ? 1.75 : 1.4}
                                                        height={techStackUsed.length <= 5 ? 1.75 : 1.4}
                                                        background={false}
                                                        lazyLoadIcon={true}
                                                        lazyLoadHoverIcon={true}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* Project Links */}
                            <div className="mt-9 w-full flex flex-row items-center justify-center space-x-8">
                                <ProjectLinkButton url={gitHubURL} iconSrc='icons/github-white.svg' title='Code'/>
                                {demoURL && <ProjectLinkButton url={demoURL} iconSrc='icons/link-white.svg' title='Demo' />}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

type ProjectLinkButtonProps = {
    url: string,
    iconSrc: string,
    title: string
}

function ProjectLinkButton({ url, iconSrc, title }: ProjectLinkButtonProps) {
    return (
        <a href={url} target="_blank">
            <div className='bg-cardButtonColor w-20 h-7 rounded-[0.175rem] border-b-2 border-cardBorderColor shadow-md shadow-[rgb(60,60,60,0.5)]
            hover:border hover:border-b-[3px] hover:border-cardHighlightColor'>
                <div className="h-full flex flex-row items-center justify-center space-x-2">
                    <div className="w-[1.25rem] h-[1.25rem] relative">
                        <Image src={iconSrc} alt={title} fill />
                    </div>
                    <p>
                        {title}
                    </p>
                </div>
            </div>
        </a>
    )
}