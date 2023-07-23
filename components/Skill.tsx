import React from 'react'

export type SkillProps = {
    iconSrc: string,
    altText?: string
    background?: boolean 
}

export default function Skill({ iconSrc, altText, background = false }: SkillProps) {
    return (
        <div>
            <div className= {(!background ? 'bg-transparent ' : 'bg-slate-800 overflow-clip ') + 'w-14 h-14 rounded-2xl'}>
                <img src={iconSrc} alt={altText?altText:''} />
            </div>
        </div>
    )
}