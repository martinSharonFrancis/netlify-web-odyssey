export type SocialLink = {
  name: string;
  url: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  image: string;
  category: string;
  url: string;
};

export type ContactField = {
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
};

export type PortfolioData = {
  hero: {
    name: string;
    role: string;
    profileImage: string;
    socialLinks: SocialLink[];
  };
  about: {
    title: string;
    description: string;
    services: Service[];
  };
  skills: {
    usingNow: Skill[];
    learning: Skill[];
    otherSkills: Skill[];
  };
  portfolio: {
    title: string;
    categories: string[];
    projects: Project[];
  };
  contact: {
    title: string;
    description: string;
    fields: ContactField[];
  };
  footer: {
    copyright: string;
    socialLinks: SocialLink[];
  };
};
