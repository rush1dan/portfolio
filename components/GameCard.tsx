import React from 'react'

type GameCardProps = {
    title: string,
    logoSrc: string,
    demoSrc?: string,
    playStoreLink?: string,
    appStoreLink?: string,
}

export default function GameCard({ title, logoSrc, demoSrc, playStoreLink, appStoreLink }: GameCardProps) {
    return (
        <div>
            <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-center space-x-2 p-2">
                    <div className="w-6 h-6 bg-stone-500 border-2 border-stone-200 rounded-lg  overflow-hidden">
                        <img src={logoSrc} alt={title} />
                    </div>
                    <p className="text-[0.8rem] font-semibold">
                        {title}
                    </p>
                </div>

                <a href={playStoreLink ? playStoreLink : ''} target='_blank'>
                    <div className="w-[9rem] h-[16rem] bg-[rgb(46,46,46)] rounded-lg overflow-hidden
                        shadow-lg shadow-[rgb(36,36,36,0.5] border-2 border-stone-600
                        cursor-pointer hover:border-stone-300 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-100">
                    </div>
                </a>
            </div>
        </div>
    )
}