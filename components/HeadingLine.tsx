import React from 'react'

type Props = {
    heading: string,
    marginPadding: string,
    lineGap: string | number,
    lineWidth: string | number
}

export default function HeadingLine({ heading, marginPadding, lineGap, lineWidth }: Props) {
    return (
        <div className="relative">
            <div className={`absolute w-full ${marginPadding}`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`absolute origin-left -translate-x-${lineGap} -scale-x-100 h-[1px] bg-slate-300 ${lineWidth} inline-block top-1/2 -translate-y-1/2`}>
                    </div>
                    <p className="text-3xl text-gray-600 font-semibold inline">{heading}</p>
                    <div className={`absolute origin-left translate-x-${lineGap} h-[1px] bg-slate-300 ${lineWidth} inline-block top-1/2 -translate-y-1/2`}>
                    </div>
                </div>
            </div>
        </div>
    )
}