import { useInView } from 'framer-motion';
import React, { ComponentType, useEffect, useRef } from 'react'
import Image from 'next/image';

type LoadingProps = {
    loadNow?: boolean,
    pageIndex: number,
    setPageToLoad: Function,
    Component: ComponentType<any>
}

export default function LoadingPage({ loadNow = false, pageIndex, setPageToLoad, Component }: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        setPageToLoad(pageIndex + 1);
    }, [isInView])

    return (
        <div className={`${!isInView && !loadNow ? 'min-h-screen' : ''} w-screen relative`} ref={ref}>
            {
                (
                    !isInView && !loadNow ?
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        xl:h-24 xl:w-24 md:h-20 md:w-20 h-16 w-16'>
                            <Image src="/icons/loading.gif" alt="profile picture" fill />
                        </div>
                        : <Component />
                )
            }
        </div>
    )
}