import React from "react"
import { AnimateableComponentProps } from "./AnimateOnView";

type WorkCardProps = {
    img: string,
    title: string,
    description: string
}

type WorkSlideProps = {
    workCardProps: WorkCardProps[],
    extraDivs: number
}

export function WorkSlide({ workCardProps, extraDivs }: WorkSlideProps) {
    const divArray = []
    for (let index = 0; index < extraDivs; index++) {
        divArray.push(0);
    }
    return (
        <div className="w-full h-full grid grid-rows-2 grid-flow-col gap-4">
            {
                workCardProps.map((cardProp, i) => {
                    return (
                        <WorkCard key={i} {...cardProp} />
                    )
                })
            }
            {
                divArray.map((_, i) => {
                    return (
                        <div key={i} className="w-full h-full bg-red-400">

                        </div>
                    )
                })
            }
        </div>
    )
}

export function WorkCard({ img, title, description }: WorkCardProps) {
    return (
        <div className="h-full w-full bg-blue-400">

        </div>
    )
}