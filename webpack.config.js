module.exports = {
    entry: __dirname + '/src/flowuplabels.js',
    output: {
        path: __dirname + '/dist',
        filename: 'flowuplabels.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
