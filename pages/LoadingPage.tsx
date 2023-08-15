import { useInView } from 'framer-motion';
import React, { ComponentType, useEffect, useRef } from 'react'
import Image from 'next/image';
import { Pages } from '@/app/page';

type LoadingProps = {
    loadNow?: boolean,
    thisPage: Pages,
    setPageToLoad: Function,
    Component: ComponentType<any>,
    isMobile: boolean,
}

export default function LoadingPage({ loadNow = false, thisPage, setPageToLoad, Component, isMobile }: LoadingProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (!isMobile) {
            if (isInView) {
                let pageToLoad: Pages = Pages.None;
                switch (thisPage) {
                    case Pages.Home:
                        pageToLoad = Pages.About;
                        break;
                    case Pages.About:
                        pageToLoad = Pages.Skills;
                    case Pages.Skills:
                        pageToLoad = Pages.Contact;
                    default:
                        break;
                }
                setPageToLoad(pageToLoad);
            }
        }
    }, [isInView])

    return (
        <div className={`${!isInView && !loadNow ? 'min-h-screen' : 'min-h-[24rem]'} w-screen relative`} ref={ref}>
            {
                (
                    !isInView && !loadNow ?
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        xl:h-24 xl:w-24 md:h-20 md:w-20 h-16 w-16'>
                            <Image src="/icons/loading.gif" alt="profile picture" fill loading='eager' />
                        </div>
                        : <Component />
                )
            }
        </div>
    )
}