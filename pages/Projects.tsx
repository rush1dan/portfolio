import React from 'react'
import HeadingLine from '@/components/HeadingLine'

type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className='h-screen snap-center'>
            <div className="h-[13%]"></div>
            <div className="flex flex-col items-center justify-start spacing-y-12 h-[87%]">
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='PROJECTS'
                        marginPadding=''
                        lineGap={4}
                        lineWidth='w-[10vw]'
                    />
                </div>
                <div className="h-1/2 w-full">
                    <HeadingLine
                        heading='GAMES'
                        marginPadding=''
                        lineGap={4}
                        lineWidth='w-[10vw]'
                    />
                </div>
            </div>
        </div>
    )
}