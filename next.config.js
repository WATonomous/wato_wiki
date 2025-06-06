const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

const basePath = (process.env.WEBSITE_BASE_PATH || '').replace(/\/$/, '')

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};
