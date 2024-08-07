const path = require("path");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    fs: false, // No browser polyfill available for 'fs'
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util/"),
    url: require.resolve("url/"),
    zlib: require.resolve("browserify-zlib"),
    querystring: require.resolve("querystring-es3"),
  };

  return config;
};
