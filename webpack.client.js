const path = require('node:path')

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/')
    },
    resolve: {
        extensions:['.js','.jsx','.json'],
    },
    module: {
        rules: [
            {
                test: /((\.js)|(\.jsx))$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', 
                            {
                                "useBuiltIns": "entry",
                                "corejs": "3.22"
                            }
                        ]
                    ]
                }
            }
        ]
    }
}
