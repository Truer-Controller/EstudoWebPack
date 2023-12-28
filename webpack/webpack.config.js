const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona css a dom injetando a tag <style>
                'css-loader',
                'sass-loader',
            ]
        }]
    }
}