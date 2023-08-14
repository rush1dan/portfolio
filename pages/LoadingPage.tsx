import { useInView } from 'framer-motion';
import React, { ComponentType, useEffect, useRef } from 'react'
import Lottie from 'react-lottie-player';
import lottieJson from '../public/loading_lottie.json'

type LoadingProps = {
    loadNow?: boolean,
    pageIndex: number,
    setPageToLoad: Function,
    Component: ComponentType<any>
}

export default function LoadingPage({ loadNow = false, pageIndex, setPageToLoad, Component }: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 });

    useEffect(() => {
        setPageToLoad(pageIndex + 1);
    }, [isInView])

    return (
        <div className='h-screen w-screen snap-center relative' ref={ref}>
            {
                (
                    !isInView && !loadNow ?
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold'>
                            <Lottie
                                play
                                loop
                                animationData={lottieJson}
                            />
                        </p>
                        : <Component />
                )
            }
        </div>
    )
}