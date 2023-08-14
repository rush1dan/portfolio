import { useInView } from 'framer-motion';
import React, { ComponentType, useRef } from 'react'

type LoadingProps = {
    Component: ComponentType<any>
}

export default function LoadingPage({ Component }: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 });

    return (
        <div className='h-screen w-screen snap-center relative' ref={ref}>
            {
                (
                    !isInView ?
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold'>
                            Loading...
                        </p>
                        : <Component />
                )
            }
        </div>
    )
}