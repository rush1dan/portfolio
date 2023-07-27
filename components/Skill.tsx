import React from 'react'

export type SkillProps = {
    iconSrc: string,
    hoverIconSrc: string,
    altText: string,
    width: number,
    height: number,
    background?: boolean
}

export default function Skill({ iconSrc, altText, hoverIconSrc, width, height, background = false }: SkillProps) {
    return (
        <div>
            <div className={(!background ? 'bg-transparent ' : 'bg-slate-800 overflow-clip ') + 'rounded-2xl relative group cursor-pointer'}
                style={{ width: `${width}rem`, height: `${height}rem`}}>
                <img src={iconSrc} alt={altText ? altText : ''} className='absolute' />
                <div className="invisible bg-slate-200 p-4 rounded-lg mb-2 absolute 
                z-10 shadow-lg shadow-stone-800 group-hover:visible"
                style={{ width: `${2*width}rem`, height: `${2*height}rem`, padding: `${1}rem`, transform: `translate(${width+1}rem, -${height*0.5+0.25}rem)` }}>
                    <div className='h-full flex flex-col items-center justify-center'>
                        <img src={hoverIconSrc ? hoverIconSrc : iconSrc} alt={altText} />
                        {
                            !hoverIconSrc &&
                            <p className='text-gray-900 font-bold'>
                                {altText}
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