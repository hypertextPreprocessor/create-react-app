const baseConfig = require('./webpack.base.config.js');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig,{
    mode:'production',
    devtool:'source-map'
})