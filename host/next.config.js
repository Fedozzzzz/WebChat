const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
const {FederatedTypesPlugin} = require('@module-federation/typescript');

const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        // specify remotes
        remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    };
}

const federationConfig = (isServer) => ({
    name: 'host',
    filename: 'static/chunks/remoteEntry.js',
    remotes: remotes(isServer),
    shared: ['classnames', 'react', 'react-dom'],
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    output: 'export',
    webpack(config, {isServer}) {
        // if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin(federationConfig(isServer))
            );
            config.plugins.push(
                new FederatedTypesPlugin({federationConfig: federationConfig(isServer)})
            );
        // }
        return config;
    },
}

module.exports = nextConfig;