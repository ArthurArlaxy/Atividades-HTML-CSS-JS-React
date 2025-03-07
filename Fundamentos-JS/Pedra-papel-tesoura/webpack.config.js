const path = require('path')

module.exports = {
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        compress:true,
        port: 8000
    },
    entry:{
        main:"./src/app.js"
    },
    mode: 'production',
    output:{
        path:"C:/Users/arlax/Documents/Estudos/Atividades-HTML-CSS-JS/Fundamentos-JS/Pedra-papel-tesoura/dist",
        filename: "[name].min.js"
    },
    module:{
        rules:[{
            test: /\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.js$/,
            use:['babel-loader']
        }]
    },
    output:{
        filename:'[name].min.js'
    }
}