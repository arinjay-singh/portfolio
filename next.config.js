/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: async () => [
    {
      source: "/public/resume.html",
      destination: "/pages/api/resume.js",
    },
  ],
  reactStrictMode: true,
}


module.exports = nextConfig
