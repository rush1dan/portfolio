import React from 'react'
import HeadingLine from '@/components/HeadingLine'
import ProjectCard from '@/components/ProjectCard'
import GameCard from '@/components/GameCard'

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
                            demoURL='https://github.com/rush1dan/file-encryptor/releases/download/EzEncryptor-v1.0/ezencryptor_installer_v1.0.exe'
                        />
                    </div>
                </div>
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='GAMES'
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />
                    <div className="h-6"></div>
                    <div className="w-full flex flex-row items-center justify-center">
                        <GameCard 
                            title='Prank Master 3D'
                            logoSrc='icons/gameicons/prankmaster.png'
                            demoSrc='https://www.youtube.com/embed/T5vew4xCz2Y'
                            playStoreLink='https://play.google.com/store/apps/details?id=com.alphapotato.prankster&hl=en&gl=US'
                            appStoreLink='https://apps.apple.com/us/app/prank-master-3d/id1528127833'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}