import yourLedgerImg from "../assets/projects_img/yourledger.png";
import vplaceImg from "../assets/projects_img/vplace.png";
export const projects = [
    {
      id: 1,
      title: "Your Ledger",
      description: "YourLedger — a full-stack finance management app for tracking income, expenses, and transactions. Built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
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
      image: vplaceImg,
      github: "https://github.com/SwayamWakodikar/Vplace.git",
      demo: "https://vplace.vercel.app"
    }
];
