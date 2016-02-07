var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var env = {
  isDev: () => argv.dev == true,
  name: argv.env
}

var fail = (message) => {
  throw new Error(message)
}

var define = {
  CONFIG: JSON.stringify((
    require('./environments.config.js')[env.name] || fail(`Environment ${env.name} does not exist in environments.config.js`)
  ))
}

console.log('define', define);

var distConfig = {
  entry: ['./src/index.jsx'],

  module: {
    loaders: {
      jsx: ['babel-loader?'+JSON.stringify({presets:['es2015','react']})],
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
    new webpack.DefinePlugin(define)
  ]
}

var devConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  ].concat(distConfig.entry),

  plugins: [
    new webpack.HotModuleReplacementPlugin(/(config)/, () => {
      return 4
    })
  ].concat(distConfig.plugins),

  module: {
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

      distConfig.module.loaders.scss

    ].concat(distConfig.module.loaders.commonLoaders)
  },
};

console.log(config);

module.exports = config;
