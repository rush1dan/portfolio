'use client'

import React from 'react'
import { AnimationControls, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import useMediaQueries from 'media-queries-in-react'
import { defaultMediaQueries } from '@/myutils/defaultMediaQueries'
import { PageProps } from '@/app/page'

export type AnimateableComponentProps = {
    animationControls?: AnimationControls,
    otherProps?: any
} & PageProps

type AnimateOnViewProps = {
    Component: React.FC<AnimateableComponentProps>,
    otherProps?: any
} & PageProps

export default function AnimateOnView({ Component, otherProps, isMobile, mediaQueries }: AnimateOnViewProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const animationControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            animationControls.start("visible");
        }
    }, [isInView, mediaQueries]);

    return (
        <div ref={ref}>
            <Component animationControls={animationControls} otherProps={otherProps} isMobile={isMobile} mediaQueries={mediaQueries} />
        </div>
    )
}