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
        skrollr:{
            import:'./src/skrollr.min.js',
            library:{
                name:'skrollr',
                type:'var'
            }
        },
        // jspread:{
        //     import: "jspreadsheet-ce",
        //     library:{
        //         name:'jspread',
        //         type:'var',
        //         export: 'default'
        //     }
        // }
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        publicPath:PUBLIC_PATH
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
            title:devMode?'互联互卷-开发中...':'互联互卷 - 优化未来',
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
                exclude:/node_modules/,
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
                include:path.resolve(__dirname,'src/index.css'),
                use:[{
                    loader:'style-loader',
                },{
                    loader:'css-loader',
                    options:{
                        modules:false,
                        importLoaders:2
                    }
                },
                {
                    loader:'postcss-loader',
                    options:{
                        postcssOptions:{
                            plugins:{
                                "@tailwindcss/postcss": {},
                            }
                        }
                    }
                }
                ]
            },
            {
                test:/\.css$/i,
                exclude:[path.resolve(__dirname,'src/index.css')],
                use:[dynamicLoader,{
                    loader:'css-loader'
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
            '@css':path.resolve(__dirname,'src/css'),
            '@img':path.resolve(__dirname,'assets/image'),
            '@video':path.resolve(__dirname,'assets/video'),
            '@caveats':path.resolve(__dirname,'src/caveats'),
            '@locale':path.resolve(__dirname,'locales')
        },
        fallback:{
            'fs':require.resolve('fs')
        }
    }
}