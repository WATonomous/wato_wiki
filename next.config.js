const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: (process.env.WEBSITE_BASE_PATH || '').replace(/\/$/, ''),
};
