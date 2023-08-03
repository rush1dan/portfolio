const iconDir = "icons/gameicons"

interface Game {
    title: string,
    iconSrc: string,
    demoSrc?: string,
    playStoreLink?: string,
    appStoreLink?: string
}

export const gameStack: Game[] = [
    {
        title: "Prank Master 3D",
        iconSrc: `${iconDir}/prankmaster.png`,
        demoSrc: "https://www.youtube.com/embed/T5vew4xCz2Y",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.prankster",
        appStoreLink: "https://apps.apple.com/us/app/prank-master-3d/id1528127833"
    },
    {
        title: "Prank Master 3D",
        iconSrc: `${iconDir}/prankmaster.png`,
        demoSrc: "https://www.youtube.com/embed/T5vew4xCz2Y",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.alphapotato.prankster",
        appStoreLink: "https://apps.apple.com/us/app/prank-master-3d/id1528127833"
    },
]