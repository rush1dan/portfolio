'use client'

import React from 'react'
import { AnimationControls, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useMediaQueries from 'media-queries-in-react'
import { defaultMediaQueries } from '@/myutils/defaultMediaQueries'

export type AnimateableComponentProps = {
    animationControls?: AnimationControls,
    otherProps?: any
}

type AnimateOnViewProps = {
    Component: React.FC<AnimateableComponentProps>,
    otherProps?: any
}

export default function AnimateOnView({ Component, otherProps }: AnimateOnViewProps) {
    const mediaQueries = useMediaQueries(defaultMediaQueries);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.85 });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("visible");
        }
    }, [isInView, mediaQueries]);

    return (
        <div ref={ref}>
            <Component animationControls={animationControls} otherProps={otherProps} />
        </div>
    )
}