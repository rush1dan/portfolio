'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import HeadingLine from '@/components/HeadingLine'
import Image from 'next/image'
import { PageProps } from '@/app/page'

type AboutPageProps = {} & PageProps

export default function AboutPage({ isMobile, mediaQueries }: AboutPageProps) {
    return (
        <AnimateOnView Component={AboutPageContent} isMobile={isMobile} mediaQueries={mediaQueries} />
    )
}

function AboutPageContent({ animationControls, isMobile, mediaQueries }: AnimateableComponentProps) {
    const aciCard = <InfoCard
        info={['Software Engineer', 'ACI Limited', 'December, 2023 - Present']}
        icons={['/icons/laptop.svg', '/icons/ACI.png', '/icons/calendar.svg']}
        rightAligned={false} />

    const alphapotatoKolpoverseCard = <DualCompanyInfoCard
        infos={[['Game Programmer'], ['Alpha Potato', '==>', 'Kolpoverse Studios'], ['March, 2020 - March, 2023']]}
        icons={[['/icons/laptop.svg'], ['/icons/AlphaPotato.png', '', '/icons/Kolpoverse.png'], ['/icons/calendar.svg']]}
        rightAligned={false} />

    const buetCard = <InfoCard
        info={['BSc in Mechanical Engineering,', 'Bangladesh University of Engineering and Technology', 'CGPA 3.45 out of 4.00', 'February, 2016 - February, 2021']}
        icons={['/icons/gear.svg', '/icons/buet.png', '/icons/notebook.svg', '/icons/calendar.svg']}
        rightAligned={mediaQueries?.xl} />

    return (
        <div className='w-screen py-24'>
            {/* Main Flex Container */}
            <div className='h-full flex flex-col items-center justify-start space-y-8 max-w-7xl mx-auto'>
                {/* About Section */}
                <section className='flex flex-col items-center justify-center gap-y-8'>
                    {/* Heading */}
                    <HeadingLine
                        animationControls={animationControls}
                        heading='ABOUT'
                        lineWidth='w-[10vw]'
                        textSizeClass={mediaQueries?.xl ? undefined : 'text-2xl'}
                    />
                    {/* Description */}
                    <motion.p className='px-4 max-w-6xl font-medium text-sm md:text-base xl:text-lg text-justify'
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                            }
                        }}
                        initial="hidden"
                        animate={animationControls}
                        transition={{ duration: 0.75, delay: mediaQueries?.xl ? 0.75 : 0.25 }}>
                        I am a software engineer proficient in both frontend and backend technologies.
                        I have ample coding experience through my professional ventures and personal projects.
                        I have work experience in game development, both frontend and backend web app development and machine learning operations which makes me a well-rounded
                        software developer. Equipped with an inquisitive mind and a knack for problem solving, I am always on the lookout for learning new things and growing myself
                        as an efficient and skilled software engineer.
                    </motion.p>
                </section>

                {/* Only For XL Screens */}

                {
                    mediaQueries?.xl &&
                    <>
                        {/* Experience/Education Headings Section*/}
                        <div className='pt-4 w-full flex flex-row items-center justify-center gap-x-[8rem]'>
                            {/* Education Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EDUCATION'
                                lineWidth='w-[5vw]'
                            />
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EXPERIENCE'
                                lineWidth='w-[5vw]'
                            />
                        </div>

                        {/* Education/Experience Description Section */}
                        {/* Middle Line */}
                        <motion.div className='bg-headingColor w-1 h-[32rem] origin-top flex flex-col justify-around'
                            variants={{
                                hidden: {
                                    scaleY: 0,
                                },
                                visible: {
                                    scaleY: 1,
                                }
                            }}
                            initial="hidden"
                            animate={animationControls}
                            transition={{ duration: 0.5, delay: 0.5 }}>
                            {/* Experience Top */}
                            <motion.div className='relative bg-headingColor xl:w-24 h-1 origin-left'
                                variants={{
                                    hidden: {
                                        scaleX: 0,
                                    },
                                    visible: {
                                        scaleX: 1,
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.25, delay: 1 }}>
                                {/* Description */}
                                <motion.div className='absolute xl:left-32 h-12 -top-14 w-[32rem]'
                                    variants={{
                                        hidden: {
                                            x: 300,
                                            opacity: 0
                                        },
                                        visible: {
                                            x: 0,
                                            opacity: 1
                                        }
                                    }}
                                    initial="hidden"
                                    animate={animationControls}
                                    transition={{ duration: 0.5, delay: 1.25 }}>
                                    {aciCard}
                                </motion.div>
                            </motion.div>
                            {/* Education Middle */}
                            <motion.div className='relative bg-headingColor xl:w-24 h-1 -scale-x-100 -translate-x-12 origin-left'
                                variants={{
                                    hidden: {
                                        scaleX: 0,
                                    },
                                    visible: {
                                        scaleX: -1,
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.25, delay: 1 }}>
                                {/* Description */}
                                <motion.div className='absolute xl:left-32 h-12 -top-[4.5rem] w-[34rem] -scale-x-100 text-right'
                                    variants={{
                                        hidden: {
                                            x: 300,
                                            opacity: 0,
                                            scaleX: -1,
                                        },
                                        visible: {
                                            x: 0,
                                            opacity: 1
                                        }
                                    }}
                                    initial="hidden"
                                    animate={animationControls}
                                    transition={{ duration: 0.5, delay: 1.25 }}>
                                    {buetCard}
                                </motion.div>
                            </motion.div>
                            {/* Experience Bottom */}
                            <motion.div className='relative bg-headingColor xl:w-24 h-1 origin-left'
                                variants={{
                                    hidden: {
                                        scaleX: 0,
                                    },
                                    visible: {
                                        scaleX: 1,
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.25, delay: 1 }}>
                                {/* Description */}
                                <motion.div className='absolute xl:left-32 h-12 -top-14 w-[32rem]'
                                    variants={{
                                        hidden: {
                                            x: 300,
                                            opacity: 0
                                        },
                                        visible: {
                                            x: 0,
                                            opacity: 1
                                        }
                                    }}
                                    initial="hidden"
                                    animate={animationControls}
                                    transition={{ duration: 0.5, delay: 1.25 }}>
                                    {alphapotatoKolpoverseCard}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                }

                {/* For Screens Below XL */}

                {
                    !mediaQueries?.xl &&
                    <>
                        {/* Experience Section */}
                        <div className='pt-2 w-full flex flex-col items-center justify-center gap-y-8'>
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EXPERIENCE'
                                lineWidth='w-[5vw]'
                                textSizeClass='text-2xl'
                            />
                            <motion.div className='md:w-[32rem] w-[19rem]'
                                variants={{
                                    hidden: {
                                        x: 300,
                                        opacity: 0
                                    },
                                    visible: {
                                        x: 0,
                                        opacity: 1
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}>
                                {aciCard}
                            </motion.div>
                            <motion.div className='md:w-[32rem] w-[19rem]'
                                variants={{
                                    hidden: {
                                        x: 300,
                                        opacity: 0
                                    },
                                    visible: {
                                        x: 0,
                                        opacity: 1
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}>
                                {alphapotatoKolpoverseCard}
                            </motion.div>
                        </div>
                        {/* Education */}
                        <div className='pt-2 w-full flex flex-col items-center justify-center gap-y-8'>
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EDUCATION'
                                lineWidth='w-[5vw]'
                                textSizeClass='text-2xl'
                            />
                            <motion.div className='md:w-[32rem] w-[19rem]'
                                variants={{
                                    hidden: {
                                        x: 300,
                                        opacity: 0
                                    },
                                    visible: {
                                        x: 0,
                                        opacity: 1
                                    }
                                }}
                                initial="hidden"
                                animate={animationControls}
                                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>
                                {buetCard}
                            </motion.div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

type InfoCardProps = {
    info: string[],
    icons: string[],
    rightAligned?: boolean
}

function InfoCard({ info, icons, rightAligned }: InfoCardProps) {
    return (
        <div className='md:p-4 p-2 bg-zinc-700 rounded-lg border-2 border-zinc-400 shadow-stone-900 shadow-lg'>
            {
                info.map((data, index) => {
                    return (
                        <div key={index} className={`flex ${rightAligned ? 'flex-row-reverse' : 'flex-row'} items-center gap-x-2`}>
                            <div className='relative lg:w-6 lg:h-6 w-5 h-5 flex-none'><Image src={icons[index]} alt="" fill /></div>
                            <p className='lg:text-lg text-base font-medium'>{data}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

type DualInfoCardProps = {
    infos: string[][],
    icons: string[][],
    rightAligned?: boolean
}

function DualCompanyInfoCard({ infos, icons, rightAligned }: DualInfoCardProps) {
    return (
        <div className='md:p-4 p-2 bg-zinc-700 rounded-lg border-2 border-zinc-400 shadow-stone-900 shadow-lg'>
            {
                infos.map((infoCluster, i) => {
                    return (
                        <div key={i} className={`flex ${rightAligned ? 'flex-row-reverse' : 'flex-row'} items-center gap-x-4`}>
                            {
                                infoCluster.map((info, j) => {
                                    return (
                                        icons[i][j] ? 
                                        <div key={info} className={`flex ${rightAligned ? 'flex-row-reverse' : 'flex-row'} items-center gap-x-2`}>
                                            <div className='relative lg:w-6 lg:h-6 w-5 h-5 flex-none'><Image src={icons[i][j]} alt="" fill /></div>
                                            <p className='lg:text-lg text-base font-medium'>{info}</p>
                                            </div> :
                                            <p key={info} className='lg:text-lg text-base font-medium'>{info}</p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}