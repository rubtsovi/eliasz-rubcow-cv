const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
module.exports = {
    mode: env,
    devtool: env === 'development' ? "inline-source-map" : '(none)',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: "handlebars-loader",
                    options: {
                        inlineRequires: '/assets/images/'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: env === 'development' ? '[name].[ext]' : '[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts",
                        name: env === 'development' ? '[name].[ext]' : '[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.hbs",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        new webpack.DefinePlugin({
            LANG: JSON.stringify(process.env.LANG)
        })
    ]
}