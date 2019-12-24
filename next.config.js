/**
 * Next.js imports Polaris CSS styles from webpack so they
 * can be used across the app
 */

require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
    webpack: (config) => {
        const env = { API_KEY: apiKey };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    }
});