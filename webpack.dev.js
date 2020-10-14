const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port:3001
    },
    entry: {
        home:'./src/client/index.js',
        about:'./src/client/js/about.js',
    },
    // devtool: 'source-map',
    // entry: path.resolve(__dirname, 'src') + '/src/client/index.js',
    // entry: {
    //     home: './src/client/js/app.js',
    //     about: './src/client/js/about.js',
    // },
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist')
        // path: path.resolve(__dirname, './dist','scripts'),
        // publicPath: './dist/scripts/',
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            favicon: "./src/client/favicon.ico",
            template: "src/client/index.html",
            filename: "index.html",
            chunks: ['home']
        }),
        new HtmlWebPackPlugin({
            template: "src/client/views/about.html",
            filename: "about.html",
            chunks: ['about']
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW(),
    ],
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/imgs/[name].[ext]",
                    }
                }
            }
        ]
    }
    // devServer: {
    //     contentBase: './'
    // }
};

