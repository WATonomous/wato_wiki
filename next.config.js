const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/wato_wiki",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
