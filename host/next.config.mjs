const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        // specify remotes
        remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    };
}

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    output: 'export',
    webpack(config, { isServer }) {
        // if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'host',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: remotes(isServer),
                    exposes: {
                        // Host pagesFSD also can expose modules
                    }
                })
            );
        // }
        return config;
    },
}

module.exports = nextConfig