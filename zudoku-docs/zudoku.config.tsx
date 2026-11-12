import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/education-platform-api",

  site: {
    logo: {
      src: {
        light: "/logo-light.svg",
        dark: "/logo-dark.svg",
      },
      alt: "Education Platform",
      width: "130px",
    },
  },

  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        "/installation",
        "/authorization",
        "/about-project",
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/about",
      label: "About",
    },
  ],

  redirects: [
    {
      from: "/",
      to: "/installation",
    },
  ],

  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
