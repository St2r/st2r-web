/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    emotion: {
      importMap: {
        "@mui/material": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material", "styled"]
          }
        }
      }
    }
  }
}

module.exports = nextConfig
