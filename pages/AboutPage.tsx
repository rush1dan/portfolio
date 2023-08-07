'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimateOnView, { AnimateableComponentProps } from '@/components/AnimateOnView'
import HeadingLine from '@/components/HeadingLine'

type Props = {}

export default function AboutPage({ }: Props) {
    return (
        <AnimateOnView Component={AboutPageContent} />
    )
}

function AboutPageContent({ animationControls }: AnimateableComponentProps) {
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
                        marginPadding=''
                        lineWidth='w-[10vw]'
                    />

                    {/* Description */}
                    <motion.p className='pt-8 px-4 max-w-5xl font-medium text-sm md:text-base text-justify'
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
                        transition={{ duration: 0.75, delay: 0.75 }}>
                        I'm Rushidan Islam, a former game developer who is recently venturing into the world of fullstack software development.
                        I'm always enthusiastic about learning new technologies and overcoming the challenges that come as result.
                        Having skill and experience in a wide range of software development areas such as game development, desktop applications and web development,
                        allows me to analyze problems from multiple directions and come up with unique and effective solutions.
                    </motion.p>
                </section>

                {/* Experience/Education Headings Section*/}
                <div className='pt-8 w-full flex items-center justify-center space-x-[40rem] flex-row'>

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
                <motion.div className='bg-headingColor w-1 h-[36rem] origin-top flex flex-col justify-around'
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
                    <motion.div className='relative bg-headingColor w-24 h-1 origin-left'
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
                        <motion.div className='absolute left-32 h-12 -top-14 w-96'
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
                            <div className='p-4 bg-zinc-700 rounded-lg border-2 border-zinc-400 shadow-stone-900 shadow-lg'>
                                <p className='text-lg font-medium'>Game Programmer</p>
                                <p className='text-lg font-medium'>Kolpoverse Studio</p>
                                <p className='text-lg font-medium'>November, 2022 - March, 2023</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Education Middle */}
                    <motion.div className='relative bg-headingColor w-24 h-1 -scale-x-100 -translate-x-12 origin-left'
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
                        <motion.div className='absolute left-32 h-12 -top-[4.5rem] w-[32rem] -scale-x-100 text-right'
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
                            <div className='p-4 bg-zinc-700 rounded-lg border-2 border-zinc-400 shadow-stone-900 shadow-lg'>
                                <p className='text-base font-medium'>BSc in Mechanical Engineering,</p>
                                <p className='text-base font-medium'>Bangladesh University of Engineering and Technology</p>
                                <p className='text-base font-medium'>CGPA 3.45 out of 4.00</p>
                                <p className='text-base font-medium'>Attended: 2016-2021</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Experience Bottom */}
                    <motion.div className='relative bg-headingColor w-24 h-1 origin-left'
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
                        <motion.div className='absolute left-32 h-12 -top-14 w-96'
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
                            <div className='p-4 bg-zinc-700 rounded-lg border-2 border-zinc-400 shadow-stone-900 shadow-lg'>
                                <p className='text-lg font-medium'>Game Programmer</p>
                                <p className='text-lg font-medium'>Alpha Potato</p>
                                <p className='text-lg font-medium'>March, 2020 - November, 2022</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}