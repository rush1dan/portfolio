'use client'

import React from 'react'
import { AnimationControls, motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export type AnimateableComponentProps = {
    animationControls?: AnimationControls
}

type AnimateOnViewProps = {
    Component: React.FC<AnimateableComponentProps>
}

export default function AnimateOnView({ Component }: AnimateOnViewProps) {
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
            <Component animationControls={animationControls} />
        </div>
    )
}