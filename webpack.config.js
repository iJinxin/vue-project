/**
 * Created by jinxin on 2018/5/8.
 */
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
};