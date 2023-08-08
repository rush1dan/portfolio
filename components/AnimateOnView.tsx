'use client'

import React from 'react'
import { AnimationControls, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { MediaQuery } from '@/myutils/defaultMediaQueries'

export type AnimateableComponentProps = MediaQuery & {
    animationControls?: AnimationControls,
    otherProps?: any
}

type AnimateOnViewProps = MediaQuery & {
    Component: React.FC<AnimateableComponentProps>,
    otherProps?: any
}

export default function AnimateOnView({ Component, mediaQuery, otherProps }: AnimateOnViewProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.75 });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <Component animationControls={animationControls} mediaQuery={mediaQuery} otherProps={otherProps} />
        </div>
    )
}