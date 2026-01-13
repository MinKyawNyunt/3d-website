/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  // distDir: 'docs',
  basePath: '/3d-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
