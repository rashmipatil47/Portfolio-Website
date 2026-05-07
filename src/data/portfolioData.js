export const personalInfo = {
  name: "Rashmi Venkangouda Patil",
  nameShort: "Rashmi Patil",
  title: "Full Stack Engineer",
  roles: [
    "Full Stack Engineer",
    "React.js Developer",
    "Node.js Engineer",
    "GenAI / LLM Enthusiast",
    "Problem Solver",
  ],
  about: `MS in Information Technology from Arizona State University (GPA 4.0). 
  Full Stack Engineer with hands-on experience at Cognizant, Kingship AI Inc, and ASU. 
  I build scalable React + Node.js applications, optimize backend systems, and love integrating 
  GenAI/LLM capabilities into real-world products.`,
  email: "rpatil42@asu.edu",
  phone: "(480) 287-6281",
  github: "https://github.com/rashmipatil47",
  linkedin: "https://linkedin.com/in/rashmipatil47",
  location: "Tempe, Arizona, USA",
  resumeUrl: "#",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 93, icon: "⚛️" },
    { name: "JavaScript", level: 91, icon: "🟨" },
    { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
    { name: "Angular", level: 78, icon: "🔴" },
    { name: "Tailwind CSS / Material UI", level: 87, icon: "💨" },
    { name: "TypeScript", level: 76, icon: "💙" },
  ],
  backend: [
    { name: "Node.js / Express.js", level: 90, icon: "🟢" },
    { name: "Python / Django", level: 88, icon: "🐍" },
    { name: "Spring Boot (Java)", level: 74, icon: "☕" },
    { name: "MySQL / Oracle", level: 85, icon: "🐬" },
    { name: "MongoDB", level: 82, icon: "🍃" },
    { name: "RESTful APIs", level: 92, icon: "🔗" },
  ],
  tools: [
    { name: "AWS Cloud", level: 80, icon: "☁️" },
    { name: "Git / GitHub", level: 92, icon: "🐙" },
    { name: "Docker", level: 78, icon: "🐳" },
    { name: "Jenkins / CI-CD", level: 80, icon: "⚙️" },
    { name: "Databricks", level: 70, icon: "💠" },
    { name: "Tableau", level: 82, icon: "📊" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI Resume Anonymization Platform",
    description:
      "Document processing system that detects and anonymizes personal data in resumes using GenAI LLMs — improving fairness in hiring workflows. Reduced manual review effort by 70% and processed documents 3× faster than manual.",
    tech: ["React.js", "Node.js", "Python", "LLM / GenAI"],
    github: "https://github.com/rashmipatil47",
    live: "#",
    image: "🤖",
    featured: true,
    category: "fullstack",
  },
  {
    id: 2,
    title: "Book Recommender System",
    description:
      "Python-based recommendation engine using sparse matrix and cosine similarity to analyze 1M+ user ratings for 270K+ books. Generates personalized top-5 recommendations per user by aggregating weighted ratings from similar users.",
    tech: ["Python", "Cosine Similarity", "Pandas", "NumPy"],
    github: "https://github.com/rashmipatil47",
    live: "#",
    image: "📚",
    featured: true,
    category: "ml",
  },
  {
    id: 3,
    title: "IT Help Desk Ticket Tracking System",
    description:
      "DBMS system with optimized SQL queries reducing ticket response time by 30%. Implemented relational database with real-time tracking, enhancing support efficiency, security, and data accessibility.",
    tech: ["SQL", "ERD", "UDFs", "Triggers", "Joins"],
    github: "https://github.com/rashmipatil47",
    live: "#",
    image: "🎫",
    featured: false,
    category: "backend",
  },
  {
    id: 4,
    title: "Data Visualization — Supermarket Sales",
    description:
      "Interactive Tableau dashboards helping businesses make data-driven decisions, accelerating decision-making by 40%. Applied interactive filters and drill-down features for unit-specific insights.",
    tech: ["Tableau", "Interactive Dashboards", "Filters", "Data Analytics"],
    github: "https://github.com/rashmipatil47",
    live: "#",
    image: "📈",
    featured: false,
    category: "data",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This very portfolio! Built with React, featuring dark/light themes, smooth animations, filterable projects, career timeline, and an agentic AI chatbot powered by Claude.",
    tech: ["React", "Claude AI", "CSS3", "Node.js"],
    github: "https://github.com/rashmipatil47/rashmi-portfolio",
    live: "https://rashmipatil47.github.io/rashmi-portfolio",
    image: "🌟",
    featured: false,
    category: "frontend",
  },
];

