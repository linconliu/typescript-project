import  path from 'path';
import { Configuration } from 'webpack';
import "webpack-dev-server";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractplugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const config: Configuration = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractplugin.loader, "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My project',
      template: 'index.html'
    }),
    new MiniCssExtractplugin({
      filename: 'bundle.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/img', to: 'img' }
      ]
    })
  ],
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};

export default config;
