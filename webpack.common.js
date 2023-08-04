const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, //빌드했을 때 경로
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx", // TypeScript와 JSX를 변환하기 위해 설정합니다.
            target: "es2015", // 원하는 ES 버전을 선택합니다.
          },
        },
      },
      // css 플러그인 설정
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
        ],
      },
      // CSS 파일을 별도로 출력하는 플러그인 설정
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      // file-loader 플러그인 설정
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "images/",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
    },
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new HtmlTagsPlugin({
    //   append: false,
    //   tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "node_modules/cesium/Build/Cesium"),
    //       to: "cesium",
    //     },
    //   ],
    // }),
    // CSS 파일을 별도로 출력하는 플러그인 설정
    // new MiniCssExtractPlugin({
    //   filename: "styles.css",
    // }),
  ],
};
