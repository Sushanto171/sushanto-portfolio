export interface ISkill {
  id: string;
  label: string;
  icon: string; // icon classname or image path
  category: "Frontend" | "Backend" | "Tools"|"Database"| "Authentication";
}

export const skillsData: ISkill[] = [
   {
    id: "javascript",
    label: "JAVASCRIPT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    id: "react",
    label: "REACT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    id: "nextjs",
    label: "NEXT.JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },

  // Backend
  {
    id: "nodejs",
    label: "NODE.JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    id: "expressjs",
    label: "EXPRESS.JS",
    icon: "data:image/png;base64,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",
    category: "Backend",
  },
  {
    id: "mongodb",
    label: "MONGODB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    id: "mongoose",
    label: "MONGOOSE",
    icon: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png",
    category: "Tools",
  },
  {
    id: "redux",
    label: "REDUX",
    icon: "https://redux-toolkit.js.org/img/redux.svg",
    category: "Frontend",
  },
  {
    id: "typescript",
    label: "TYPESCRIPT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Backend",
  },
  {
    id: "postgresql",
    label: "POSTGRESQL",
    icon: "https://www.postgresql.org/media/img/about/press/elephant.png",
    category: "Database",
  },
  {
    id: "prisma",
    label: "PRISMA",
    icon: "https://cdn.brandfetch.io/idBBE3_R9e/idI_xi9A1U.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    category: "Tools",
  },


  {
    id: "git",
    label: "GIT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    id: "github",
    label: "GITHUB",
    icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    category: "Tools",
  },

  {
    id: "figma",
    label: "FIGMA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Tools",
  },

  {
    id: "firebase",
    label: "FIREBASE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Authentication",
  },
];