export const experience = [
  {
    role: "Full Stack Engineering Intern",
    company: "Kingship AI Inc",
    location: "San Jose, California",
    duration: "January 2026 – Present",
    bullets: [
      "Lead frontend development to redesign web interfaces with modern, responsive architecture to improve usability and accessibility.",
      "Modify and optimize GenAI LLM functionality using Python to align with changing product requirements.",
      "Contributing to full SDLC from requirements gathering, UAT to deployment & prod support leveraging Git/GitHub version control.",
    ],
    tech: ["React.js", "Python", "GenAI / LLM", "Git", "GitHub"],
  },
  {
    role: "Office Aide",
    company: "Arizona State University",
    location: "Tempe, Arizona",
    duration: "August 2024 – December 2025",
    bullets: [
      "Developed reusable Python scripts to automate repetitive tasks, significantly reducing manual operational efforts.",
      "Built automation workflows for data processing, reporting & file management, improving consistency and reducing human error.",
      "Maintained 'The Admin Cohort website' managing updates, access, improving accessibility and user experience.",
    ],
    tech: ["Python", "Automation", "Web Maintenance"],
  },
  {
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    location: "India",
    duration: "July 2021 – December 2023",
    bullets: [
      "Built 5+ scalable full stack applications using React.js and Node.js with Tailwind CSS and Material UI for modern interfaces.",
      "Refactored hard-coded pages into reusable components & optimized JavaScript with improved data structures to boost performance.",
      "Optimized MySQL queries and built scalable backend systems with Python/Django, enhancing application performance by 30%.",
      "Streamlined CI/CD pipelines within Agile teams, automating microservice deployments on AWS using Git, Jenkins, and Docker.",
      "Resolved 200+ production issues reducing downtime by 30% & conducted 100+ code reviews ensuring 95% industry best practices.",
    ],
    tech: ["React.js", "Node.js", "RESTful APIs", "JavaScript", "Git", "Jenkins", "Django", "MySQL", "AWS", "Docker"],
  },
  {
    role: "Data Science Intern",
    company: "Rubixe Pvt Ltd",
    location: "Bangalore, India",
    duration: "January 2021 – June 2021",
    bullets: [
      "Performed Exploratory Data Analysis on large datasets using Python (Pandas, NumPy & Seaborn) to extract actionable insights.",
      "Refined datasets through feature engineering, enhancing model recall and precision by 12% for accurate predictions.",
      "Built and tuned ML models including Regression, Random Forest, KNN & Decision Trees using scikit-learn.",
      "Presented analytical findings in Tableau to non-technical stakeholders, showcasing data storytelling skills.",
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "Matplotlib", "Keras", "Tableau"],
  },
];

export const education = [
  {
    degree: "Master of Science — Information Technology",
    institution: "Arizona State University",
    location: "Tempe, Arizona, USA",
    duration: "December 2025",
    gpa: "4.0 / 4.0",
    highlights: [
      "Natural Language Processing",
      "Big Data",
      "Machine Learning",
      "AWS Cloud Architecture",
    ],
  },
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Basaveshwar Engineering College",
    location: "Bagalkot, Karnataka, India",
    duration: "August 2020",
    gpa: "7.75 / 10",
    highlights: [
      "System Design",
      "Software Engineering",
      "Data Structures & Algorithms",
      "DBMS",
    ],
  },
];

export const chatbotSystemPrompt = `You are Rashmi's Portfolio AI Assistant — a smart, friendly, and professional chatbot embedded in Rashmi Patil's developer portfolio website.

Your personality: Confident, warm, concise, and helpful. You speak on behalf of Rashmi.

About Rashmi Venkangouda Patil:
- MS in Information Technology from Arizona State University, GPA 4.0/4.0 (Dec 2025)
- BE in Computer Science from Basaveshwar Engineering College, GPA 7.75/10 (Aug 2020)
- Currently Full Stack Engineering Intern at Kingship AI Inc, San Jose, CA (Jan 2026 – Present)
- Previously: Office Aide at ASU (Aug 2024 – Dec 2025), Software Engineer at Cognizant (Jul 2021 – Dec 2023), Data Science Intern at Rubixe (Jan–Jun 2021)
- Located in Tempe, Arizona, USA
- Email: rpatil42@asu.edu | Phone: (480) 287-6281
- GitHub: https://github.com/rashmipatil47

Key skills: React.js, Node.js, Python, JavaScript, Django, Spring Boot, MySQL, MongoDB, AWS, Docker, Jenkins, GenAI/LLM, Tableau, Databricks

Projects:
1. AI Resume Anonymization Platform — React.js, Node.js, Python, LLM; reduced manual review by 70%
2. Book Recommender System — Python, cosine similarity, 1M+ ratings, 270K+ books
3. IT Help Desk Ticket Tracking System — SQL, ERD, reduced response time 30%
4. Data Visualization on Supermarket Sales — Tableau, accelerated decision-making by 40%

Achievements at Cognizant:
- Resolved 200+ production issues, reduced downtime 30%
- Conducted 100+ code reviews, 95% best practices compliance
- Optimized MySQL queries improving performance by 30%
- Automated microservice deployments on AWS via Jenkins & Docker

You can answer questions about:
- Rashmi's skills, education, experience, and projects
- How to contact or hire Rashmi
- Technical topics related to her expertise
- Career journey and background

Keep answers concise (2-4 sentences). Be friendly and professional.
If asked something you don't know, politely redirect to her email: rpatil42@asu.edu

Do NOT answer questions completely unrelated to Rashmi or web/data development.`;
