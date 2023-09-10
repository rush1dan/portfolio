import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type GameCardProps = {
    inView: boolean,
    title: string,
    logoSrc: string,
    demoSrc?: string,
    playStoreLink?: string,
    appStoreLink?: string,
}

export default function GameCard({ inView, title, logoSrc, demoSrc, playStoreLink, appStoreLink }: GameCardProps) {
    const [iFrameEnabled, setIFrameEnabled] = useState(false);
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                setIFrameEnabled(true);
            }, 1000);
        }
        else {
            setIFrameEnabled(true);
        }
     }, []);

    return (
        <div className='px-4 py-1'>
            <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-center space-x-2 p-2">
                    <div className="w-6 h-6 bg-cardBGColor rounded-lg overflow-hidden relative">
                        <Image src={logoSrc} alt={title} fill />
                    </div>
                    <p className="text-[0.65rem] font-semibold w-[6rem]">
                        {title}
                    </p>
                </div>

                <div className="w-[9rem] h-[16rem] bg-cardBGColor rounded-lg overflow-hidden
                    shadow-lg shadow-[rgb(36,36,36,0.5] border-2 border-cardBorderColor
                    cursor-pointer hover:border-cardHighlightColor hover:scale-[1.025] hover:shadow-2xl transition-transform duration-100 relative">
                    {   (demoSrc && iFrameEnabled) &&
                        <iframe id={title} src={`${demoSrc}?controls=0&loop=1&mute=1&autoplay=0`} loading='lazy'
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
            <div className="absolute md:w-8 w-10 md:h-8 h-10 bottom-2 hover:scale-150" style={position === Position.Left ? {left: '0.5rem'} : {right: '0.5rem'}}>
                <Image src={iconSrc} alt={altText} fill />
            </div>
        </a>
    )
}