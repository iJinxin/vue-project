/**
 * Created by jinxin on 2018/5/8.
 */
const path = require('path');


function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    // 解析vue文件
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    // 改变项目根目录
    devServer: {
        contentBase: path.resolve(__dirname),
        port: 8080,
        inline: true
    },
    devtool: 'source-map',
    module: {
        rules : [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader",
        },{
            test: /\.vue$/,
            loader: "vue-loader"
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: "url-loader"
        }]
    }
};