/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and
 * recompile as required if the subfolder /webpack-dev-server/ is visited. Visiting the root
 * will not automatically reload.
 */
var webpack = require('webpack');

module.exports = {
    output: {
        filename: 'main.js',
        publicPath: '/assets/',
    },

    cache: true,
    debug: true,
    devtool: 'source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src/scripts/index.js',
    ],

    stats: {
        colors: true,
        reasons: true,
    },

    resolve: {
        extensions: ['', '.js'],
        alias: {
            styles: './src/styles',
            components: './src/scripts/components/',
        },
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot',
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015'],
            },
        }, {
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json',
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192',
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]',
        }],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
    ],

};
