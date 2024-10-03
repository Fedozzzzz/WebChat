const { NextFederationPlugin } =  require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const federationConfig = {
    name: 'remote',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
        './Button': './src/shared/ui/Button/index.ts',
    },
    shared: ['classnames', 'react', 'react-dom'],
    extraOptions: {
        exposePages: true
    }
};

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
            config.plugins.push(new NextFederationPlugin(federationConfig))
            config.plugins.push(new FederatedTypesPlugin({federationConfig}))
        return config;
    },
}

module.exports = nextConfig;
