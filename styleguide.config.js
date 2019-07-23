const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');

const webpackConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'docs'),
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]---[hash:base64:5]',
                            },
                            importLoaders: 1,
                            localsConvention: 'camelCase',
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};

module.exports = {
    title: `React Radio v${pkg.version}`,
    sections: [
        {
            name: 'Radio Button',
            sections: [
                {
                    name: 'Uncontrolled',
                    content: path.resolve(__dirname, 'styleguide/examples/UncontrolledRadioButton.md'),
                },
                {
                    name: 'Controlled',
                    content: path.resolve(__dirname, 'styleguide/examples/ControlledRadioButton.md'),
                },
            ],
        },
        {
            name: 'Radio Group',
            sections: [
                {
                    name: 'Uncontrolled',
                    content: path.resolve(__dirname, 'styleguide/examples/UncontrolledRadioGroup.md'),
                },
                {
                    name: 'Controlled',
                    content: path.resolve(__dirname, 'styleguide/examples/ControlledRadioGroup.md'),
                },
            ],
        },
        {
            name: 'Components',
            components: [
                'RadioButton',
                'RadioGroup',
            ].map(c => path.resolve(__dirname, `src/${c}.jsx`))
        }
    ],
    require: [
        '@babel/polyfill',
        '@trendmicro/react-form-control/dist/react-form-control.css',
        '@trendmicro/react-grid-system/dist/react-grid-system.css',
        path.resolve(__dirname, 'styleguide/setup.js'),
        path.resolve(__dirname, 'styleguide/styles.css')
    ],
    ribbon: {
        url: pkg.homepage,
        text: 'Fork me on GitHub'
    },
    serverPort: 8080,
    exampleMode: 'collapse',
    showSidebar: true,
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer.jsx'),
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper.jsx'),
    },
    styleguideDir: 'docs/',
    webpackConfig: webpackConfig
};
