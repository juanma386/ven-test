// next.config.js
require('dotenv').config(); // Carga dotenv aquí
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(
        new webpack.EnvironmentPlugin({
            // expone las variables como process.env.NOMBRE_VARIABLE
            ENDPOINT_URL: process.env.ENDPOINT_URL,
        })
      );
      return config;
    },
  };

  module.exports = nextConfig;