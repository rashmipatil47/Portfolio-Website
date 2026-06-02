export const personalInfo = {
  name: "Rashmi Venkangouda Patil",
  nameShort: "Rashmi Patil",
  title: "Software Development Engineer",
  profilePhoto: "👩‍💻",
  roles: [
    "Software Development Engineer",
    "AI / GenAI Engineer",
    "Full Stack Developer",
    "LangGraph & RAG Builder",
    "React.js + FastAPI Developer",
  ],
  about: `Software Development Engineer with 3+ years building production backend systems and AI-powered applications.
  Proficient in agentic AI workflows, RAG pipelines and LLM integrations using LangGraph, LangChain and Claude AI.
  Experienced in Python, FastAPI, React.js and cloud-native microservices on AWS with Docker and Kubernetes.`,
  email: "rpatil42@asu.edu",
  phone: "(480) 287-6281",
  github: "https://github.com/rashmipatil47",
  linkedin: "https://linkedin.com/in/rashmipatil47",
  location: "Tempe, Arizona, USA",
  resumeUrl: "/Rashmi_Patil_Resume.pdf",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 92, icon: "⚛️" },
    { name: "JavaScript / TypeScript", level: 88, icon: "🟨" },
    { name: "HTML5 / CSS3", level: 94, icon: "🌐" },
    { name: "Angular", level: 76, icon: "🔴" },
  ],
  backend: [
    { name: "Python / FastAPI", level: 93, icon: "🐍" },
    { name: "Node.js / Django", level: 87, icon: "🟢" },
    { name: "PostgreSQL / MongoDB / MySQL", level: 85, icon: "🐬" },
    { name: "Docker / Kubernetes", level: 82, icon: "🐳" },
    { name: "AWS + Jenkins / GitHub Actions", level: 80, icon: "☁️" },
  ],
  tools: [
    { name: "LangGraph / LangChain", level: 90, icon: "🔗" },
    { name: "RAG + Vector Databases", level: 88, icon: "🧠" },
    { name: "LLMs (Claude AI, Gemini)", level: 90, icon: "🤖" },
    { name: "Prometheus / Grafana", level: 78, icon: "📊" },
    { name: "Langfuse / CrewAI", level: 80, icon: "🔭" },
    { name: "Databricks / Tableau", level: 75, icon: "💠" },
  ],
};

