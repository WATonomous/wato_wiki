// Original Next.js config
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // output: export doesn't support Next.js image optimization
    unoptimized: true,
  },
  // Next.js doesn't support trailing slashes in basePath
  // This config needs to be in sync with export-images.config.js
  basePath: (process.env.WEBSITE_BASE_PATH || '').replace(/\/$/, ""),
  webpack: (config) => {
    // Add Typescript support
    // Reference: https://www.altogic.com/blog/nextjs-typescript
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  eslint: {
    dirs: [
      'pages',
      'src',
      'app',
      'components',
      'lib',
      'theme.config.jsx',
      "tailwind.config.js",
      "next.config.js",
      "postcss.config.js",
    ]
  }
}

// Add Nextra config
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true, // LaTeX support: https://nextra.site/docs/guide/advanced/latex
});
  
module.exports = withNextra(module.exports)
