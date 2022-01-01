const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   devServer: {
      // host and port are specified via the command line in package.json
      contentBase: path.join(__dirname, 'docs'),
   },
   entry: './src/index.ts',
   devtool: 'inline-source-map',
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader',
            ],
         },
         {
            test: /\.(glsl|vs|fs)$/,
            loader: 'ts-shader-loader',
         }
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js']
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'docs')
   },
   // add to webpack plugins
   plugins: [
      new HtmlWebpackPlugin({
         template: 'index.html',

      })
   ]
};


