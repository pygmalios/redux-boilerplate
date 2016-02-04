var webpack = require('webpack');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var env = {
  isDev: () => argv.dev == true
}

var distConfig = {
  entry: ['./src/index.jsx'],

  module: {
    loaders: {
      jsx: ['babel-loader?'+JSON.stringify({presets:['es2015','react']})],
      sass: ["style","css","sass?indentedSyntax"]
    }
  }
}

var devConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  ].concat(distConfig.entry),

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: {
      jsx: ['react-hot'].concat(distConfig.module.loaders.jsx),
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
    hot: env.isDev()
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
      }

    ]
  },
};

console.log(config);

module.exports = config;
