const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container', // in realtà viene utilizzato soltanto nei remotes (lo metto per chiarezza)
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js', // remote_name@remoteEntryFileUrl
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            }
        })
    ]
}