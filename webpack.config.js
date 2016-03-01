const webpack = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var env = {
  isDev: function() { return argv.dev == true },
  name: argv.env
}

var fail = function(message) {
  throw new Error(message)
}

var envConfig = require('./environments.config.js')[env.name] || fail('Environment '+ env.name + ' does not exist in environments.config.js');
var locales = fs.readdirSync('./src/translations').filter(f => f.endsWith('.json')).map(f => f.substring(0, f.indexOf('-')));

var define = {
  CONFIG: JSON.stringify(Object.assign({}, envConfig, {locales: locales}))
}

var distConfig = {
  entry: ['./src/index.jsx'],

  module: {
    preLoaders: [],
    loaders: {
      jsx: ['babel-loader?'+JSON.stringify({presets:['es2015','react'], plugins: []})],
      sass: ["style","css","sass?indentedSyntax"],
      scss: {
        test: /\.scss$/,
        loaders: ["style","css","sass"]
      },
      commonLoaders: [
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
    }
  },

  plugins: [
    new BowerWebpackPlugin(),
    new webpack.DefinePlugin(define),
    new webpack.ProvidePlugin({
      $: "jquery",
      React: "react",
      ReactDOM: "react-dom"
    }),
    new HtmlWebpackPlugin({
      locales: locales.map(l => 'Intl.~locale.' + l).join(','),
      template: 'src/index.hbs'
    })
  ]
}

var devConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  ].concat(distConfig.entry),

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(distConfig.plugins),

  module: {

    preLoaders: [
      {test: /\.jsx$/, loaders: ["eslint-loader"], exclude: /node_modules/}
    ].concat(distConfig.module.preLoaders),

    loaders: {
      jsx: ['react-hot'].concat(distConfig.module.loaders.jsx).concat(['flowcheck']),
      sass: ["style","css?sourceMap","sass?indentedSyntax&sourceMap"]
    }
  }
};

var config = {

  entry: (env.isDev() ? devConfig.entry : distConfig.entry),

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  eslint: {
    configFile: './.eslintrc'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './src/',
    hot: env.isDev(),
    historyApiFallback: true
  },

  resolve: {
    root: __dirname + '/src/'
  },

  plugins: env.isDev() ? devConfig.plugins : distConfig.plugins,

  module: {

    preLoaders: (env.isDev() ? devConfig.module.preLoaders : []),

    loaders: [

      {
        test: /.jsx?$/,
        loaders: (env.isDev() ? devConfig.module.loaders.jsx : distConfig.module.loaders.jsx), // react-hot must appear before babel
        exclude: /node_modules/
      },

      {
        test: /\.sass$/,
        loaders: (env.isDev() ? devConfig.module.loaders.sass : distConfig.module.loaders.sass)
      },

      {
        test: /\.hbs$/,
        loader: "handlebars-template-loader"
      },

      distConfig.module.loaders.scss

    ].concat(distConfig.module.loaders.commonLoaders)
  }
};

console.log(config);

module.exports = config;
