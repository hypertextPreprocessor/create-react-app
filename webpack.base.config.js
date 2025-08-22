const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const PUBLIC_PATH = "/";
console.log("当下环境：",process.env.NODE_ENV);
console.log("服务文档路经",PUBLIC_PATH);
var dynamicLoader = devMode ? {
    loader:'style-loader',
    options:{
        injectType:'styleTag',
        esModule:true
    }
} : MiniCssExtractPlugin.loader;
module.exports = {
    entry:{
        app:{
            import:'./src/index.js',
            dependOn:'skrollr'
        },
        skrollr:'./src/skrollr.min.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        publicPath:PUBLIC_PATH,
        library:{
            name:'skrollr',
            type:'var'
        }
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize: 20000,
            maxSize: 244000,
            automaticNameDelimiter: "-"
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:devMode?'ejuan shop-constructing...':'ejuan shop',
            meta:{
                viewport:"width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
            }
            //template:'./src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
            PUBLIC_PATH:JSON.stringify(PUBLIC_PATH)
        })
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
                    loader:'css-loader',
                    options:{
                        modules:{
                            auto:true
                        },
                        sourceMap:true
                    }
                }]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif|webp)$/,
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
            '@':path.resolve(__dirname,'src'),
            '@utlis':path.resolve(__dirname,'utlis'),
            '@com':path.resolve(__dirname,'src/components'),
            '@api':path.resolve(__dirname,'api'),
            '@cnf':path.resolve(__dirname,'config'),
            '@css':path.resolve(__dirname,'src/css'),
            '@img':path.resolve(__dirname,'assets/image'),
            '@caveats':path.resolve(__dirname,'src/caveats'),
            '@locale':path.resolve(__dirname,'locales'),
            '@router':path.resolve(__dirname,'router')
        },
        fallback:{
            'fs':require.resolve('fs')
        }
    }
}