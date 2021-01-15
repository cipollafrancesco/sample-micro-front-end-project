const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap.js'
            },
            /**
             * In questo modo posso comunque avere diverse istanze di faker nel mio browser.
             * In alcuni casi (es. React) non è possibile perchè la lib da errore, mi serve quindi un'istanza Singleton.
             * Se le versioni dello stesso module sono diverse da un WARNING di conflitto.
             * PRIMA: shared: ['faker']
             * DOPO: shared: {faker: {singleton: true}}
             */
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}