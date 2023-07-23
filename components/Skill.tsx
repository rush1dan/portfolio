import React from 'react'

export type SkillProps = {
    iconSrc: string,
    altText?: string
}

export default function Skill({ iconSrc, altText }: SkillProps) {
    return (
        <div>
            <div className='bg-slate-800 w-14 h-14 rounded-2xl overflow-clip'>
                <img src={iconSrc} alt={altText?altText:''} />
            </div>
        </div>
    )
}