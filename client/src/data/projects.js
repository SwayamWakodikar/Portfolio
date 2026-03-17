import yourLedgerImg from "../assets/projects_img/yourledger.png";
import vplaceImg from "../assets/projects_img/vplace.png";
import EmergencySync from "../assets/projects_img/EmergencySync.png"
export const projects = [
    {
      id: 1,
      title: "Your Ledger",
      description: "A robust financial management backend designed for high consistency and performance. Features a RESTful API for tracking complex transactions, income, and expenses with integrated JWT-based security and MongoDB indexing for optimized data retrieval.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      category: "Backend & Systems",
      status: "Completed",
      image: yourLedgerImg, 
      github: "https://github.com/SwayamWakodikar/Expense-Tracker.git",
      demo: "https://yourledger.vercel.app"
    },
    {
      id: 2,
      title: "Auth & Identity Suite",
      description: "A specialized project focused on secure identity management. Implements JWT authentication, OAuth 2.0 integration, and industry-standard password hashing (Bcrypt) to ensure secure user state management and API protection.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "OAuth", "Bcrypt"],
      category: "Backend & Systems",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600", 
      github: "https://github.com/SwayamWakodikar/Authentication-WebApp.git",
      demo: "#"
    },
    {
      id: 3,
      title: "Vplace: Architecting AI Suites",
      description: "A sophisticated platform showcasing database architecture and AI orchestration. Built for TechSprint'25, it features complex database schemas in Firestore and integrates OpenRouter API for intelligent resume optimization and ATS analysis.",
      tech: ["Next.js 15", "TypeScript", "Firebase Firestore", "NextAuth.js", "OpenRouter API", "Tailwind CSS"],
      category: "AI & Database Design",
      status: "Completed",
      image: vplaceImg,
      github: "https://github.com/SwayamWakodikar/Vplace.git",
      demo: "https://vplace.vercel.app"
    },
    
  {
  id: 4, 
  title: "Emergency Sync: Real-time Orchestration",
  description: "A mission-critical emergency response platform featuring a high-performance backend and containerized microservices. It utilizes geolocation algorithms for dynamic vehicle routing, PostgreSQL with Prisma for type-safe data management, and a custom-trained DistilBERT NLP model deployed via FastAPI in a Dockerized environment for instant incident severity prediction.",
  tech: [
    "Node.js", 
    "Express.js", 
    "Prisma", 
    "PostgreSQL", 
    "Python",
    "FastAPI",
    "Docker",
    "PyTorch",
    "TypeScript"
  ],
  category: "Distributed Systems & DevOps",
  status: "Ongoing",
  image: EmergencySync,
  github: "https://github.com/SwayamWakodikar/EmergencySync",
  demo: "https://emergency-sync.vercel.app"
}

];
