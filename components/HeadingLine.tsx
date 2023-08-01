'use client'

import React from 'react'
import AnimateOnView, { AnimateableComponentProps } from './AnimateOnView'
import { motion } from 'framer-motion'

type HeadingLineProps = AnimateableComponentProps & {
    heading: string,
    marginPadding: string,
    lineWidth: string | number
}

export default function HeadingLine({ animationControls, heading, marginPadding, lineWidth }: HeadingLineProps) {
    return (
        <div className="relative">
            <div className={`absolute w-full ${marginPadding}`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`absolute origin-left -translate-x-4 -scale-x-100 h-[1px] bg-slate-300 ${lineWidth} inline-block top-1/2 -translate-y-1/2`}>
                    </div>
                    <motion.p className="text-3xl text-gray-600 font-semibold inline"
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
                        transition={{ duration: 3 }} >
                        {heading}
                    </motion.p>
                    <div className={`absolute origin-left translate-x-4 h-[1px] bg-slate-300 ${lineWidth} inline-block top-1/2 -translate-y-1/2`}>
                    </div>
                </div>
            </div>
        </div>
    )
}
