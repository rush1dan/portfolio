const iconDir = "/icons/projecticons"

interface Project {
    image: string,
    title: string,
    description: string,
    techStackUsed: string[],
    gitHubURL: string,
    demoURL?: string
}

export const projectStack: Project[] = [
    { 
        image: `${iconDir}/EzEncryptorIcon.png`,
        title: "EzEncryptor",
        description: "Windows GUI program to easily encrypt/decrypt files with password",
        techStackUsed: ["python", "cpp"],
        gitHubURL: "https://github.com/rush1dan/file-encryptor",
        demoURL: "https://github.com/rush1dan/file-encryptor/releases/download/EzEncryptor-v1.0/ezencryptor_installer_v1.0.exe"
    },
    { 
        image: `${iconDir}/SubSyncIcon.png`,
        title: "Subtitle Synchronizer",
        description: "Subtitle Time-stamp Modifier GUI Program",
        techStackUsed: ["python"],
        gitHubURL: "https://github.com/rush1dan/subtitle-synchronizer",
        demoURL: "https://github.com/rush1dan/subtitle-synchronizer/releases/download/v1.0.0/SubtitleSynchronizer.exe"
    },
    { 
        image: `${iconDir}/PortfolioZoomed.png`,
        title: "Portfolio Website",
        description: "My developer portfolio website",
        techStackUsed: ["react", "tailwindcss", "typescript", "nextjs"],
        gitHubURL: "https://github.com/rush1dan/portfolio",
        demoURL: "https://rushidanislam.com"
    },
]