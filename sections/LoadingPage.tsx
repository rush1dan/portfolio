import { useInView } from 'framer-motion';
import React, { ComponentType, useRef } from 'react'
import Loading from '@/components/Loading';
import { PageProps } from '@/app/page';

type LoadingProps = {
    loadNow?: boolean,
    Component: ComponentType<PageProps>,
} & PageProps

export default function LoadingPage({ loadNow = false, Component, isMobile, mediaQueries }: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div className='min-h-screen w-screen relative' ref={ref}>
            {
                (
                    !isInView && !loadNow ? <Loading /> : <Component isMobile={isMobile} mediaQueries={mediaQueries} />
                )
            }
        </div>
    )
}