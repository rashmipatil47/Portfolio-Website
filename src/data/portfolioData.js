import profilePhotoImg from '../assets/mypic.jpg';

export const personalInfo = {
  name: "Rashmi Venkangouda Patil",
  nameShort: "Rashmi Patil",
  title: "Software Development Engineer",
  profilePhoto: profilePhotoImg,
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
  frontend: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  backend: [
    "Python", "Java", "C#", "Go", "SQL",
    "FastAPI", "Django", "Node.js", "REST APIs", "Microservices",
    "PostgreSQL", "MongoDB", "MySQL",
  ],
  tools: ["AWS (EC2, Lambda, S3, DynamoDB)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  ai: [
    "LangGraph", "LangChain", "RAG", "Prompt Engineering",
    "Vector Databases", "LLMs", "Langfuse", "CrewAI",
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
      "Engineered AI-powered document processing services using Python, FastAPI, Gemini 2.5, and PyMuPDF, reducing manual processing effort by 80% and improving structured data extraction accuracy.",
      "Built and maintained 4+ production FastAPI microservices with MongoDB, enabling secure CRUD operations, seamless third-party AI integration, and delivering features through Agile sprint collaboration.",
      "Designed resilient prompt orchestration across multiple backend AI services using Pydantic validation, achieving 99%+ structured JSON consistency and minimizing downstream processing failures in production workflows.",
      "Developed scalable REST APIs integrated with React.js frontend workflows, reducing document submission time by 40% while improving user experience, responsiveness, and overall system reliability.",
    ],
    tech: ["Python", "FastAPI", "React.js", "Google Gemini 2.5", "PyMuPDF", "MongoDB", "Pydantic"],
  },
  {
    role: "Software Development Engineer",
    company: "Cognizant Technology Solutions",
    location: "Chennai, India",
    duration: "July 2021 – December 2023",
    bullets: [
      "Designed and implemented scalable RESTful APIs and microservices for multiple enterprise applications, improving backend scalability, system modularity, and accelerating feature delivery across distributed production environments.",
      "Built reusable React.js components integrated with backend APIs, reducing frontend development effort by 30% while improving UI consistency, maintainability, and cross-product user experience.",
      "Implemented JWT and OAuth-based authentication with role-based access control, strengthening application security, ensuring secure access to distributed services, and preventing unauthorized system interactions.",
      "Optimized SQL queries and redesigned database schemas, decreasing API response times by 30% while improving data retrieval efficiency, scalability, and overall system performance under load.",
      "Containerized backend services using Docker and automated deployments with Jenkins CI/CD pipelines on AWS and Kubernetes, reducing release time by 60% and improving deployment reliability.",
      "Resolved 200+ production incidents and collaborated with QA, product, and engineering teams in Agile environments, maintaining 99.9% uptime while delivering customer-facing features on schedule.",
    ],
    tech: ["React.js", "Node.js", "Python", "Django", "RESTful APIs", "Docker", "Kubernetes", "AWS", "Jenkins", "SQL"],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Rubixe Pvt Ltd",
    location: "Bangalore, India",
    duration: "January 2021 – June 2021",
    bullets: [
      "Developed RESTful APIs using .NET Core (C#) to support vendor data integration workflows, enabling reliable ingestion, transformation, and delivery of merchandising data across internal systems and services.",
      "Built Angular-based frontend components for internal dashboards, consuming backend APIs to display processed planning and merchandising data, improving visibility and usability for engineering and business users.",
      "Assisted in designing and maintaining SQL Server–based data processing workflows, writing optimized queries and supporting batch jobs for structured data movement across staging and application layers.",
      "Contributed to CI/CD pipeline setup using Azure DevOps for .NET services, supporting automated builds, testing, and deployments while applying secure coding practices and basic API security validations.",
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