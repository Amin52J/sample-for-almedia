const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        // TODO: It's for KR 1.2 and should be changed to /all after starting to work on KR 1.4 (having 3 categories)
        destination: "/badezimmer",
        permanent: false,
      },
      {
        // TODO: It's for KR 1.2 and should be removed after starting to work on KR 1.4 (having 3 categories)
        source: "/all",
        destination: "/badezimmer",
        permanent: false,
      },
      {
        source: "/",
        destination: process.env.NEXT_REDIRECT_ROOT_URL,
        permanent: true,
        basePath: false,
      },
    ];
  },
};

const SentryWebpackPluginOptions = {
  include: {
    paths: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", ".*.js"],
  },
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
