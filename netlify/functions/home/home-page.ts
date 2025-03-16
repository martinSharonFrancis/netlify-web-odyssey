import { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  const HomepageBlocks = {
    hero: {
      name: "Tomasz Gajda",
      role: "Front-end Developer / UI Designer",
      profileImage: "/images/profile.jpg",
      socialLinks: [
        { name: "GitHub", url: "https://github.com" },
        { name: "LinkedIn", url: "https://linkedin.com" },
        { name: "Twitter", url: "https://twitter.com" },
      ],
    },
    about: {
      title: "About Me",
      description:
        "A passionate developer focused on building user-friendly and scalable applications.",
      services: [
        { title: "Design", description: "UI/UX Design for applications." },
        { title: "Development", description: "Building scalable apps." },
        { title: "Maintenance", description: "Ensuring smooth operation." },
      ],
    },
    skills: {
      usingNow: [
        { name: "HTML5", icon: "/icons/html5.svg" },
        { name: "CSS3", icon: "/icons/css3.svg" },
        { name: "SASS", icon: "/icons/sass.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
      ],
      learning: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
      ],
      otherSkills: [
        { name: "English C1/C2", icon: "/icons/english.svg" },
        { name: "Spanish B1/B2", icon: "/icons/spanish.svg" },
        { name: "C++", icon: "/icons/cpp.svg" },
        { name: "C", icon: "/icons/c.svg" },
      ],
    },
    portfolio: {
      title: "Portfolio",
      categories: ["All", "Code", "Design"],
      projects: [
        {
          title: "Eatsome",
          image: "/images/eatsome.jpg",
          category: "Design",
          url: "https://eatsome.com",
        },
        {
          title: "Photography Project",
          image: "/images/photography.jpg",
          category: "Design",
          url: "#",
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to reach out for any inquiries or collaboration opportunities.",
      fields: [
        { label: "Name", type: "text", placeholder: "Enter your name" },
        { label: "Email", type: "email", placeholder: "Enter your email" },
        { label: "Subject", type: "text", placeholder: "Enter subject" },
        { label: "Message", type: "textarea", placeholder: "Your message" },
      ],
    },
    footer: {
      copyright: "© 2023 Tomasz Gajda. All Rights Reserved.",
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com" },
        { name: "Instagram", url: "https://instagram.com" },
        { name: "Twitter", url: "https://twitter.com" },
      ],
    },
  };

  return {
    statusCode: 200,
    body: JSON.stringify(HomepageBlocks),
  };
};
