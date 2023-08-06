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
        <div className={`${className} w-8 h-8 z-10 cursor-pointer ${direction == Direction.Left ? 'bg-green-500' : 'bg-blue-500'}`}>

        </div>
    )
}