export const site = {
  name: "Ayoub Aissaoui",
  role: "Junior Full Stack Developer",
  location: "Casablanca, Morocco",
  email: "ayoub.aissaoui.dev@gmail.com",
  github: "https://github.com/AissAyo",
  linkedin: "https://www.linkedin.com/in/ayoub-aissaoui-0aba3b324/",
  cv: "/CV_AyoubAissaouiJavaFr.pdf",
};

export const skills = [
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Symfony", ".NET"],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    group: "Data",
    items: ["SQL Server", "PostgreSQL", "MySQL", "JPA / Hibernate"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Git", "Jenkins", "Ansible", "SonarQube", "Azure / AWS"],
  },
  {
    group: "Security",
    items: ["JWT", "OAuth2", "Microsoft Entra ID", "RBAC"],
  },
  {
    group: "Architecture",
    items: ["MVC", "SOLID", "Microservices", "ORM", "OOP"],
  },
];

export const projects = [
  {
    number: "01",
    title: "CRM × SharePoint",
    type: "Professional Project · Munisys",
    description:
      "Document-management integration connecting a CRM authorization model with SharePoint Online. Built secure REST APIs, authentication, per-user permissions, synchronization, and a React interface.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "SQL Server",
      "Microsoft Entra ID",
      "SharePoint",
      "Docker",
    ],
    featured: true,
  },

  {
    number: "02",
    title: "SmartFix",
    type: "PFA · Full Stack Platform",
    description:
      "Web platform designed for the Moroccan automotive services market, connecting motorists with garages, car rental companies, and automotive stores. Implemented search, online reservations, statistics, and recommendation features.",
    stack: [
      "Spring Boot",
      "React",
      "Git",
      "Docker",
    ],
  },

  {
    number: "03",
    title: "Real-Time Chat Application",
    type: "Full Stack · Real-Time Application",
    description:
      "Instant messaging web application with real-time communication using WebSocket. Implemented user management and secure authentication with Spring Security.",
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "WebSocket",
      "PostgreSQL",
      "Docker",
      "Spring Security",
    ],
  },

  {
    number: "04",
    title: "CRM Web — CI/CD Pipeline",
    type: "DevOps · Full Stack Project",
    description:
      "CRM application for customer and invoice management with a complete CI/CD workflow. Implemented automated builds with Jenkins, Docker containerization, SonarQube code analysis, and automated deployment using Ansible.",
    stack: [
      ".NET",
      "MySQL",
      "Jenkins",
      "Docker",
      "Ansible",
      "SonarQube",
    ],
  },

 

  {
    number: "05",
    title: "IoT — Refrigeration Incident Management",
    type: "IoT · Monitoring & Incident Management",
    description:
      "Temperature monitoring system detecting threshold violations and automatically creating incidents. Implemented Telegram alert escalation to supervisors, incident comments, tracking, and closure after resolution.",
    stack: [
      "Django",
      "React",
      "IoT",
      "Telegram",
      "Incident Management",
    ],
  },
   {
    number: "06",
    title: "Horus Distance API",
    type: "Backend Project",
    description:
      "Spring Boot REST API for calculating geographic distances using the Haversine formula. The project evolved from JdbcTemplate and H2 toward Spring Data JPA.",
    stack: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA",
      "H2",
      "JdbcTemplate",
    ],
  },
];



export const experience = [
  {
    company: "Munisys",
    role: "PFE Intern — Full Stack Developer",
    date: "Feb 2026 — Aug 2026",
    description:
      "Developed a full-stack CRM and document management solution integrating Microsoft SharePoint Online. Built REST APIs with Spring Boot, developed the React frontend, implemented authentication and authorization with Microsoft Entra ID, and synchronized CRM permissions with SharePoint document access.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "REST API",
      "SQL Server",
      "Microsoft Entra ID",
      "SharePoint Online",
      "Docker",
      "JWT",
      "OAuth2",
      "Git",
    ],
  },
  {
    company: "Technologica",
    role: "Intern — Full Stack Developer",
    date: "Jul 2025 — Aug 2025",
    description:
      "Corrected existing application issues and improved existing functionality. Developed new pages and features according to project requirements.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
  },
];



