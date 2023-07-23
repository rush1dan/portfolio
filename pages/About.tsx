'use client'

import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {}

export default function About({ }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const revealAnimationControls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            revealAnimationControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='h-screen snap-center'>
            
            {/* Main Flex Container */}
            <div className='h-full p-24 flex flex-col items-center justify-start space-y-8'>
                
                {/* About Section */}
                <section className='flex flex-col items-center justify-center'>
                    
                    {/* Heading */}
                    <motion.h1 className='text-3xl font-bold text-gray-600'
                        variants={{
                            hidden: {
                                y: -200,
                                opacity: 0,
                            },
                            visible: {
                                y: 0,
                                opacity: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.75}}>
                        About
                    </motion.h1>

                    {/* Description */}
                    <motion.p className='text-sm pt-4 px-12'
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.75, delay: 0.75}}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </motion.p>
                </section>

                {/* Experience/Education Headings Section*/}
                <div className='w-full flex flex-col items-center justify-around md:flex-row'>
                    
                    {/* Education Heading */}
                    <motion.div
                        variants={{
                            hidden: {
                                x: -500,
                                opacity: 0,
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.75}}>
                        <h1 className='text-3xl font-bold text-gray-600'>Education</h1>
                    </motion.div>

                    {/* Experience Heading */}
                    <motion.div
                        variants={{
                            hidden: {
                                x: 500,
                                opacity: 0,
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.75}}>
                        <h1 className='text-3xl font-bold text-gray-600'>Experience</h1>
                    </motion.div>
                </div>
                
                {/* Education/Experience Description Section */}
                
                {/* Middle Line */}
                <motion.div className='bg-gray-600 w-1 h-[48rem] origin-top flex flex-col justify-around'
                    variants={{
                        hidden: {
                            scaleY: 0,
                        },
                        visible: {
                            scaleY: 1,
                        }
                    }}
                    initial="hidden"
                    animate={revealAnimationControls}
                    transition={{duration: 0.5, delay: 0.5}}>
                    
                    {/* Experience Top */}
                    <motion.div className='relative bg-gray-600 w-12 h-1 origin-left'
                        variants={{
                            hidden: {
                                scaleX: 0,
                            },
                            visible: {
                                scaleX: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.25, delay: 1}}>
                        
                        {/* Description */}
                        <motion.div className='absolute left-16 h-12 -top-8 w-96'
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
                            animate={revealAnimationControls}
                            transition={{duration: 0.5, delay: 1.25}}>
                            <p>Game Programmer</p>
                            <p>Kolpoverse Studio</p>
                            <p>November, 2022 - March, 2023</p>
                        </motion.div>
                    </motion.div>

                    {/* Education Middle */}
                    <motion.div className='relative bg-gray-600 w-12 h-1 -scale-x-100 -translate-x-12 origin-left'
                        variants={{
                            hidden: {
                                scaleX: 0,
                            },
                            visible: {
                                scaleX: -1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.25, delay: 1}}>
                        
                        {/* Description */}
                        <motion.div className='absolute left-16 h-12 -top-12 w-[26rem] -scale-x-100 text-right'
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
                            animate={revealAnimationControls}
                            transition={{duration: 0.5, delay: 1.25}}>
                            <p>BSc in Mechanical Engineering,</p>
                            <p>Bangladesh University of Engineering and Technology</p>
                            <p>CGPA 3.45 out of 4.00</p>
                            <p>Attended: 2016-2021</p>
                        </motion.div>
                    </motion.div>

                    {/* Experience Bottom */}
                    <motion.div className='relative bg-gray-600 w-12 h-1 origin-left'
                        variants={{
                            hidden: {
                                scaleX: 0,
                            },
                            visible: {
                                scaleX: 1,
                            }
                        }}
                        initial="hidden"
                        animate={revealAnimationControls}
                        transition={{duration: 0.25, delay: 1}}>
                        
                        {/* Description */}
                        <motion.div className='absolute left-16 h-12 -top-8 w-96'
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
                            animate={revealAnimationControls}
                            transition={{duration: 0.5, delay: 1.25}}>
                            <p>Game Programmer</p>
                            <p>Alpha Potato</p>
                            <p>March, 2020 - November, 2022</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}