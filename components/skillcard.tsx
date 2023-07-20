import React from 'react'

type Props = {
    iconSrc: string,
    altText?: string
}

export default function Skillcard({ iconSrc, altText }: Props) {
    return (
        <div>
            <div className='bg-slate-800 w-16 h-16 rounded-2xl overflow-clip'>
                <img src={iconSrc} alt={altText?altText:''} />
            </div>
        </div>
    )
}