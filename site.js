// ============================================================
//  SITE CONTENT: edit this file to update your portfolio.
//  Anything left as "" is shown as "coming soon" (never a dead link).
// ============================================================

export const profile = {
  name: "Muhammed Sekoni-Dairo",
  firstName: "Muhammed",
  initials: "MS",
  photo: "./images/muhammed.jpg",
  headline: "Aspiring Software Developer building useful technology.",
  tagline: "Founder & Team Lead at Chalite Tech · Technology Enthusiast",
  intro:
    "I'm learning software engineering one project at a time, with growing interests in cybersecurity and artificial intelligence. I like turning practical problems into simple, useful digital products.",
  statusText: "Open to internship conversations",
  goal: "Seeking Software Developer Internship opportunities",
};

// ----- Contact: fill these in when ready -----
export const contact = {
  email: "", // e.g. "name@example.com"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "", // e.g. "https://github.com/your-username"
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a technology enthusiast developing my skills in software engineering. My route into tech is self-driven: I'm building a foundation in HTML, CSS and Python while working on real projects and leading a small technology initiative, Chalite Tech.",
    "I value continuous learning, problem-solving, collaboration and responsible innovation. I'm drawn to using technology to solve practical problems and to create digital products that are genuinely useful to people.",
    "I'm looking for a software developer internship where I can contribute, learn from experienced engineers and grow into a dependable developer.",
  ],
  values: [
    "Continuous learning",
    "Problem-solving",
    "Collaboration",
    "Responsible innovation",
    "Meaningful impact",
  ],
};

// status: "current" | "learning"
export const skills = [
  {
    name: "HTML",
    status: "current",
    note: "Semantic, accessible page structure.",
  },
  {
    name: "CSS",
    status: "current",
    note: "Responsive layouts and clean visual styling.",
  },
  {
    name: "Python",
    status: "learning",
    note: "Currently learning the fundamentals.",
  },
];

export const interests = [
  {
    title: "Software Engineering",
    text: "Building a solid foundation in how reliable software is designed and made.",
  },
  {
    title: "Cybersecurity",
    text: "Curious about how systems are protected and how to build safely.",
  },
  {
    title: "Artificial Intelligence",
    text: "Exploring how AI can be applied responsibly to everyday problems.",
  },
  {
    title: "Problem-solving",
    text: "Breaking down real-world challenges into clear, workable steps.",
  },
];

// status: "Completed" | "Ongoing". Add `link: "https://..."` only when you have a real URL.
export const projects = [
  {
    name: "Personal Portfolio Website",
    status: "Completed",
    role: "Designer & Developer",
    description:
      "A responsive personal portfolio presenting my background, skills, projects and contact details in a clean, accessible layout.",
    tags: ["HTML", "CSS", "Responsive design", "Accessibility"],
    link: "", // add your live URL after deploying
    linkLabel: "Visit site",
    image: "", // add e.g. "/screenshots/portfolio.png" (file placed in /public/screenshots)
    imageAlt: "Screenshot of the personal portfolio website",
  },
  {
    name: "Chalite Tech",
    status: "Ongoing",
    role: "Founder & Team Lead",
    description:
      "A founder-led technology initiative focused on team coordination, research, design, software development planning and building a technology-focused community.",
    tags: ["Leadership", "Research", "Design", "Development planning", "Community"],
    link: "",
    linkLabel: "Learn more",
    image: "",
    imageAlt: "Chalite Tech project preview",
  },
];

export const experience = [
  {
    role: "Founder & Team Lead",
    org: "Chalite Tech",
    period: "", // e.g. "2025 – Present"
    summary:
      "Leading a founder-led technology initiative and coordinating its early development.",
    points: [
      "Coordinate team members and shared goals across the initiative.",
      "Carry out research to shape ideas and decisions.",
      "Contribute to design and software development planning.",
      "Build a technology-focused community around learning and collaboration.",
    ],
  },
];

export const education = [
  {
    school: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    title: "B.Sc. Pasture and Range Management",
    status: "Ongoing",
    note: "Currently studying.",
  },
  {
    school: "TechCrush",
    title: "Technology training programme",
    status: "Graduate",
    note: "Completed the programme.",
  },
];
