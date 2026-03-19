export const METADATA = {
  author: "Pranav Kumar",
  title: "Portfolio | Pranav Kumar",
  description:
    "Pranav Kumar is a passionate Full-Stack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@PranavMeht28577",
  keywords: [
    "Pranav Kumar",
    "Full-Stack Engineer",
    "React Native Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "/profile.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Certificates",
    ref: "certificates",
  },
  {
    name: "Achievements",
    ref: "achievements",
  },
  {
    name: "Training",
    ref: "training",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Aspiring Full-Stack Engineer",
  "Building impactful products for the web",
  "Designing modern, elegant, and performant applications",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: pranavmehta192@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/pranavkumar37/",
  },
  {
    name: "github",
    url: "https://github.com/pranavmehta95",
  },
  {
    name: "twitter",
    url: "https://x.com/PranavMeht28577",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "java",
    "python",
  ],
  librariesAndFrameworks: [
    "html",
    "css",
    "nodejs",
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
  ],
  databases: ["mysql", "postgresql", "mongodb"],
  other: ["git", "github"],
  softSkills: [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Adaptability",
  ],
};

export const PROJECTS = [
  {
    name: "StudyAI",
    imageKey: "studyai",
    description: "AI Smart Study Companion is a full‑stack web app that turns your study materials into interactive, AI‑powered learning experiences. Users can upload PDFs, and the system uses Google Gemini to generate concise summaries, structured notes, quizzes (MCQ + open‑ended with AI feedback), viva-style question sessions, flashcards, and semantic search over the content. The frontend is built with React + Vite, while the backend uses Node.js, Express, MongoDB, JWT auth, and pdf‑parse for text extraction, providing a cohesive platform for personalized, data‑driven studying.",
    gradient: ["#1e1b4b", "#0f172a"], // dark purple to slate
    url: "https://ai-smart-study-companion.vercel.app/",
    tech: ["react", "nodejs", "mongodb", "javascript"],
  },
  {
    name: "QRify",
    imageKey: "qrify",
    description: "QRify is a full‑stack URL shortening and dynamic QR code generator that lets users create, manage, and track QR codes with authentication, dashboards, and redirect handling for expired or inactive links.",
    gradient: ["#2563eb", "#1e40af"],
    url: "https://qrify-f5lv.onrender.com/",
    tech: ["react", "nodejs", "mongodb", "javascript"],
  },
  {
    name: "Personal Expense Tracker",
    imageKey: "petv",
    description: "Developed a Java desktop application, Personal Expense Tracker, that allows users to log daily expenses, store them in a local data file, and review their spending history through a simple, menu-driven interface. This project demonstrates object-oriented design, file handling in Java, and building a basic CLI-based financial utility.",
    gradient: ["#4b5563", "#1f2937"], // dark gray colors
    url: "https://github.com/pranavmehta95/PETV-project",
    tech: [],
  },
];

export const CERTIFICATES = [
  {
    name: "Cloud Computing | NPTEL",
    url: "https://drive.google.com/file/d/1wx3C9bseDe8yG5nyTm03gCZxbWfY5FQg/view?usp=sharing",
  },
  {
    name: "FreecodeCamp",
    url: "https://drive.google.com/file/d/1V81GJWa5UYdGNuPQFPsFHfNMBJ4u-DT3/view?usp=sharing",
  },
];

export const EDUCATION_METADATA = [
  {
    institution: "Lovely Professional University, Phagwara",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.71",
    period: "August 2023 - July 2027",
  },
  {
    institution: "School Of Creative Learning, Patna",
    degree: "Intermediate",
    score: "Percentage: 78%",
    period: "April 2019 - March 2021",
  },
  {
    institution: "S.R.S.V.M Forbesganj, Bihar",
    degree: "Matriculation",
    score: "Percentage: 83%",
    period: "April 2018 - March 2019",
  }
];

export const ACHIEVEMENTS = [
  {
    title: "3rd Position in Hackathon",
    description: "Secured 3rd position in hackathon as part of a team.",
    url: "https://drive.google.com/file/d/1GL8ysvlloWOVHeXF45lgPXW8i-03LJZs/view?usp=sharing"
  },
  {
    title: "Competitive Programming",
    description: "Solved 150+ LeetCode problems"
  }
];

export const TRAINING_CONTENTS = {
  CSE_PATHSHALA: [
    {
      title: "Full-Stack Development",
      description: "Completed an intensive Java Bootcamp (LeetCode–Codeforces Edition) focused on problem-solving and full-stack development fundamentals. Gained hands-on experience in building scalable applications and strengthening core programming concepts with a performance-driven approach.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Building end-to-end scalable web applications
        </div>
      ),
    },
    {
      title: "Architecture & Problem Solving",
      description: "Developed strong expertise in data structures, algorithms, and backend logic through competitive coding platforms like LeetCode and Codeforces. Enhanced understanding of efficient system design, optimization techniques, and real-world problem-solving strategies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4 text-center">
          Modern Web Architecture & Seamless API Integration
        </div>
      ),
    },
    {
      title: "Technical Skills & Implementation",
      description: "Worked with modern development practices including structured coding, debugging, and performance optimization. Strengthened knowledge of backend workflows, API handling concepts, and logical thinking required for building robust applications.",
      content: (
        <a
          href="https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12313134_898_20_08_2025.pdf?_gl=1*1thgs8q*_gcl_au*MTExMTQ2Nzg4Mi4xNzczNTcyMjc0"
          target="_blank"
          rel="noreferrer"
          className="h-full w-full flex flex-col items-center justify-center text-white px-4 hover:scale-105 transition-transform duration-300 group"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img 
              src="/certificate.png" 
              alt="Placement Ace Certificate" 
              className="w-full h-auto max-h-48 object-contain rounded-lg shadow-2xl border border-white/10 group-hover:border-indigo-500/50 transition-all shadow-indigo-500/20"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
               <span className="text-white font-medium">View Full Certificate</span>
            </div>
          </div>
        </a>
      ),
    }
  ],
};



export const GTAG = "G-5HCTL2TJ5W";