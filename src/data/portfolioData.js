// ============================================================
// portfolioData.js — Personal Portfolio Data
// All content and configuration for the portfolio website.
// ============================================================

export const personalInfo = {
  name: "Palle Narasimha",
  firstName: "Palle Narasimha",
  brandName: "Palle Narasimha", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+919381503063",
  emails: {
    primary: "narasimhapalle4220@gmail.com",
    secondary: "",
  },
  summary:
    "B.Tech graduate skilled in Java, Spring Boot, Hibernate, SQL, and web technologies, passionate about developing software applications as a Java Full Stack Developer.",
  resumeUrl: "/Narasarimha Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/narasimhapalle",
  linkedin: "https://www.linkedin.com/in/narasimhapalle/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Palle Narasimha",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate B.Tech graduate building scalable web applications with Java, Spring Boot, Hibernate, SQL, and modern frontend technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:narasimhapalle4220@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Narasarimha Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Palle Narasimha</span>, a passionate Java Full Stack Developer based in Bengaluru, India. I completed my B.Tech in Artificial Intelligence & Machine Learning (2026), sharpening my skills through the placement training program at TAP Academy in Java, Spring Boot, Hibernate, SQL, and web technologies. I love transforming complex requirements into reliable, user-friendly software solutions.`,
  techStack: ["Java", "Spring Boot", "Hibernate", "SQL", "JavaScript", "HTML5", "CSS3", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined, step-by-step engineering approach to designing and deploying robust software.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze business requirements, study domain logic, and plan database models and system architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect RESTful API contracts, relational schemas, and responsive UI wireframes for seamless user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement scalable backend logic with Java and Spring Boot, integrating with responsive frontend interfaces and secure databases.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test API endpoints thoroughly, perform end-to-end integration testing, and deliver production-ready applications.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "C" }, { name: "JavaScript" }],
    },
    {
      title: "Frontend",
      skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    },
    {
      title: "Backend & Core",
      skills: [{ name: "Spring Boot" }, { name: "Hibernate" }, { name: "OOPs" }, { name: "DSA" }],
    },
    {
      title: "Databases & Tools",
      skills: [{ name: "MySQL" }, { name: "Oracle" }, { name: "Git & GitHub" }, { name: "REST APIs" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "AI & Coding Community",
    description:
      "Collaborated with student peers to conduct coding sessions, explore machine learning algorithms, and build full-stack project prototypes.",
    role: "Technical Contributor",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Intern",
    duration: "6 Months",
    skills: ["Backend Development", "Database Connectivity", "REST APIs", "Frontend Development", "Problem Solving"],
    tech: ["Core Java", "OOP", "SQL", "HTML", "CSS", "JavaScript", "Spring", "Spring Boot", "Hibernate"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborates actively with peers to solve software engineering challenges and reach project goals." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaks down complex requirements and technical bugs into structured, logical solutions." },
  { name: "Communication", icon: "💬", desc: "Articulates technical concepts and progress clearly within technical and cross-functional teams." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizes development tasks effectively to deliver robust code within expected timelines." },
];

export const projects = [
  {
    id: "movieflix-frontend",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "MovieFlix Frontend Website",
    description:
      "Developed and deployed a responsive movie discovery application using HTML, CSS, and JavaScript, integrating the TMDB REST API for dynamic movie data.",
    techTags: ["HTML", "CSS", "JavaScript", "REST API", "JSON", "TMDB API"],
    links: {
      github: "https://github.com/narasimhapalle",
      demo: "https://movieflexapp.netlify.app/",
    },
    isFlagship: true,
  },
  {
    id: "ecommerce-frontend",
    number: "02",
    badge: null,
    title: "E-Commerce Website Front-End",
    description:
      "Developed and deployed a responsive e-commerce frontend using HTML5 and CSS3, focusing on product presentation, intuitive navigation, and structured layouts.",
    techTags: ["HTML5", "CSS3"],
    links: {
      github: "https://github.com/narasimhapalle",
      demo: "https://onlineshopping-kappa.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "atm-card-security-system",
    number: "03",
    badge: null,
    title: "ATM Card Security System",
    description:
      "Developed a console-based Java ATM Card Security System implementing secure PIN authentication, balance management, and robust exception handling.",
    techTags: ["Java", "OOP", "Exception Handling"],
    links: {
      github: "https://github.com/narasimhapalle/ATMCardSecurity4",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/narasimhapalle/",
};

export const education = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  institution: "Raghu Engineering College",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Spring Boot · Hibernate · MySQL", "Building scalable and reliable software"],
  credential: "B.Tech in Artificial Intelligence & Machine Learning",
  copyright: `© ${new Date().getFullYear()} Palle Narasimha | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
