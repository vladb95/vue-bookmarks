'use strict';
const path = require('path');
const webpack = require('webpack');

var config = {
    context: __dirname + '/app',
    entry: {
        app: './index.js'
    },
    output: {
        path: __dirname + "/bundle",
        filename: "[name].js"
    },

    resolve: {
        extensions: ['', '.js', '.vue', '.css', '.json'],
        alias: {
            src: path.join(__dirname, '../app'),
            utils: path.join(__dirname, '../app/utils'),
            components: path.join(__dirname, '../app/components'),
            css: path.join(__dirname, '../app/css'),
            directives: path.join(__dirname, '../app/directives')
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.vue$/,
                loaders: ['vue']
            },
            
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    },
     babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        autoprefixer: false,
        },
   
    watch: true
};

module.exports = config;