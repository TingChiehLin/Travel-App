const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    // devtool: 'source-map',
    // entry: path.resolve(__dirname, 'src') + '/src/client/index.js',
    // entry: {
    //     home: './src/client/js/app.js',
    //     about: './src/client/js/about.js',
    // },
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, './dist','scripts'),
        publicPath: './dist/scripts/',
    },
    devtool: 'cheap-source-map',
    plugins: [
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new HtmlWebPackPlugin({
            template: "src/client/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin()
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
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    // devServer: {
    //     contentBase: './'
    // }
};