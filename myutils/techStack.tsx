const iconDir = "/techicons"
const iconWithTitleDir = "/techicons/withtitle"

interface TechStack {
  [key: string]: {
    icon: string,
    iconWithTitle: string,
    altText: string
  };
}

export const techStack: TechStack = {
  "html": { icon: `${iconDir}/html5.svg`, iconWithTitle: `${iconWithTitleDir}/html5.svg`, altText: "HTML" },
  "css": { icon: `${iconDir}/css3.svg`, iconWithTitle: `${iconWithTitleDir}/css3.svg`, altText: "CSS" },
  "tailwindcss": { icon: `${iconDir}/tailwindcss.svg`, iconWithTitle: `${iconWithTitleDir}/tailwindcss.svg`, altText: "TailwindCSS" },
  "javascript": { icon: `${iconDir}/javascript.svg`, iconWithTitle: "", altText: "JavaScript" },
  "typescript": { icon: `${iconDir}/typescript.svg`, iconWithTitle: "", altText: "TypeScript" },
  "nextjs": { icon: `${iconDir}/nextjs.svg`, iconWithTitle: `${iconWithTitleDir}/nextjs.svg`, altText: "Next.js" },
  "react": { icon: `${iconDir}/react.svg`, iconWithTitle: `${iconWithTitleDir}/react.svg`, altText: "React" },
  "redux": { icon: `${iconDir}/redux.svg`, iconWithTitle: "", altText: "Redux" },
  "flutter": { icon: `${iconDir}/flutter.svg`, iconWithTitle: "", altText: "Flutter" },

  "nodejs": { icon: `${iconDir}/nodejs.svg`, iconWithTitle: `${iconWithTitleDir}/nodejs.svg`, altText: "Node.js" },
  "expressjs": { icon: `${iconDir}/expressjs.svg`, iconWithTitle: `${iconWithTitleDir}/expressjs.svg`, altText: "ExpressJS" },
  "socketio": { icon: `${iconDir}/socketio.svg`, iconWithTitle: `${iconWithTitleDir}/socketio.svg`, altText: "SocketIO" },
  "nextauth": {icon: `${iconDir}/nextauth.png`, iconWithTitle: "", altText: "Next-Auth"},
  "mongodb": { icon: `${iconDir}/mongodb.svg`, iconWithTitle: `${iconWithTitleDir}/mongodb.svg`, altText: "MongoDB" },
  "django": { icon: `${iconDir}/django.svg`, iconWithTitle: `${iconWithTitleDir}/django.svg`, altText: "Django" },
  "postgresql": { icon: `${iconDir}/postgresql.svg`, iconWithTitle: `${iconWithTitleDir}/postgresql.svg`, altText: "PostgreSQL" },
  "dotnetcore": { icon: `${iconDir}/dotnetcore.svg`, iconWithTitle: "", altText: ".NET Core" },
  "microsoft-sql-server": { icon: `${iconDir}/microsoft-sql-server.svg`, iconWithTitle: `${iconWithTitleDir}/microsoft-sql-server.svg`, altText: "MS Sql Server" },
  "docker": { icon: `${iconDir}/docker.svg`, iconWithTitle: `${iconWithTitleDir}/docker.svg`, altText: "Docker" },
  "rabbitmq": { icon: `${iconDir}/rabbitmq.svg`, iconWithTitle: `${iconWithTitleDir}/rabbitmq.svg`, altText: "RabbitMQ" },
  "nginx": { icon: `${iconDir}/nginx.svg`, iconWithTitle: `${iconWithTitleDir}/nginx.svg`, altText: "Nginx" },
  
  "unity": { icon: `${iconDir}/unity_white.svg`, iconWithTitle: `${iconWithTitleDir}/unity_black.svg`, altText: "Unity" },
  "blender": { icon: `${iconDir}/blender.svg`, iconWithTitle: `${iconWithTitleDir}/blender.svg`, altText: "Blender" },
  
  "cpp": { icon: `${iconDir}/cpp.svg`, iconWithTitle: "", altText: "C++" },
  "csharp": { icon: `${iconDir}/csharp.svg`, iconWithTitle: "", altText: "C#" },
  "python": { icon: `${iconDir}/python.svg`, iconWithTitle: `${iconWithTitleDir}/python.svg`, altText: "Python" },
}