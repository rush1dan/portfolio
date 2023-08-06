const iconDir = "icons/projecticons"

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
        image: `${iconDir}/EzEncryptorIcon.png`,
        title: "EzEncryptor",
        description: "Windows GUI program to easily encrypt/decrypt files with password",
        techStackUsed: ["python", "cpp"],
        gitHubURL: "https://github.com/rush1dan/file-encryptor",
        demoURL: "https://github.com/rush1dan/file-encryptor/releases/download/EzEncryptor-v1.0/ezencryptor_installer_v1.0.exe"
    },
    { 
        image: `${iconDir}/EzEncryptorIcon.png`,
        title: "EzEncryptor",
        description: "Windows GUI program to easily encrypt/decrypt files with password",
        techStackUsed: ["python", "cpp"],
        gitHubURL: "https://github.com/rush1dan/file-encryptor",
        demoURL: "https://github.com/rush1dan/file-encryptor/releases/download/EzEncryptor-v1.0/ezencryptor_installer_v1.0.exe"
    }
]