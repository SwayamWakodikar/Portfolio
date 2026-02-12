import yourLedgerImg from "../assets/projects_img/yourledger.png";
import vplaceImg from "../assets/projects_img/vplace.png";
import EmergencySync from "../assets/projects_img/EmergencySync.png"
export const projects = [
    {
      id: 1,
      title: "Your Ledger",
      description: "YourLedger — a full-stack finance management app for tracking income, expenses, and transactions. Built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      status: "Completed",
      image: yourLedgerImg, 
      github: "https://github.com/SwayamWakodikar/Expense-Tracker.git",
      demo: "https://yourledger.vercel.app"
    },
    {
      id: 2,
      title: "Auth WebApp",
      description: "A Project Integrating JWT, OAuth on Learning Purpose.",
      tech: ["React", "MongoDB", "JWT", "OAuth", "Express", "Node.js", "Bcrypt"],
      category: "Full Stack",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600", 
      github: "https://github.com/SwayamWakodikar/Authentication-WebApp.git",
      demo: "#"
    },
    {
      id: 3,
      title: "Vplace: AI-Powered Career Suite",
      description: "Developed for TechSprint'25, a GDG on-campus hackathon. An AI-driven platform for resume generation and ATS optimization, where I spearheaded the frontend and database architecture.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Firebase Firestore", "NextAuth.js", "OpenRouter API", "ShadcnUI", "Motion"],
      category: "AI Projects",
      status: "Completed",
      image: vplaceImg,
      github: "https://github.com/SwayamWakodikar/Vplace.git",
      demo: "https://vplace.vercel.app"
    },
    {
  id: 4, 
  title: "Emergency Sync",
  description: "An ML-based emergency response platform that tracks real-time vehicle availability. It dynamically monitors emergency units and automatically allots the nearest available vehicle to new emergency incidents using geolocation algorithms.",
  tech: ["Express.js", "Node.js", "Prisma", "PostgreSQL", "Node-cron", "JavaScript", "CORS", "Dotenv"],
  category: "ML Projects",
  status: "Ongoing",
  image:EmergencySync,
  github: "https://github.com/SwayamWakodikar/EmergencySync.git",
  demo: "#" 
}
];
