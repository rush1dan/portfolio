export type HeadingWithDescription = {
    heading: string,
    description: string
}

type TechnicalImplementation = {
    systemDesignDiagram?: string | null,
    toolsUsed: string[],
    mlModelsUsed?: string[] | null,
    systemDesignDescription?: string[] | string | null
}

type WorkProject = {
    thumbnail: string,
    title: string,
    overview: string,
    serviceDetails?: string | string[] | null,
    technicalImplementation: TechnicalImplementation,
    myRoles: HeadingWithDescription[] | string[] | string,
    challengesAndSolutions?: HeadingWithDescription[] | string[] | null
    upcoming?: HeadingWithDescription[] | string[] | null
}

const thumbnailDir = "/workProjects/thumbnails"
const systemDiagramDir = "/workProjects/diagrams"

export const WorkProjects: { [key: string]: WorkProject } = {
    "face_recognition": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Face Recognition Service",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        serviceDetails: [
            "Camera admin service with CLI and API functionality to control camera feeds and route their images to corresponding face vector databases",
            "Camera feed reading and processing service that communicates with face recognition service API to get responses and store them in result queues",
            "Face recognition API service that receives a frame as input and sends match results in output"
        ],
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "virtual_assistant": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Virtual Assistant App",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "resource_monitoring": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Resource Monitoring and Alerting",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "weight_bridge_numberplate": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Weight Bridge Truck Number Plate Detection",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "authentication_service": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Authentication Service",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "motors_service": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Bike Parts Failure Forecasting",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    },
    "factory_visualization": {
        thumbnail: `${thumbnailDir}/face_recognition.jpg`,
        title: "Factory Visualization",
        overview: "Backend face recognition service for company wide person identification based applications like customer greeting in ACI motors, attendance system etc. through RTSP based CCTV cameras.",
        technicalImplementation: {
            systemDesignDiagram: `${systemDiagramDir}/fr_diagram.svg`,
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Multi-threading and later multi processing"
            }
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and CI/CD with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service performance with Prometheus and Grafana."
            }
        ]
    }
}