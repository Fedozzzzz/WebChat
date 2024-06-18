const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
    reactStrictMode: true,

    webpack(config, { isServer }) {
        // if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'remote',
                    filename: 'static/chunks/remoteEntry.js',
                    exposes: {
                        // specify exposed pagesFSD and components
                        // './RemoteApp': './pages/_app.tsx',
                        './nav': "./components/Nav.js",
                        './RemoteApp': './pages/index.tsx',
                    },
                    shared: {
                        // specify shared dependencies
                        // read more in Shared Dependencies section
                    },
                    extraOptions: {
                        exposePages: true
                    }
                })
            );
        // }
        return config;
    },
}

module.exports = nextConfig
