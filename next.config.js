const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  fs: "empty",
};

// module.exports = ;

module.exports = {
  nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
