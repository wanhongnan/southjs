
import {resolve as __resolve} from 'path';
import { loader as minicssLoader } from 'mini-css-extract-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CleanWebpackPlugin from 'clean-webpack-plugin'

function resolve(p){
    return __resolve(__dirname,`${p}`);
}

var webpackConfig = {
    entry: {
        "index": resolve('src/index.tsx')
    },
    output:{
        path: resolve('./dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.json5', 'sass', 'css', 'scss','less'],
        modules: ["node_modules", "src"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CleanWebpackPlugin('./dist', {
            root: resolve("")
        })
    ],
    externals: {},
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    resolve("src")
                ],
                loader: 'babel-loader',
                options: {
                    babelrc: true
                }
            },{
                test: /\.json5$/,
                loader: 'json5-loader',
            },{
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: minicssLoader,
                    options: {
                        fallback: "style-loader",
                        sourceMap: true,
                        publicPath: "../",
                    }
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            },{
                test: /\.(le)ss$/,
                use: [{
                    loader: minicssLoader,
                    options: {
                        fallback: "style-loader",
                        sourceMap: true,
                        publicPath: "../",
                    }
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }, {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name() {
                        return "images/[name].[ext]"
                    }
                }
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "fonts/[name].[ext]"
                }
            }
        ]
    }
}
export default webpackConfig;