// Rules:
//   github: "url"  → GitHub button shown with real link
//   github: null   → GitHub button hidden entirely
//   Live Demo button does not exist in this version
export const projects = [

  // ── AI / AGENTIC ──────────────────────────────────────────────────
  {
    id: 1,
    title: "Multi-Agent SOC Automation System",
    description:
      "8-agent LangGraph pipeline with supervisor routing, conditional edges and human-in-the-loop approval. Hybrid RAG retrieval using Qdrant + BM25 with Cohere reranking for alert triage. Evaluated across 20 test cases with RAGAS tracking faithfulness and context recall.",
    tech: ["Python", "FastAPI", "LangGraph", "Claude AI", "Qdrant", "PostgreSQL"],
    github: "https://github.com/rashmipatil47/soc-agent-system",
    image: "🛡️",
    featured: true,
    category: "ai",
  },
  {
    id: 2,
    title: "Adaptive RAG System for Technical Docs",
    description:
      "Multi-source ingestion pipeline using PyMuPDF, GitPython and BeautifulSoup4 with SemanticChunker and CodeSplitter. HyDE query expansion and MultiQueryRetriever with Celery async task queue. Feedback-aware reranking with Langfuse observability tracing.",
    tech: ["Python", "FastAPI", "LangChain", "Claude AI", "Qdrant", "Celery"],
    github: "https://github.com/rashmipatil47/Adaptive-RAG-System-for-Technical-Documentation",
    image: "📚",
    featured: true,
    category: "ai",
  },
  // ── BACKEND / DEVOPS ──────────────────────────────────────────────
  {
    id: 3,
    title: "Backend Performance Monitor",
    description:
      "7-service observability platform monitoring real-time API metrics via Prometheus and Grafana. JWT-secured microservice authentication with automated threshold-based alerting. Load tested with Locust simulating 50 concurrent users.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Prometheus", "Grafana", "Docker", "Locust"],
    github: "https://github.com/rashmipatil47/backend-performance-monitor",
    image: "📡",
    featured: true,
    category: "backend",
  },
  {
    id: 4,
    title: "AI Resume Anonymization Platform",
    description:
      "Document processing system detecting and anonymizing personal data in resumes using GenAI LLMs — improving fairness in hiring. Reduced manual review effort by 70% and processed documents 3× faster than manual review.",
    tech: ["React.js", "Node.js", "Python", "LLM / GenAI"],
    github: null,
    image: "🤖",
    featured: false,
    category: "ai",
  },
  {
    id: 5,
    title: "IT Help Desk Ticket Tracking System",
    description:
      "DBMS system with optimized SQL queries reducing ticket response time by 30%. Relational database with real-time tracking, enhancing support efficiency, security, and data accessibility.",
    tech: ["SQL", "ERD", "UDFs", "Triggers", "Joins"],
    github: null,
    image: "🎫",
    featured: false,
    category: "backend",
  },

  // ── ML / DATA ─────────────────────────────────────────────────────
  {
    id: 6,
    title: "Book Recommender System",
    description:
      "Python recommendation engine using sparse matrix and cosine similarity to analyze 1M+ user ratings across 270K+ books. Generates personalized top-5 recommendations per user by aggregating weighted ratings from similar users.",
    tech: ["Python", "Cosine Similarity", "Pandas", "NumPy", "Scikit-learn"],
    github: null,
    image: "📖",
    featured: false,
    category: "ml",
  },
  {
    id: 7,
    title: "Data Visualization — Supermarket Sales",
    description:
      "Interactive Tableau dashboards helping businesses make data-driven decisions, accelerating decision-making by 40%. Applied interactive filters and drill-down features for unit-specific insights tailored to diverse business needs.",
    tech: ["Tableau", "Interactive Dashboards", "Filters", "Data Analytics"],
    github: null,
    image: "📈",
    featured: false,
    category: "ml",
  },

  // ── FRONTEND ──────────────────────────────────────────────────────
  {
    id: 8,
    title: "Portfolio Website",
    description:
      "This portfolio — built with React, featuring dark/light themes, smooth animations, filterable projects, accordion experience timeline, separate Education section, and an agentic AI chatbot powered by Claude.",
    tech: ["React.js", "Claude AI", "CSS3", "Node.js"],
    github: "https://github.com/rashmipatil47/Portfolio-Website",
    image: "🌟",
    featured: false,
    category: "frontend",
  },
];

