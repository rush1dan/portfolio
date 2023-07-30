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
                    <div className="w-6 h-6 bg-stone-500 rounded-lg overflow-hidden">
                        <img src={logoSrc} alt={title} />
                    </div>
                    <p className="text-[0.8rem] font-semibold">
                        {title}
                    </p>
                </div>

                <div className="w-[9rem] h-[16rem] bg-[rgb(46,46,46)] rounded-lg overflow-hidden
                    shadow-lg shadow-[rgb(36,36,36,0.5] border-2 border-stone-600
                    cursor-pointer hover:border-stone-300 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-100 relative">
                    {/* <img src={demoSrc} alt={`${title} demo`} className='object-contain' /> */}
                    {   demoSrc &&
                        <iframe id={title} src={`${demoSrc}?controls=0&loop=1&mute=1&autoplay=0`}
                            style={{ width: 'inherit', height: 'inherit', border: 'none' }}></iframe>
                    }
                    {
                        appStoreLink &&
                        <GameLink link={appStoreLink} iconSrc='icons/app-store.svg' altText='App Store' position={Position.Left} />
                    }
                    {
                        playStoreLink &&
                        <GameLink link={playStoreLink} iconSrc='icons/google-play.svg' altText='Google Play' position={Position.Right} />
                    }
                </div>
            </div>
        </div>
    )
}

enum Position {
    Left,
    Right
}

type GameLinkProps = {
    link: string,
    iconSrc: string,
    altText: string,
    position: Position
}

export function GameLink({ link, iconSrc, altText, position }: GameLinkProps) {
    return (
        <a href={link} target='_blank'>
            <div className="absolute w-7 h-7 bottom-2 hover:scale-150" style={position === Position.Left ? {left: '0.5rem'} : {right: '0.5rem'}}>
                <img src={iconSrc} alt={altText} />
            </div>
        </a>
    )
}