const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
var dynamicLoader = devMode ? {
    loader:'style-loader',
    options:{
        injectType:'styleTag',
        esModule:true
    }
} : MiniCssExtractPlugin.loader;
module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:devMode?'恒韵翡翠-开发中...':'恒韵翡翠-非凡品质',
            //template:'./src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.(?:jsx?|mjs|cjs)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react'],
                        //plugins:['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test:/\.css$/i,
                use:[dynamicLoader,{
                    loader:'css-loader'
                }]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                type:'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                type:'asset/resource'
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    }
}