export const experience = [
  {
    role: "Software Development Engineer",
    company: "Kingship AI Inc",
    location: "San Jose, California",
    duration: "February 2026 – Present",
    bullets: [
      "Engineered GenAI pipelines using Gemini 2.5 Pro and PyMuPDF for intelligent PDF and DOCX document processing.",
      "Designed structured prompt engineering across 3 Gemini 2.5 Flash backend services with Pydantic-validated JSON outputs.",
      "Developed multi-step React.js wizard with FastAPI integration feeding structured user inputs to Gemini API.",
      "Built 10+ FastAPI endpoints with MongoDB covering full CRUD, LLM integration and production workflows.",
    ],
    tech: ["Python", "FastAPI", "React.js", "Google Gemini 2.5", "PyMuPDF", "MongoDB", "Pydantic"],
  },
  {
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    location: "Chennai, India",
    duration: "July 2021 – December 2023",
    bullets: [
      "Built RESTful APIs and microservices using Node.js and Django across 5+ production applications.",
      "Developed reusable React.js components integrating frontend with backend APIs across 3+ client applications.",
      "Implemented JWT and OAuth authentication securing microservices with role-based access control.",
      "Optimized SQL queries and schema design reducing average backend response time by 30%.",
      "Containerized microservices with Docker, built Jenkins CI/CD pipelines and orchestrated Kubernetes deployments on AWS.",
      "Resolved 200+ production incidents across backend services maintaining SLA compliance and reducing downtime.",
    ],
    tech: ["React.js", "Node.js", "Python", "Django", "RESTful APIs", "Docker", "Kubernetes", "AWS", "Jenkins", "SQL"],
  },
  {
    role: "AI Engineer Intern",
    company: "Rubixe Pvt Ltd",
    location: "Bangalore, India",
    duration: "January 2021 – June 2021",
    bullets: [
      "Built and tuned ML models including Random Forest, KNN and Decision Trees improving precision by 12%.",
      "Performed EDA on large datasets using Pandas, NumPy and Seaborn extracting actionable business insights.",
      "Presented analytical findings via Tableau dashboards to non-technical stakeholders.",
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "Matplotlib", "Keras", "Tableau"],
  },
];

export const education = [
  {
    degree: "Master of Science — Information Technology",
    institution: "Arizona State University",
    location: "Tempe, Arizona, USA",
    duration: "January 2024 – December 2025",
    gpa: "4.0 / 4.0",
    highlights: ["AI & NLP", "Big Data", "Machine Learning", "AWS Cloud Architecture"],
  },
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Basaveshwar Engineering College",
    location: "Bagalkot, Karnataka, India",
    duration: "August 2016 – August 2020",
    gpa: "7.75 / 10",
    highlights: ["System Design", "Software Engineering", "Data Structures & Algorithms", "DBMS"],
  },
];

export const chatbotSystemPrompt = `You are Rashmi's Portfolio AI Assistant — smart, friendly and professional.

About Rashmi Venkangouda Patil:
- Software Development Engineer with 3+ years experience
- MS Information Technology — Arizona State University, GPA 4.0/4.0 (Dec 2025)
- BE Computer Science — Basaveshwar Engineering College, GPA 7.75/10 (Aug 2020)
- Currently SDE at Kingship AI Inc, San Jose, CA (Feb 2026–Present): building GenAI pipelines with Gemini 2.5 Pro, FastAPI, React.js, MongoDB
- Previously: Software Engineer at Cognizant (Jul 2021–Dec 2023), AI Engineer Intern at Rubixe (Jan–Jun 2021)
- Email: rpatil42@asu.edu | Phone: (480) 287-6281 | Location: Tempe, AZ
- GitHub: https://github.com/rashmipatil47

AI/GenAI expertise: LangGraph, LangChain, RAG pipelines, Vector Databases (Qdrant), LLMs (Claude AI, Gemini 2.5), Prompt Engineering, Langfuse
Backend: Python, FastAPI, Django, Node.js, PostgreSQL, MongoDB, MySQL, Docker, Kubernetes, AWS
Frontend: React.js, Angular, TypeScript, JavaScript

Public GitHub projects:
1. soc-agent-system — 8-agent LangGraph SOC automation with Claude AI, Qdrant RAG, human-in-the-loop
2. Adaptive-RAG-System-for-Technical-Documentation — LangChain, HyDE, MultiQuery, Celery, Langfuse
3. backend-performance-monitor — FastAPI, Prometheus, Grafana, Locust load testing, JWT auth
4. Portfolio-Website — this portfolio site

Key achievements: 200+ production incidents resolved at Cognizant, 30% backend response time improvement, Docker+K8s+AWS CI/CD.

Answer questions about Rashmi's skills, projects, experience, education and how to hire/contact her.
Keep answers concise (2–4 sentences). Be professional and friendly.
For unrelated questions, redirect to: rpatil42@asu.edu`;