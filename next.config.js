/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    // webpack: (config) => {
    //     // See https://webpack.js.org/configuration/resolve/#resolvealias
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //         "sharp$": false,
    //         "onnxruntime-node$": false,
    //     }
    //     return config;
    // }
}

module.exports = nextConfig
