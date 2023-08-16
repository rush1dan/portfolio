import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:h-24 xl:w-24 md:h-20 md:w-20 h-16 w-16'>
            <Image src="/icons/loading.gif" alt="profile picture" fill loading='eager' />
        </div>
    )
}