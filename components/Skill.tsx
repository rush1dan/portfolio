import React from 'react'

export type SkillProps = {
    iconSrc: string,
    altText: string,
    hoverIconSrc: string,
    hoverIconAltText: string,
    hoverTitle: string,
    background?: boolean
}

export default function Skill({ iconSrc, altText, hoverIconSrc, hoverIconAltText, hoverTitle, background = false }: SkillProps) {
    return (
        <div>
            <div className= {(!background ? 'bg-transparent ' : 'bg-slate-800 overflow-clip ') + 'w-14 h-14 rounded-2xl relative group cursor-pointer'}>
                <img src={iconSrc} alt={altText ? altText : ''} className='absolute' />
                <div className="invisible w-28 h-28 bg-slate-200 p-4 rounded-lg mb-2 absolute translate-x-[4.5rem] -translate-y-8 z-10 shadow-lg shadow-stone-800 group-hover:visible">
                    <div className='h-full flex flex-col items-center justify-center'>
                        <img src={hoverIconSrc} alt={hoverIconAltText} />
                        {
                            hoverTitle &&
                            <p className='text-gray-900 font-bold'>
                                    {hoverTitle}
                            </p>
                        }
                    </div>

                    {/* <!-- arrow --> */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-inherit"></div>
                    {/* <!-- end arrow --> */}
                </div>
            </div>
        </div>
    )
}