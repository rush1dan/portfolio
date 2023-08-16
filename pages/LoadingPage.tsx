import { useInView } from 'framer-motion';
import React, { ComponentType, useRef } from 'react'
import Loading from '@/components/Loading';

type LoadingProps = {
    loadNow?: boolean,
    Component: ComponentType<any>,
}

export default function LoadingPage({ loadNow = false, Component}: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div className='min-h-screen w-screen relative' ref={ref}>
            {
                (
                    !isInView && !loadNow ? <Loading /> : <Component />
                )
            }
        </div>
    )
}