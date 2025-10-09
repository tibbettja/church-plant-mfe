import pkg_config from './package.json' with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  async redirects() {
    return [
      {
        source: '/auth/signin',
        destination: '/',
        permanent: true
      }
    ]
  },
  env: {
    NEXT_PUBLIC_VERSION: pkg_config.version
  },
  basePath: '/church-plant-mfe'
};

export default nextConfig;
