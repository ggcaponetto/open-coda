const path = require('path');

module.exports = {
  entry: './src/tools/video-capture/video-capture.js',
  output: {
    library: 'video-capture',
    libraryTarget: 'umd',
    auxiliaryComment: 'Video capture library comment',
    filename: 'video-capture.min.js',
    path: path.resolve(__dirname, 'public/dist/tools/video-capture'),
  },
};
