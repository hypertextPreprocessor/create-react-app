const path = require('path');
const baseConfig = require('./webpack.base.config.js');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig,{
    mode:'development',
    devtool:'source-map',
    devServer:{
        host:'0.0.0.0',
        hot:true,
        open:true,
        static:{
            directory:path.join(__dirname,'public'),
            publicPath:'/',
            serveIndex: true,
            watch:true
        },
        port:8082,
        proxy:[{
            context:['/api'],
            target:'http://127.0.0.1:8080',
            pathRewrite:{'^/api':''}
        }]
    }
})