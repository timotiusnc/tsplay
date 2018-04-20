const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.tsx",
    print: "./src/print.ts"
  },

  // Enable sourcemaps for debugging webpack's output
  devtool: "source-map",

  devServer: { // Tells webpack-dev-server to serve the files from the `dist` directory on `localhost:8080`
    contentBase: './dist'
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ // Generating index.html, so we don't need to manually update the included script(s)
      title: 'Output Management'
    })
  ],

  resolve: {
    //Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // CSS files
      { test: /\.(css|jsx)$/, use: ['style-loader', 'css-loader'] },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      // awesome-ts-loader can't be used with webpack-dev-server (TypeError: Cannot read property '_tsInstances' of undefined)
      // https://github.com/s-panferov/awesome-typescript-loader/issues/541
      { test: /\.tsx?$/, loader: "ts-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      { test: /\.(png|svg|jpg|gif)$/, use: [{ loader: 'file-loader', options: { name: '[hash].[ext]' } }] }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
