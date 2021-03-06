const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/')
        },
    },
    mode: "development",
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/,
                type: 'asset',
                // generator:{
                //     filename: 'assets/pictures/[hash][ext]',
                // /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes 
                // (le agrego el [hash] para evitar problemas con el cache, además [ext] hace 
                // referencia a la extensión del archivo que se haya procesado).*/
                // }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3005,
        historyApiFallback: true
    }
}