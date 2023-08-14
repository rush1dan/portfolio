'use client'

import React from 'react'
import AnimateOnView, { AnimateableComponentProps } from './AnimateOnView'
import { motion } from 'framer-motion'

type HeadingLineProps = AnimateableComponentProps & {
    heading: string,
    lineWidth: string | number,
    textSizeClass?: string
}

export default function HeadingLine({ animationControls, heading, lineWidth, textSizeClass }: HeadingLineProps) {
    return (

        <div className={`relative w-full z-10`}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div className={`absolute origin-left -translate-x-4 -scale-x-100 h-[1px] bg-slate-300 ${lineWidth} 
                        inline-block top-1/2 -translate-y-1/2`}
                    variants={{
                        hidden: {
                            scaleX: 0,
                            translateX: "-1rem",
                        },
                        visible: {
                            scaleX: -1,
                        }
                    }}
                    initial="hidden"
                    animate={animationControls}
                    transition={{ duration: 0.5, ease: 'easeInOut' }} >
                </motion.div>
                <motion.h2 className={`${textSizeClass ?? 'text-3xl'} text-headingColor font-extrabold inline`}
                    variants={{
                        hidden: {
                            opacity: 0.5,
                        },
                        visible: {
                            opacity: 1,
                        }
                    }}
                    initial="hidden"
                    animate={animationControls}
                    transition={{ duration: 0.5 }} >
                    {heading}
                </motion.h2>
                <motion.div className={`absolute origin-left translate-x-4 h-[1px] bg-slate-300 ${lineWidth} inline-block top-1/2 -translate-y-1/2`}
                    variants={{
                        hidden: {
                            scaleX: 0,
                            translateX: "1rem"
                        },
                        visible: {
                            scaleX: 1,
                        }
                    }}
                    initial="hidden"
                    animate={animationControls}
                    transition={{ duration: 0.5, ease: 'easeInOut' }} >
                </motion.div>
            </div>
        </div>
    )
}
