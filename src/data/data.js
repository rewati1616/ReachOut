export const personalInfo = {
  name: "Rewati Warhade",
  role: "Full Stack Developer",
  location: "Pune, India",
  email: "rmwar23@gmail.com",
  github: "rewati1616",
  bio: "Fresh Computer Science Engineer graduated in 2025, specializing in MERN stack development. Passionate about building scalable web applications and solving real-world problems through code. Ready to contribute to innovative projects and grow with a dynamic team.",
  resume: "#" // Add resume link later
};

export const skills = {
  languages: ["JavaScript", "C++", "Python", "HTML5", "CSS3", "SQL"],
  frontend: ["React.js", "Tailwind CSS", "Bootstrap", "Material-UI", "Redux", "React Router"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  databases: ["MongoDB", "MySQL", "Firebase"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack", "Vite"],
  other: ["Data Structures", "Algorithms", "Responsive Design", "Agile Methodology"]
};

export const projects = [
  {
    id: 1,
    title: "TaskFlow - Smart Task Manager",
    description: "A full-stack task management application with real-time updates, priority sorting, and collaborative features. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    features: [
      "Real-time task updates using Socket.io",
      "User authentication with JWT",
      "Drag-and-drop task organization",
      "Project collaboration and team management",
      "Advanced filtering and search"
    ],
    github: "https://github.com/rewati1616/Task-Manager",
    demo: "https://to-do-list-rewatimw.netlify.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
  },
  {
    id: 2,
    title: "8 Puzzle Game",
    description: "A classic 8-puzzle game where players solve the puzzle by sliding tiles into the correct position.",
    techStack: ["HTML", "CSS", "Javascript"],
    features: [
        "Interactive tile movement",
        "Puzzle solving logic",
        "User-friendly interface"
    ],
    github: "https://github.com/rewati1616/8-PuzzleGame",
    demo: "https://graceful-concha-1fe3fc.netlify.app/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 3,
    title: "ChatHub - Real-Time Messaging",
    description: "Real-time chat application with private messaging, group chats, and media sharing. Built with WebSocket technology for instant message delivery and online status tracking.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    features: [
      "Instant messaging with Socket.io",
      "Private and group chat rooms",
      "Image and file sharing",
      "Online/offline status indicators",
      "Message notifications"
    ],
    github: "https://github.com/rewati1616/-realtime-chat-app",
    demo: "#",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80"
  },
  {
    id: 4,
    title: "WeatherNow - Weather Dashboard",
    description: "Interactive weather dashboard providing current conditions, 7-day forecasts, and weather alerts. Features geolocation support and multiple city tracking with beautiful data visualizations.",
    techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Axios"],
    features: [
      "Current weather and 7-day forecast",
      "Geolocation-based weather detection",
      "Multiple city tracking",
      "Weather data visualizations",
      "Responsive and intuitive UI"
    ],
    github: "https://github.com/rewati1616/Weather-Forecasting",
    demo: "https://weatherforecasting-rewatimw.netlify.app/",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
  }
];

export const experience = [
   {
    id: 2,
    role: "Full Stack Developer",
    company: "Apriden Pvt. Ltd.",
    period: "Jun 2026 – Present",
    description:
      "Working as a Full Stack Developer, designing and developing recruitment management solutions, REST APIs, and scalable web applications while collaborating with cross-functional teams.",
    achievements: [
      "Developed and maintained a Recruitment Management System (ATS).",
      "Built responsive user interfaces using React.js and Tailwind CSS.",
      "Designed and developed REST APIs using Node.js and Express.js.",
      "Integrated MySQL database with optimized queries and backend services.",
      "Implemented resume upload, search, duplicate detection, and candidate management features.",
      "Worked on deployment, debugging, and production issue resolution using cPanel and Linux servers.",
      "Collaborated with recruiters and stakeholders to deliver new features and improvements."
    ]
  },
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "ProAzure Software Solution Pvt. Ltd",
    period: "Jan 2025 - Oct 2025",
    description: "Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 3 client projects using React and Node.js",
      "Optimized database queries reducing load time by 40%",
      "Implemented responsive designs for mobile compatibility"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/rewati1616",
  linkedin: "https://www.linkedin.com/in/rewati-warhade-32521a23a/", 
  twitter: "https://x.com/RewatiWarhade", 
  email: "mailto:rmwar23@gmail.com"
};
