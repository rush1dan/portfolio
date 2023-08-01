'use client'

import React from 'react'
import { AnimationControls, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export type AnimateableComponentProps = {
    animationControls?: AnimationControls,
    otherProps?: any
}

type AnimateOnViewProps = {
    Component: React.FC<AnimateableComponentProps>,
    otherProps?: any
}

export default function AnimateOnView({ Component, otherProps }: AnimateOnViewProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <Component animationControls={animationControls} otherProps={otherProps} />
        </div>
    )
}