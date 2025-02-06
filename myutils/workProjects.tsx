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
        demoImg: `${demoDir}/face_recognition.gif`,
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
            systemDesignDescription: [`
                The frontend is built with C# and leverages the 3D rendering and animation capabilites of Unity. The app makes 3 sequential API calls to 3 different ML powered backend services.
                Firstly the input speech is converted to text via the Automatic Speech Recognition service, the text is then fed to the RAG powered intelligent AI chatbot to generate appropriate 
                reply, this reply is then sent to the Text To Speech service which converts the reply to audio and is then played in the client app. The ASR and TTS engines have both Bangla and English
                language capabilities. Appropriate 3D animations are played in the frontend app in the various stages of the app flow to make the app more interactive and engaging.
            `,
                "Upon changes, a C# utility function is fired from the Unity editor which creates necessary app builds for required platforms. Then the built app is sent to Dropbox triggering a local bash script or through GitHub actions on code push. The updated link to the app is sent to a Discord channel as notification for easy use."
            ]
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
        thumbnail: `${thumbnailDir}/resource_monitoring.png`,
        demoImg: `${demoDir}/resource_monitoring.png`,
        title: "Resource Monitoring and Alerting",
        overview: "Monitoring service to continuously analyze available resources on on-premise servers and create alerts on the event of a server reaching resource limits",
        serviceDetails: `The service monitors several on-premise server nodes connected in a kubernetes cluster. An hourly report is created on basis of the analysis and urgent alerts are sent in real-time to Discord channels for proper intervention`,
        technicalImplementation: {
            toolsUsed: ["Python", "Docker", "Kubernetes(microk8s)", "Discord"],
            systemDesignDescription: [
                "Python application leveraging psutil library to get resource metrics",
                "App containerized with docker",
                "Multiple on-premise server nodes are connected in a kubernetes cluster using Microk8s",
                "The container image is deployed across kubernetes cluster as a Daemonset ensuring one pod per node"
            ]
        },
        myRoles: [
            {
                heading: "Python Application",
                description: "Developing the python application to monitor resource usage"
            },
            {
                heading: "Containerization",
                description: "Building a container image of the app using docker"
            },
            {
                heading: "Kubernetes Cluster Setup and Deployment",
                description: "Setting up kubernetes cluster across several server nodes and deploying the containerized application as Daemonset in it"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "GPU detection error",
                description: "There was some trouble detecting the GPU driver on one of the machines. Solved it by editing the cluster policy and setting a driver check validator environment variable to true"
            },
            {
                heading: "Difficulty getting storage mounts and server IP",
                description: "Leveraged kubernetes downward api and volume mounting in read-only mode to solve it."
            }
        ],
        upcoming: [
            {
                heading: "Better monitoring and dashboard",
                description: "Better metric scraping with Prometheus and visual dashboard with Grafana"
            }
        ]
    },
    "weight_bridge_numberplate": {
        thumbnail: `${thumbnailDir}/truck.jpg`,
        demoImg: `${demoDir}/truck.gif`,
        title: "Weight Bridge Truck Number Plate Detection",
        overview: "Application to capture number plate details of any truck when they go over the weight machine in factories.",
        technicalImplementation: {
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "WPF", "C#", "Docker"],
            mlModelsUsed: ["YOLOv5"],
            systemDesignDescription: [
                "Currently the frontend app polls the backend number plate extraction service at fixed intervals to see if any truck is standing over the weight bridge",
                "On the backend, on every api hit the service opens the camera and reads and processes a series of frames to detect if any number plate is there utilizing yolo model. If found it sends the response to the frontend."
            ]
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI to serve the machine learning models powering the application"
            },
            {
                heading: "Deployment",
                description: "Deploying the backend service on on premise servers with Docker and ensuring availability and reliability"
            },
            {
                heading: "Frontend App",
                description: "Building the frontend desktop application with WPF framework and C#."
            },
        ],
        upcoming: [
            {
                heading: "Event based architecture",
                description: "Remove polling from frontend and implement event based message passing whenever the backend service finds a truck number plate on weight bridge"
            },
            {
                heading: "Auto capture weight",
                description: "Currently weight is captured in an old proprietary software. Plan is to integrate this weight capturing with the number plate detection service."
            }
        ]
    },
    "authentication_service": {
        thumbnail: `${thumbnailDir}/auth.jpg`,
        title: "Authentication Service",
        overview: "Authentication micro service acting as an internal authentication SAAS to easily setup authentication and authorization for any internal project.",
        serviceDetails: [
            "API service that receives request to either create, update or delete database for new projects or authentication request for a particular project",
            "Supports both header and cookie based authentication"
        ],
        technicalImplementation: {
            toolsUsed: ["Python", "FastAPI", "Uvicorn", "SQL Alchemy", "PostgreSQL", "Locust", "Nginx", "Docker"],
            systemDesignDescription: [
                "Uses jwt based authentication",
                "A single token with a session ID embedded within that is validated on the backend, preventing the need for a refresh token",
                "Uses admin level database operations to create new separate databases for different projects",
                "URL based routing to determing which project the authentication/authorization request is for"
            ]
        },
        myRoles: [
            {
                heading: "Backend API",
                description: "Designing the backend API service with Python and FastAPI and all authn/authz logic"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            },
            {
                heading: "Validation and Testing",
                description: "Load testing and validating the service with proper request to response mapping"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "Cookie based token resolution in Nginx",
                description: "Using Nginx to emulate same domain request for secure http cookie based authentication, but there is some latency issue when resolving the request inside Nginx with javascript module while load testing"
            }
        ],
        upcoming: [
            {
                heading: "Improvements",
                description: "Project still in development"
            }
        ]
    },
    "motors_service": {
        thumbnail: `${thumbnailDir}/motors.jpg`,
        title: "Bike Parts Failure Forecasting",
        overview: "Application that forecasts which motor bike parts may fail at certain mileage ranges given the bike identification number",
        serviceDetails: "Takes the chassis number of the bike as input to retrive all the data of that bike, then computes against parts failure data of that bike model to give predictions",
        technicalImplementation: {
            toolsUsed: ["Python", "Django", "Microsoft SQL Server", "Docker"],
            systemDesignDescription: [
                "Full stack application + API service built with Django",
                "Algorithmically generates predictions matching the bike data to part failure data"
            ]
        },
        myRoles: [
            {
                heading: "Database Connection",
                description: "The app was primarily made functional on static csv data. Later as per requirement, I connected the motors bike sales database to the application to work on continuously updated data"
            },
            {
                heading: "Deployment",
                description: "Deploying the service on on premise servers with Docker and ensuring availability and reliability"
            }
        ],
        challengesAndSolutions: [
            {
                heading: "Large database query latency",
                description: "Some queries took a while to compute due to the large size of the database. So, the queries that rely on data that don't change everyday, are pre-computed and cached inside the app everyday at midnight significantly reducing latency"
            }
        ]
    },
    "factory_visualization": {
        thumbnail: `${thumbnailDir}/factory.png`,
        title: "Factory Visualization",
        serviceDetails: "Makes request to internal backend data serving APIs and presents the response in an interactive 3D visual environment on the frontend app",
        overview: "Frontend application with 3D visualization of running factory processes with data like production paths, machine capacity, units produced etc.",
        technicalImplementation: {
            toolsUsed: ["Unity", "C#"]
        },
        myRoles: [
            {
                heading: "Frontend App",
                description: "Designing and developing the 3D frontend application with Unity and C#"
            }
        ]
    }
}