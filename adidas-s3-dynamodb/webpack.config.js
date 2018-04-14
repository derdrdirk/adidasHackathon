const path = require('path');

module.exports = {
    entry: './handler.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'handler.js',
        library: 'handler',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
