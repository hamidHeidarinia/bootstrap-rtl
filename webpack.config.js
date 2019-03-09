const path = require('path');

/*
 * Cleaning up the /dist folder -
 * https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
 * https://www.npmjs.com/package/clean-webpack-plugin
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
    'dist/css',
    'dist/.cache'
    // 'dist'
];

// the clean options to use
let cleanOptions = {
    root: __dirname,
    // exclude:  ['index.html'],
    verbose: true,
    dry: false
};

// magnify your JavaScript - https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// extracts CSS - https://webpack.js.org/plugins/mini-css-extract-plugin/#src/components/Sidebar/Sidebar.jsx
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 * magnify the output
 * so make sure to also specify a JS minimizer
 * https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
 * https://github.com/NMFR/optimize-css-assets-webpack-plugin
 */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Run scripts - https://www.npmjs.com/package/cross-env
const devMode = process.env.NODE_ENV === 'production';

// show notification - https://www.npmjs.com/package/node-notifier
const Notifier = require('./src/plugins/Notifier');

module.exports = {

    entry: {
        'bootstrap-rtl': path.resolve(__dirname, 'src/scss/bootstrap.scss'),
        'bootstrap-rtl-grid': path.resolve(__dirname, 'src/scss/bootstrap-grid.scss'),
        'bootstrap-rtl-reboot': path.resolve(__dirname, 'src/scss/bootstrap-reboot.scss'),
        'custom-rtl':  path.resolve(__dirname, 'src/scss/bootstrap-custom.scss'),
    },

    mode: devMode ? 'production' : 'development',

    plugins: [
        // Cleaning up the /dist folder - https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        /* 
         * This plugin extracts CSS into separate files.
         * It creates a CSS file per JS file which contains CSS. 
         * https://webpack.js.org/plugins/mini-css-extract-plugin/#advanced-configuration-example
         */
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].min.css' : 'css/[name].css',
            chunkFilename: devMode ? 'css/[id].min.css' : 'css/[id].[hash].css',
            sourceMap: true
        }),
        new Notifier()
    ],

    output: {
        // filename: devMode === 'production' ? 'js/[name].min.js' : 'js/[name].js',
        filename: `.cache/[name]${ devMode ? '.min' : ''  }.js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },

    optimization: {
        minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
        }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },

    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            // CSS file - Loading CSS - https://webpack.js.org/guides/asset-management/#loading-css
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: 'dist/css'
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // Loads a Sass/SCSS file and compiles it to CSS. - sass-loader - https://webpack.js.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                // exclude: /custom-rtl.scss/,
                use: [
                    // {loader: devMode === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader},
                    {
                    loader: devMode === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // loader: devMode ? MiniCssExtractPlugin.loader : 'style-loader',
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: 'dist/css'
                        }
                    },
                    {
                        loader: "css-loader", options: {
                            // url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true,
                            includePaths: ["src/sass", "dist/css"]
                        }
                    }
                ]
            }
        ]
    },
    /*
     * Using source maps
     * https://webpack.js.org/guides/development/#using-source-maps
     * source maps used for debugging code
     */
    devtool: 'source-map',
};
