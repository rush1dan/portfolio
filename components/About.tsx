'use client'

import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {}

export default function About({ }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const slideInControls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            slideInControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='h-screen snap-center'>
            
            {/* Main Flex Container */}
            <div className='h-full p-24 flex flex-col items-center justify-start space-y-8'>
                
                {/* About Section */}
                <section className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-gray-600'>About</h1>
                    <p className='text-sm px-12'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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
                        animate={slideInControls}
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
                        animate={slideInControls}
                        transition={{duration: 0.75}}>
                        <h1 className='text-3xl font-bold text-gray-600'>Experience</h1>
                    </motion.div>
                </div>
                
                {/* Education/Experience Description Section */}
                <div className='bg-gray-600 w-1 h-[48rem] top-0 flex flex-col justify-around'>
                    <div className='relative bg-gray-600 w-12 h-1'>
                        <div className='absolute left-16 h-12 -top-8 w-96'>
                            <p>Game Programmer</p>
                            <p>Kolpoverse Studio</p>
                            <p>November, 2022 - March, 2023</p>
                        </div>
                    </div>
                    <div className='relative bg-gray-600 w-12 h-1 -scale-x-100 -translate-x-12'>
                        <div className='absolute left-16 h-12 -top-12 w-[26rem] -scale-x-100 text-right'>
                            <p>BSc in Mechanical Engineering,</p>
                            <p>Bangladesh University of Engineering and Technology</p>
                            <p>CGPA 3.45 out of 4.00</p>
                            <p>Attended: 2016-2021</p>
                        </div>
                    </div>
                    <div className='relative bg-gray-600 w-12 h-1'>
                        <div className='absolute left-16 h-12 -top-8 w-96'>
                            <p>Game Programmer</p>
                            <p>Alpha Potato</p>
                            <p>March, 2020 - November, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}