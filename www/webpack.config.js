const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    output: {
        filename: './static/assets/[name].[chunkhash].js',
        library: "[name]",
        path: path.resolve(__dirname, "ui"),
        assetModuleFilename: './static/images/[hash][ext][query]',
        clean: true
    },
    mode: "development",
    devServer: {
        static: './ui/',
        open: true,
        hot: true,
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(html)$/,
            use: ['html-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./html/index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/pages/Todo.html",
            template: "./src/html/Todo.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/template/Login.html",
            template: "./src/html/popups/Login.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/template/NewTodo.html",
            template: "./src/html/popups/NewTodo.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/template/DeleteTodo.html",
            template: "./src/html/popups/DeleteTodo.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/template/EditTodo.html",
            template: "./src/html/popups/EditTodo.html"
        }),
        new HtmlWebpackPlugin({
            filename: "./html/template/MoreTodo.html",
            template: "./src/html/popups/MoreTodo.html"
        }),
        // new FaviconsWebpackPlugin({
        //     logo: './src/images/header/logo.png',
        //     prefix: "./static/images/"
        // }),
        // new copyPlugin({
        //     patterns: [
        //         { from: "./src/images/profile", to: "./static/images/profile" }
        //     ]
        // })
    ]
}