import React from 'react'
import styles from './projectcardstyle.module.css'

type ProjectCardProps = {}

export default function ProjectCard({ }: ProjectCardProps) {
    return (
        <div>
            <div className="bg-[rgb(46,46,46)] w-[16rem] h-[22rem] rounded-lg bg-clip-broder overflow-hidden shadow-lg shadow-[rgb(36,36,36,0.5]">
                <div className="h-[35%] p-4">
                    <div className={`h-full w-full rounded-lg ${styles.projectImage}`}></div>
                </div>
                <div className="h-[65%] relative">
                    <div className="absolute w-[50%] h-[2px] bg-slate-200 left-1/2 -translate-x-1/2"></div>
                    <div className="absolute w-full h-full p-4">
                        <p className="text-lg font-semibold">EzEncryptor</p>
                        <div className="w-full h-12 mt-2 bg-red-300">
                            <p className='text-xs'>
                                Windows GUI program to easily encrypt/decrypt files with password
                            </p>
                        </div>
                        <div className='mt-6 w-full flex flex-row items-center justify-start'>
                            <p className='text-xs'>
                                Tech:
                            </p>
                            
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