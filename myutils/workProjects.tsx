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
    demoImg?: string | null,
    title: string,
    overview: string,
    serviceDetails?: string | string[] | null,
    technicalImplementation: TechnicalImplementation,
    myRoles: HeadingWithDescription[] | string[] | string,
    challengesAndSolutions?: HeadingWithDescription[] | string[] | null
    upcoming?: HeadingWithDescription[] | string[] | null
}

const thumbnailDir = "/workProjects/thumbnails"
const demoDir = "/workProjects/demo"
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
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "Streamlit", "Celery", "Qdrant", "Redis", "Rabbitmq", "Docker"],
            mlModelsUsed: ["OpenCV Haar Cascade", "RetinaFace", "Facenet512"],
            systemDesignDescription: [
                "Camera Control/Admin Service receives admin input via cli or api and sends corresponding camera start/stop events to rabbitmq fanout exchange",
                "Frame producer, Frame consumer and Result Consumer services are listeners of this event to know when to start and stop which camera",
                "Frame producer service creates worker processes as per camera/project requirements. Each worker reads frames from the camera in full resolution (upto 4k) and sends the read frames to a redis list being used as a stack at fixed intervals and generates a frame generated event for the frame consumer",
                "Frame consumer upon frame event pulls the top frame (latest frame) from the stack, downscales the image, uses a Haar cascade front filter to crop the face and map co-ordinates to the full res frame and sends the full res cropped faces to the face recognition backend service. The retrieved match responses are then sent to a fanout exchange for consumption by client applications",
                "The face recognition api service uses Celery workers to run the input images through ML models to generate embeddings and sends match responses from vector database",
                "End users/Client applications consume the result messages from the result exchange and uses them in their respective applications as required"
            ]
        },
        myRoles: [
            {
                heading: "System Design",
                description: "Coming up with a solution for proper camera feed management, handling full res frames and being able to pass on results to concerned applications in a reliable and scalable manner"
            },
            {
                heading: "Backend API",
                description: "Designing the backend API face recognition service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Validation",
                description: "Validating properties of input images on the backend to ensure proper resolution and face alignment for better recognition performance"
            },
            {
                heading: "Logging and Testing",
                description: "Running manual and automated tests to ensure everything works properly and maintaing proper server logs for debugging"
            },
            {
                heading: "Deployment",
                description: "Deploying the services on on-premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "CV2 Videocapture Pointer Lag",
                description: "Using any computation within the cv2 video capturing loop causes frame pointer lag, meaning we gradually get much older frames treated as latest. The solution was to move computations to different threads or processes as needed."
            },
            {
                heading: "False positives in recognition",
                description: "Using client side frontal filter and backend validations to find out if the input frames meet proper requirments for recognition to reduce false positives."
            },
            {
                heading: "API server locking due to GIL",
                description: "Using celery workers for ML computations to keep the api service endpoints free to receive requests at all times."
            },
            {
                heading: "Frame queue problem",
                description: "Initially the generated frames were being stored in a rabbitmq queue which meant FIFO. Therefore the most important frame which is the latest one, goes to the back of the queue and is processed last. The solution was to use a redis list as stack for storing read frames which works in LIFO fashion."
            },
            {
                heading: "Log rotation issue",
                description: "Using a rotating log file handler meant race conditions and erroneous log file rotation in multi process, microservice architecture. Solved with concurrent rotating log file handler that uses temporary locks for writing logs and checking file properties for rotation."
            },
        ],
        upcoming: [
            {
                heading: "ML Model Lifecycle Implementation",
                description: "Training pipeline and model CI/CD pipeline with MLFlow"
            },
            {
                heading: "Service monitoring",
                description: "Monitoring service metrics with Prometheus and Grafana."
            }
        ]
    },
    "virtual_assistant": {
        thumbnail: `${thumbnailDir}/virtual_assistant.jpg`,
        demoImg: `${demoDir}/virtual_assistant.gif`,
        title: "Virtual Assistant App",
        overview: "Cross platform 3D Virtual Assistant application with voice based interaction, powered by intelligent business specific knowledge enriched chat bot",
        serviceDetails: "The app receives audio input from the user, processes it through backend API calls and plays back the generated response as audio to the user, all while playing interactive animations to make the assistant more engaging.",
        technicalImplementation: {
            toolsUsed: ["Unity", "C#", "Github Actions", "Dropbox", "Discord", "Python", "Flask", "Redis"],
            systemDesignDescription: `
                The frontend is built with C# and leverages the 3D rendering and animation capabilites of Unity. The app makes 3 sequential API calls to 3 different ML powered backend services.
                Firstly the input speech is converted to text via the Automatic Speech Recognition service, the text is then fed to the RAG powered intelligent AI chatbot to generate appropriate 
                reply, this reply is then sent to the Text To Speech service which converts the reply to audio and is then played in the client app. The ASR and TTS engines have both Bangla and English
                language capabilities. Appropriate 3D animations are played in the frontend app in the various stages of the app flow to make the app more interactive and engaging.
            `
        },
        myRoles: [
            {
                heading: "Frontend Application",
                description: "Built the entire cross platform frontend application using Unity and C#"
            },
            {
                heading: "Backend Chat Session Management",
                description: "Enabled user specific chat session management on the chat bot backend service using Flask session and Redis"
            },
            {
                heading: "CI/CD Pipeline",
                description: "Built a CI/CD pipeline for easy sharing of app to concerned personnel/businesses right after development changes"
            }
        ],
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