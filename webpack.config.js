var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, { test: /\.css$/, loader: 'style-loader!css-loader' }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

};
