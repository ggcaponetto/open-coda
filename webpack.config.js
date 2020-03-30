const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    "video-capture": './src/tools/video-capture/video-capture.js'
  },
  output: {
    library: 'video-capture',
    libraryTarget: 'umd',
    auxiliaryComment: 'Video capture library comment',
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'public/dist/tools/video-capture'),
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      moduleFilename: ({ name }) => `${name}.css`,
    }),
  ],
  module: {
    rules: [
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
};
