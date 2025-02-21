export type Technology = {
  name: string;
  description: string;
  links: Array<{
    title: string;
    url: string;
  }>;
};
export const technologies: Technology[] = [
  {
    name: "Next.js",
    description:
      "Next.js is the leading framework in the React ecosystem, featuring server-side rendering and static site generation among other rendering techniques. Utilizing its file-based routing architecture and its zero-config design principle, it is designed to enhance both the user and developer experience.",
    links: [
      {
        title: "Website",
        url: "https://nextjs.org/",
      },
      {
        title: "Docs",
        url: "https://nextjs.org/docs",
      },
      {
        title: "Learn Next.js",
        url: "https://nextjs.org/learn",
      },
      {
        title: "GitHub",
        url: "https://github.com/vercel/next.js",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Next.js",
      },
    ],
  },
  {
    name: "React",
    description:
      "React is a JavaScript library for building declarative and flexible user interfaces in a functional paradigm. Being the most popular front-end library in the world, it enables developers to create reusable UI components that can be composed to build complex web applications.",
    links: [
      {
        title: "Website",
        url: "https://reactjs.org/",
      },
      {
        title: "Docs",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      {
        title: "GitHub",
        url: "https://github.com/facebook/react",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
    ],
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a programming language developed and maintained by Microsoft. It is a syntactical superset of JavaScript, adding static typing to the language. TypeScript shows useful type errors to developers during development in modern IDEs, saving time developers would have otherwise spent debugging the software at runtime.",
    links: [
      {
        title: "Website",
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "Docs",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        title: "GitHub",
        url: "https://github.com/microsoft/TypeScript",
      },
      {
        title: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/TypeScript",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Its utilities come as helper classes that function as shorthands for the most common CSS patterns that developers use all the time.",
    links: [
      {
        title: "Website",
        url: "https://tailwindcss.com/",
      },
      {
        title: "Docs",
        url: "https://tailwindcss.com/docs",
      },
      {
        title: "GitHub",
        url: "https://github.com/tailwindlabs/tailwindcss",
      },
    ],
  },
  {
    name: "React Icons",
    description:
      "React Icons is SVG icon library. It comprises icons from over 25 of the most popular icon libraries including Ant Design Icons, Bootstrap Icons, Feather, Font Awesome, and Material Design icons. It uses React component syntax, and utilizes ES6 imports to only bundle the icons your app is using.",
    links: [
      {
        title: "Website",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "GitHub",
        url: "https://github.com/react-icons/react-icons",
      },
    ],
  },
  {
    name: "ESLint",
    description:
      "ESLint is a tool for linting JavaScript and TypeScript code. It is used to check for errors in code and to enforce coding conventions. It can be configured to use custom rule sets and is often run both by code editors during development as well as in CI/CD.",
    links: [
      {
        title: "Website",
        url: "https://eslint.org/",
      },
      {
        title: "Configuration",
        url: "https://eslint.org/docs/user-guide/configuring/",
      },
      {
        title: "Rules",
        url: "https://eslint.org/docs/rules/",
      },
      {
        title: "GitHub",
        url: "https://github.com/eslint/eslint",
      },
    ],
  },
  {
    name: "npm",
    description:
      "npm is the default package manager for Node.js. It consists of a command-line client, also called npm, and an online database of packages, called the npm registry, that enable developers to share and reuse code.",
    links: [
      {
        title: "Website",
        url: "https://www.npmjs.com/",
      },
      {
        title: "Docs",
        url: "https://docs.npmjs.com/",
      },
      {
        title: "GitHub",
        url: "https://github.com/npm/cli",
      },
    ],
  },
];
