const appConfig = require("./config");

module.exports = {
  env: {
    CANONICAL_URL: 'http://localhost:4000',
ENABLE_SPA_ROUTING: true,
EXTERNAL_GRAPHQL_URL: 'http://localhost:3000/graphql',
INTERNAL_GRAPHQL_URL: 'http://api.reaction.localhost:3000/graphql',
OAUTH2_ADMIN_PORT: 4445,
OAUTH2_ADMIN_URL: 'http://hydra.reaction.localhost:4445',
OAUTH2_AUTH_URL:'http://localhost:4444/oauth2/auth',
OAUTH2_CLIENT_ID:'example-storefront',
OAUTH2_CLIENT_SECRET:'CHANGEME',
OAUTH2_PUBLIC_LOGOUT_URL:'http://localhost:4444/oauth2/sessions/logout',
OAUTH2_HOST:'hydra.reaction.localhost',
OAUTH2_IDP_PUBLIC_CHANGE_PASSWORD_URL:'http://localhost:4100/account/change-password?email=EMAIL&from=FROM',
OAUTH2_IDP_HOST_URL:'http://identity.reaction.localhost:4100',
OAUTH2_TOKEN_URL:'http://hydra.reaction.localhost:4444/oauth2/token',
PORT: 4000,
SEGMENT_ANALYTICS_SKIP_MINIMIZE:true,
SEGMENT_ANALYTICS_WRITE_KEY:'ENTER_KEY_HERE',
SESSION_MAX_AGE_MS:2592000000,
SESSION_SECRET:'CHANGEME',
STRIPE_PUBLIC_API_KEY:'ENTER_STRIPE_PUBLIC_KEY_HERE',
    IS_BUILDING_NEXTJS: false
  },
  /**
   * `serverRuntimeConfig` is available in browser code, ONLY when run on the server
   * @example
   * import getConfig from "next/config";
   * const { serverRuntimeConfig } = getConfig();
   */
  serverRuntimeConfig: {
    graphqlUrl: appConfig.INTERNAL_GRAPHQL_URL
  },
  /**
   * `publicRuntimeConfig` is available in browser code, even when run on the server
   * @example
   * import getConfig from "next/config";
   * const { publicRuntimeConfig } = getConfig();
   */
  publicRuntimeConfig: {
    canonicalUrl: appConfig.CANONICAL_URL,
    graphqlUrl: appConfig.EXTERNAL_GRAPHQL_URL,
    segmentAnalytics: {
      skipMinimize: appConfig.SEGMENT_ANALYTICS_SKIP_MINIMIZE,
      writeKey: appConfig.SEGMENT_ANALYTICS_WRITE_KEY
    },
    stripePublicApiKey: appConfig.STRIPE_PUBLIC_API_KEY,
    enableSPARouting: appConfig.ENABLE_SPA_ROUTING
  },
  // NextJS builds to `/src/.next` by default. Change that to `/build/app`
  distDir: "../build/app",
  webpack: (webpackConfig) => {
    webpackConfig.module.rules.push({
      test: /\.(gql|graphql)$/,
      loader: "graphql-tag/loader",
      exclude: ["/node_modules/", "/.next/"],
      enforce: "pre"
    });

    webpackConfig.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto"
    });

    // Duplicate versions of the styled-components package were being loaded, this config removes the duplication.
    // It creates an alias to import the es modules version of the styled-components package.
    // This is a workaround until the root issue is resolved: https://github.com/webpack/webpack/issues/9329
    webpackConfig.resolve.alias["styled-components"] = "styled-components/dist/styled-components.browser.esm.js";

    return webpackConfig;
  }
};
