const MiniCssExtractsPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    mode:'production',
    output:{
        path: "C:/Users/arlax/Documents/Estudos/Atividades-HTML-CSS-JS/Fundamentos-JS/Utilizando-o-webpack/dist",
        filename: '[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.css/,
            use: [MiniCssExtractsPlugin.loader, 'css-loader']
        }]
    },
    plugins:[
        new MiniCssExtractsPlugin()
    ]
}