import React from "react"
import { AnimateableComponentProps } from "./AnimateOnView";
import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
    thumbnail: string | null,
    title: string,
    description: string,
    slug: string,
    lazyLoadThumbnail?: boolean
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
        <div className="w-full h-full grid grid-rows-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {
                workCardProps.map((cardProp, i) => {
                    return (
                        <div key={i} className="w-full h-full">
                            <WorkCard key={i} {...cardProp} />
                        </div>
                    )
                })
            }
            {
                divArray.map((_, i) => {
                    return (
                        <div key={i} className="w-full h-full">

                        </div>
                    )
                })
            }
        </div>
    )
}

export function WorkCard({ thumbnail, title, description, slug, lazyLoadThumbnail }: WorkCardProps) {
    return (
        <div className=" bg-cardBGColor w-full h-full rounded-lg shadow-lg shadow-[rgb(36,36,36,0.5] border-2 border-cardBorderColor
                    cursor-pointer hover:border-cardHighlightColor hover:scale-[1.025] hover:shadow-2xl transition-transform duration-100">
            <Link href={`/work/${slug}`} target="_blank" className="@container/workcard h-full w-full p-6 flex flex-col items-center justify-start gap-y-4">
                {/* Thumbnail */}
                <div className="relative xl:w-32 w-24 aspect-square object-contain">
                    <Image src={thumbnail ?? ''} alt={title ? title : ''} fill className='w-full h-full absolute object-contain' loading={lazyLoadThumbnail ? "lazy" : "eager"} />
                </div>
                {/* Title */}
                <p className="@xs/workcard:text-lg text-base font-semibold">{title}</p>
                {/* Description */}
                <p className="@sm/workcard:text-base @2xs/workcard:text-[0.9rem]/[1.2rem] text-xs text-stone-300">{description}</p>
            </Link>
        </div>
    )
}