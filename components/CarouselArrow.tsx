import React from 'react'

export enum Direction {
    Left,
    Right
}

type ArrowProps = {
    className: string,
    direction: Direction
}

export default function CarouselArrow({ className, direction }: ArrowProps) {
    return (
        <div className={`${className} w-8 h-8 z-10 cursor-pointer`}>
            <img src={`${direction == Direction.Left ? 'icons/arrow-left.svg' : 'icons/arrow-right.svg'}`}
                alt={`${direction == Direction.Left ? 'Arrow Left' : 'Arrow Right'}`} />
        </div>
    )
}