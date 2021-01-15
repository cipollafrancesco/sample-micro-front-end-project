const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            /**
             * Condivido i seguenti node_modules con gli altri remotes che lo hanno (verranno caricati in async)
             * Se ci sono diverse versioni dello stesso module, verranno scaricate le diverse versioni e non condivise
             * Il ModuleFederationPlugin si occupa di effettuare tutti i controlli del caso
             */
            shared: ['faker']
        })
    ]
}