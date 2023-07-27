import React from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'

type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className='h-screen snap-center'>
            <div className="h-[13%]"></div>
            <div className="flex flex-col items-center justify-start spacing-y-12 h-[87%]">
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='PROJECTS'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-8"></div>
                    <div className="w-full flex flex-row items-center justify-center">
                        <ProjectCard
                            image='https://github.com/rush1dan/file-encryptor/blob/master/Resources/FileEncryptorIcon512.png?raw=true'
                            title='EzEncryptor'
                            description='Windows GUI program to easily encrypt/decrypt files with password.'
                            techStackUsed={["python", "cpp"]}
                            gitHubURL='https://github.com/rush1dan/file-encryptor'
                        />
                    </div>
                </div>
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                </div>
            </div>
        </div>
    )
}