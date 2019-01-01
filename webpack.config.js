const path = require('path');

/*
 * Cleaning up the /dist folder -
 * https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
 * https://www.npmjs.com/package/clean-webpack-plugin
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
 let pathsToClean = [
    'public/css',
    'public/.cache'
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
const Notifier = require('./resources/scripts/plugins/Notifier');

module.exports = {

    entry: {
        'bootstrap-grid': path.resolve(__dirname, 'resources/scss/bootstrap-grid.scss'),
        'bootstrap-reboot': path.resolve(__dirname, 'resources/scss/bootstrap-reboot.scss'),
        'bootstrap': path.resolve(__dirname, 'resources/scss/bootstrap.scss'),
        'coustom-rtl':  path.resolve(__dirname, 'resources/custom-scss/custom-rtl.scss')
    },

    mode: devMode ? 'production' : 'development',

     /*
     * Using source maps
     * https://webpack.js.org/guides/development/#using-source-maps
     * source maps used for debugging code
     */
    devtool: 'source-map',

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
        filename: devMode === 'production' ? '.cache/[name].min.js' : '.cache/[name].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public'
    },

     optimization: {
         minimizer: [
             new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                cache: true,
                parallel: 4,
                sourceMap: true
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
                 use: [
                    {loader: devMode === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader},
                     {
                         loader: "css-loader", options: {
                            sourceMap: true
                        }
                    },
                     {
                         loader: "sass-loader", options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    }
};
