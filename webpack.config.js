const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "main.js",
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    preferRelative: true,
  },
  target: "web",
  module: {
    rules: [
      // HotReload
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean,
                ),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
      // TypeScript
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      // CSS
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ].filter(Boolean),
};
