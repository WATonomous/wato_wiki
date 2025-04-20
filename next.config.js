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
};

const pr = process.env.PR_NUMBER
const isPreview = Boolean(pr)

module.exports = {
  basePath: isPreview ? `/previews/pr-${pr}` : '',
  // Also recommended:
  trailingSlash: true,
  assetPrefix: isPreview ? `/previews/pr-${pr}/` : '',
}