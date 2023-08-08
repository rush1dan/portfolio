'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import HeadingLine from '@/components/HeadingLine'
import { defaultMediaQueries, MediaQueryDefault } from '@/myutils/defaultMediaQueries'
import useMediaQueries from 'media-queries-in-react'

type AboutPageProps = {}

export default function AboutPage({ }: AboutPageProps) {
    return (
        <AnimateOnView Component={AboutPageContent} />
    )
}

function AboutPageContent({ animationControls }: AnimateableComponentProps) {
    const mediaQueries: MediaQueryDefault = useMediaQueries(defaultMediaQueries);

    const kolpoverseCard = <InfoCard
        info={['Game Programmer', 'Kolpoverse Studios', 'November, 2022 - March, 2023']}
        icons={['icons/laptop.svg', 'icons/Kolpoverse.png', 'icons/calendar.svg']}
        rightAligned={false} />

    const alphapotatoCard = <InfoCard
        info={['Game Programmer', 'Alpha Potato', 'March, 2020 - November, 2022']}
        icons={['icons/laptop.svg', 'icons/AlphaPotato.png', 'icons/calendar.svg']}
        rightAligned={false} />

    const buetCard = <InfoCard
        info={['BSc in Mechanical Engineering,', 'Bangladesh University of Engineering and Technology', 'CGPA 3.45 out of 4.00', 'February, 2016 - February, 2021']}
        icons={['icons/gear.svg', 'icons/buet.png', 'icons/notebook.svg', 'icons/calendar.svg']}
        rightAligned={mediaQueries.xl} />

    return (
        <div className='h-screen snap-center'>
            <div className="h-24"></div>
            {/* Main Flex Container */}
            <div className='h-full flex flex-col items-center justify-start space-y-8'>

                {/* About Section */}
                <section className='flex flex-col items-center justify-center'>

                    {/* Heading */}
                    <HeadingLine
                        animationControls={animationControls}
                        heading='ABOUT'
                        marginPadding='mt-4'
                        lineWidth='w-[10vw]'
                        textSizeClass={mediaQueries.xl ? undefined : 'text-2xl' }
                    />

                    {/* Description */}
                    <motion.p className='xl:pt-14 pt-8 px-4 max-w-6xl font-medium text-sm md:text-base text-justify'
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
                        transition={{ duration: 0.75, delay: mediaQueries.xl ? 0.75 : 0.25 }}>
                        I'm Rushidan Islam, a former game developer who is recently venturing into the world of fullstack software development.
                        I'm always enthusiastic about learning new technologies and overcoming the challenges that come as a result.
                        Having skill and experience in a wide range of software development areas such as game development, desktop applications and web development,
                        allows me to analyze problems from multiple directions and come up with unique and effective solutions.
                    </motion.p>
                </section>

                {/* Only For XL Screens */}
                
                {
                    mediaQueries.xl &&
                    <>
                        {/* Experience/Education Headings Section*/}
                        <div className='pt-4 w-full flex items-center justify-center xl:space-x-[40rem] flex-row'>
                            {/* Education Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EDUCATION'
                                marginPadding=''
                                lineWidth='w-[5vw]'
                            />
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EXPERIENCE'
                                marginPadding=''
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
                                <motion.div className='absolute xl:left-32 h-12 -top-14 w-96'
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
                                    {kolpoverseCard}
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
                                <motion.div className='absolute xl:left-32 h-12 -top-14 w-96'
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
                                    {alphapotatoCard}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                }

                {/* For Screens Below XL */}

                {
                    !mediaQueries.xl &&
                    <>
                        {/* Experience Section */}
                        <div className='pt-2 w-full flex flex-col items-center justify-center gap-y-8'>
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EXPERIENCE'
                                marginPadding=''
                                lineWidth='w-[5vw]'
                                textSizeClass='text-2xl'
                            />
                            <div className='md:w-[32rem] w-[19rem]'>
                                {kolpoverseCard}
                            </div>
                            <div className='md:w-[32rem] w-[19rem]'>
                                {alphapotatoCard}
                            </div>
                        </div>
                        {/* Education */}
                        <div className='pt-2 w-full flex flex-col items-center justify-center gap-y-8'>
                            {/* Experience Heading */}
                            <HeadingLine
                                animationControls={animationControls}
                                heading='EDUCATION'
                                marginPadding=''
                                lineWidth='w-[5vw]'
                                textSizeClass='text-2xl'
                            />
                            <div className='md:w-[32rem] w-[19rem]'>
                                {buetCard}
                            </div>
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
                            <img src={icons[index]} alt="" className='lg:w-6 lg:h-6 w-5 h-5' />
                            <p className='lg:text-lg text-base font-medium'>{data}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}