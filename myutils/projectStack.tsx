const iconDir = "/icons/projecticons"

interface Project {
    image: string,
    title: string,
    description: string,
    techStackUsed: string[],
    gitHubURL: string,
    demoURL?: string,
    defaultLink?: string
}

export const projectStack: Project[] = [
    { 
        image: `${iconDir}/PortfolioZoomed.png`,
        title: "Portfolio Website",
        description: "My developer portfolio website",
        techStackUsed: ["nextjs", "react", "typescript", "tailwindcss"],
        gitHubURL: "https://github.com/rush1dan/portfolio",
        demoURL: "http://rushidanislam.com",
        defaultLink: "http://rushidanislam.com"
    },
    { 
        image: `${iconDir}/VehicleTrackingThumbnail.png`,
        title: "Tracky",
        description: "Realtime Vehicle Tracking App",
        techStackUsed: ["nextjs", "react", "redux", "javascript", "tailwindcss", "socketio", "nodejs"],
        gitHubURL: "https://github.com/rush1dan/vehicle-tracking",
        demoURL: "https://vehicle-tracking-rush1dan.vercel.app",
        defaultLink: "https://vehicle-tracking-rush1dan.vercel.app"
    },
    { 
        image: `${iconDir}/ReactDotNetCRUD.png`,
        title: "Full Stack CRUD App",
        description: "Simple full stack CRUD application",
        techStackUsed: ["react", "javascript", "css", "dotnetcore", "postgresql", "docker"],
        gitHubURL: "https://github.com/rush1dan/react-dotnet-CRUD",
        demoURL: "https://rush1dan-react-dotnet-crud.onrender.com",
        defaultLink: "https://rush1dan-react-dotnet-crud.onrender.com"
    },
    { 
        image: `${iconDir}/EzEncryptorIcon.png`,
        title: "EzEncryptor",
        description: "Windows GUI program to easily encrypt/decrypt files with password",
        techStackUsed: ["python", "cpp"],
        gitHubURL: "https://github.com/rush1dan/file-encryptor",
        demoURL: "https://github.com/rush1dan/file-encryptor/releases/download/EzEncryptor-v1.0/ezencryptor_installer_v1.0.exe",
        defaultLink: "https://github.com/rush1dan/file-encryptor"
    },
    { 
        image: `${iconDir}/SubSyncIcon.png`,
        title: "Subtitle Synchronizer",
        description: "Subtitle Time-stamp Modifier GUI Program",
        techStackUsed: ["python"],
        gitHubURL: "https://github.com/rush1dan/subtitle-synchronizer",
        demoURL: "https://github.com/rush1dan/subtitle-synchronizer/releases/download/v1.0.0/SubtitleSynchronizer.exe",
        defaultLink: "https://github.com/rush1dan/subtitle-synchronizer"
    },
]